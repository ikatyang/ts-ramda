import * as R_mergeWithKey from '../ramda/dist/src/mergeWithKey';

declare const string_number_number_to_string: (key: string, a: number, b: number) => string;
declare const a_1_c_1: {a: 1, c: 1};
declare const b_2_c_2: {b: 2, c: 2};

// @dts-jest:pass -> Pick<{ a: 1; c: 1; }, "a"> & Pick<{ b: 2; c: 2; }, "b"> & Record<"c", string>
R_mergeWithKey(string_number_number_to_string)(a_1_c_1)(b_2_c_2);
// @dts-jest:pass -> Pick<{ a: 1; c: 1; }, "a"> & Pick<{ b: 2; c: 2; }, "b"> & Record<"c", string>
R_mergeWithKey(string_number_number_to_string, a_1_c_1, b_2_c_2);
