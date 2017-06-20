import * as R_applySpec from 'ramda/src/applySpec';

interface Name {
  firstname: string;
  lastname: string;
}

declare const name_spec: {
  [K in keyof Name]: (fullname: string) => Name[K];
};

declare const fullname: string;

// @dts-jest:pass
R_applySpec(name_spec);
// @dts-jest:pass
R_applySpec(name_spec)(fullname);

// @dts-jest:pass
R_applySpec<Name>(name_spec);
// @dts-jest:pass
R_applySpec<Name>(name_spec)(fullname);
