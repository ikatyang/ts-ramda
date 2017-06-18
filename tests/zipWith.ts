import * as R_zipWith from 'ramda/src/zipWith';

declare const number_string_to_object: (x: number, y: string) => object;
declare const number_array: number[];
declare const string_array: string[];

// @dts-jest
R_zipWith(number_string_to_object, number_array);
// @dts-jest
R_zipWith(number_string_to_object)(number_array)(string_array);
// @dts-jest
R_zipWith(number_string_to_object, number_array, string_array);