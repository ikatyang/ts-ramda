import * as R_mergeDeepWith from '../ramda/dist/src/mergeDeepWith';

declare const string_string_to_number: (a: string, b: string) => number;
declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass -> <T>(right: object) => T
R_mergeDeepWith(string_string_to_number, a_1);

// @dts-jest:pass -> {}
R_mergeDeepWith(string_string_to_number, a_1)(b_2);
// @dts-jest:pass -> {}
R_mergeDeepWith(string_string_to_number, a_1, b_2);

// @dts-jest:pass -> { a: 1; b: 2; }
R_mergeDeepWith(string_string_to_number, a_1)<{a: 1, b: 2}>(b_2);
// @dts-jest:pass -> { a: 1; b: 2; }
R_mergeDeepWith<any, {a: 1, b: 2}>(string_string_to_number, a_1, b_2);
