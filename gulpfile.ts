import * as del from 'del';
import * as dts from 'dts-element';
import * as fs from 'fs';
import * as glob from 'glob';
import * as gulp from 'gulp';
import * as gulp_rename from 'gulp-rename';
import * as gulp_util from 'gulp-util';
import * as path from 'path';
import * as gulp_run from 'run-sequence';
import * as through from 'through2';
import {bind_jsdoc} from './templates/utils/bind-jsdoc';
import {placeholder_name, placeholder_name_abbr} from './templates/utils/constants';
import {create_curried_declarations} from './templates/utils/create-curried-declarations';

const namespace_ramda = 'R';

const input_relative_dirname = 'templates';
const glob_index = `${input_relative_dirname}/README.md`;
const glob_templates = `${input_relative_dirname}/*.ts`;

const output_relative_dirname = 'src';
const output_extname = '.d.ts';

const output_index_relative_dirname = '.';
const output_index_basename = `index`;
const output_index_basename_full = `${output_index_basename}${output_extname}`;
const output_index_filename = `${output_index_relative_dirname}/${output_index_basename_full}`;

gulp.task('clean', async () => del([output_relative_dirname, output_index_filename]));
gulp.task('build-files', () => generate_files(glob_templates));
gulp.task('build-index', generate_index);

gulp.task('build', ['clean'], (callback: (error?: any) => void) =>
  gulp_run(['build-index', 'build-files'], callback));

gulp.task('build-watch', ['build'], (_callback: (error?: any) => void) => {
  gulp.watch(glob_templates, event => {
    const input_relative_filename = path.relative(process.cwd(), event.path);
    gulp_util.log(`Detected '${gulp_util.colors.cyan(input_relative_filename)}' ${event.type}`);

    const output_relative_filename = input_relative_filename
      .replace(input_relative_dirname, output_relative_dirname)
      .replace(/(\.d)?\.ts$/, '.d.ts');

    switch (event.type) {
      case 'changed':
        generate_files(input_relative_filename, on_error, on_end);
        break;
      case 'added':
      case 'deleted':
        generate_index();
        generate_files(input_relative_filename, on_error, on_end);
        break;
      default:
        throw new Error(`Unexpected event type '${event.type}'`);
    }

    let error: Error | undefined;
    function on_error(this: NodeJS.ReadWriteStream, e: Error) {
      error = e;
      // tslint:disable-next-line:no-invalid-this
      this.end();
    }
    function on_end() {
      if (error !== undefined) {
        gulp_util.log(`Building '${gulp_util.colors.cyan(output_relative_filename)}' failed\n\n${error.stack}`);
      } else {
        gulp_util.log(`Building '${gulp_util.colors.cyan(output_relative_filename)}' complete`);
      }
      gulp_util.log('Watching for file changes.');
    }
  });
});

function generate_files(
    glob: string,
    on_error: (error: Error) => void = error => { throw error; },
    on_end: () => void = () => { /* do nothing */ }) {
  return gulp.src(glob_templates)
    .pipe(gulp_generate(generate_file_content))
    .on('error', on_error)
    .on('end', on_end)
    .pipe(gulp_rename(the_path => {
      the_path.basename = the_path.basename!.replace(/\.d$/, '');
      the_path.extname = output_extname;
    }))
    .pipe(gulp.dest(output_relative_dirname));
}

function generate_index() {
  return gulp.src(glob_index)
    .pipe(gulp_generate(generate_index_content))
    .pipe(gulp_rename({basename: output_index_basename, extname: output_extname}))
    .pipe(gulp.dest(output_index_relative_dirname));
}

function get_top_level_members(filename: string): dts.ITopLevelMember[] {
  const members: dts.ITopLevelMember[] = [];
  const basename = path.basename(filename);

  if (basename.endsWith('.d.ts')) {
    if (basename === '__.d.ts' || basename.startsWith('$')) {
      push_members();
    } else {
      push_dts_members();
    }
  } else if (basename.endsWith('.ts')) {
    push_ts_members();
  } else {
    throw new Error(`Unexpected filename ${filename}`);
  }

  if (!basename.startsWith('$')) {
    bind_member_jsdoc_and_add_export_equal();
  }

  return members;

  function bind_member_jsdoc_and_add_export_equal() {
    const target_member = members.find(member => {
      switch (member.kind) {
        case dts.ElementKind.FunctionDeclaration:
        case dts.ElementKind.VariableDeclaration:
          return true;
        default:
          return false;
      }
    }) as undefined | dts.IFunctionDeclaration | dts.IVariableDeclaration;
    if (target_member === undefined) {
      throw new Error(`Cannot find element to bind jsdoc in ${filename}`);
    }
    bind_jsdoc(filename, target_member);
    members.push(dts.create_export_equal({value: target_member.name!}));
  }

  function push_members() {
    const top_level_element = dts.parse(fs.readFileSync(filename, 'utf8'));
    members.push(...top_level_element.members);
  }

  function push_dts_members() {
    const top_level_element = dts.parse(fs.readFileSync(filename, 'utf8'));
    const imports = top_level_element.members.filter(
      (member): member is dts.IImportNamed => (member.kind === dts.ElementKind.ImportNamed),
    );
    const functions = top_level_element.members.filter(
      (member): member is dts.IFunctionDeclaration => (member.kind === dts.ElementKind.FunctionDeclaration),
    );

    if (!functions.every(fn => fn.name!.startsWith('$'))) {
      throw new Error(`Exported functions in ${filename} should be prefixed with $`);
    }

    const placeholder_imports =
      (functions[0].type!.parameters!.length <= 1)
        ? []
        : [
          dts.create_import_named({
            from: './$placeholder',
            members: [
              dts.create_import_member({
                name: placeholder_name_abbr,
                property: placeholder_name,
              }),
            ],
          }),
        ];

    const curried_declarations = create_curried_declarations(
      filename,
      (functions.length === 1)
        ? functions[0].type!
        : functions.reduce<{[kind: string]: dts.IFunctionType}>(
          (current_functions, fn) => ({
            ...current_functions,
            [fn.name!.slice(1)]: fn.type!,
          }),
          {},
        ),
    );

    members.push(
      ...imports,
      ...placeholder_imports,
      ...curried_declarations,
    );
  }

  function push_ts_members() {
    // tslint:disable-next-line:no-require-imports
    const required: any = require(filename);
    delete require.cache[require.resolve(filename)];
    const declarations = required.default;

    if (!is_valid_export_default(declarations)) {
      throw new Error(`Template.ts should default-export an array of declarations: ${filename}`);
    }

    members.push(
      ...declarations.map(
        declaration => ({
          ...declaration,
          export: true,
        }),
      ),
    );
  }

  function is_valid_export_default(export_default: any): export_default is dts.ITopLevelMember[] {
    return (export_default instanceof Array);
  }
}

function emit_declarations(members: dts.ITopLevelMember[]) {
  return dts.emit(dts.create_top_level_element({members}));
}

function generate_file_content(filename: string) {
  return emit_declarations(get_top_level_members(filename));
}

function generate_index_content() {
  const filenames = glob.sync(glob_templates).map(filename =>
    `./${output_relative_dirname}/${path.relative(input_relative_dirname, filename).replace(/(\.d)?\.ts$/, '')}`,
  );

  const jsdoc_binded_filenames: string[] = [];
  const non_jsdoc_binded_filenames: string[] = [];

  filenames.forEach(filename => {
    if (path.basename(filename).startsWith('$')) {
      non_jsdoc_binded_filenames.push(filename);
    } else {
      jsdoc_binded_filenames.push(filename);
    }
  });

  return emit_declarations([
    dts.create_export_namespace({name: namespace_ramda}),
    ...non_jsdoc_binded_filenames.map(
      filename => dts.create_export_named({from: filename}),
    ),
    ...jsdoc_binded_filenames.map(
      filename => dts.create_import_namespace({
        name: path.basename(filename),
        from: filename,
      }),
    ),
    dts.create_export_named({
      members: jsdoc_binded_filenames.map(
        filename => dts.create_export_member({name: path.basename(filename)}),
      ),
    }),
  ]);
}

function gulp_generate(fn: (filename: string) => string) {
  return through.obj((file: gulp_util.File, encoding, callback) => {
    if (file.isBuffer()) {
      try {
        file.contents = new Buffer(fn(file.path));
        callback(null, file);
      } catch (e) {
        callback(e);
      }
    } else {
      callback(new Error('Support buffer only.'));
    }
  });
}
