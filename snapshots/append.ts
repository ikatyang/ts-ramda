import * as R_append from '../ramda/dist/src/append';

declare const string: string;
declare const number_array: number[];

// @dts-jest:pass -> (string | number)[]
R_append(string)(number_array);
// @dts-jest:pass -> (string | number)[]
R_append(string, number_array);
