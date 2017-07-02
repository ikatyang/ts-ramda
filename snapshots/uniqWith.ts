import * as R_uniqWith from '../ramda/dist/src/uniqWith';

declare const number_number_to_boolean: (x: number, y: number) => boolean;
declare const number_array: number[];
declare const string_string_to_boolean: (x: string, y: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass -> (list: number[] | ArrayLike<number>) => number[]
R_uniqWith(number_number_to_boolean);
// @dts-jest:pass -> number[]
R_uniqWith(number_number_to_boolean)(number_array);
// @dts-jest:pass -> number[]
R_uniqWith(number_number_to_boolean, number_array);

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => string[]
R_uniqWith(string_string_to_boolean);
// @dts-jest:pass -> string[]
R_uniqWith(string_string_to_boolean)(string_array);
// @dts-jest:pass -> string[]
R_uniqWith(string_string_to_boolean, string_array);
