import * as R_last from '../ramda/dist/src/last';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];

// @dts-jest:pass -> string
R_last(string);
// @dts-jest:pass -> string | undefined
R_last(string_array);
// @dts-jest:pass -> number | undefined
R_last(number_array);
