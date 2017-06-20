import * as R_compose from 'ramda/src/compose';

declare const boolean_to_number: (x: boolean) => number;
declare const boolean_to_string: (x: boolean) => string;
declare const number_to_boolean: (x: number) => boolean;
declare const number_to_string: (x: number) => string;
declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;

declare const a_b_c_d_e_f_to_any: (
  a: null,
  b: undefined,
  c: boolean,
  d: number,
  e: string,
  f: object,
) => any;

// @dts-jest:pass
R_compose(boolean_to_number);
// @dts-jest:pass
R_compose(a_b_c_d_e_f_to_any);

// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
);
// @dts-jest:pass
R_compose(
  boolean_to_number,
  a_b_c_d_e_f_to_any,
);

// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
);
// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  a_b_c_d_e_f_to_any,
);

// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
  string_to_number,
);
// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
  a_b_c_d_e_f_to_any,
);

// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
  string_to_number,
  boolean_to_string,
);
// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
  string_to_number,
  a_b_c_d_e_f_to_any,
);

// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
  string_to_number,
  boolean_to_string,
  number_to_boolean,
);
// @dts-jest:pass
R_compose(
  boolean_to_number,
  string_to_boolean,
  number_to_string,
  string_to_number,
  boolean_to_string,
  a_b_c_d_e_f_to_any,
);
