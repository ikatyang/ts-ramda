import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';
import {create_n_ary_declarations} from './utils/create-n-ary-declarations';

export default create_n_ary_declarations(
  1,
  max_curry_level,
  args => `
    function $${args.curry_level}arity<${args.generics.join(',')}>(
      fns: [(${args.parameters.join(',')}) => boolean, (${args.parameters.join(',')}) => ${args.return_type}][]
    ): (${args.parameters.join(',')}) => ${args.return_type};
  `,
);
