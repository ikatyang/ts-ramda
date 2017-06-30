import * as R_valuesIn from '../ramda/dist/src/valuesIn';

declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1,
  b: 2,
  c: 3,
};

// @dts-jest:pass -> any[]
R_valuesIn(object);
// @dts-jest:pass -> (1 | 2 | 3)[]
R_valuesIn(a_1_b_2_c_3);
