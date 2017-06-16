import * as R_mapAccumRight from 'ramda/src/mapAccumRight';

declare const number: number;
declare const string_number_to_string_number_tuple: (x: string, y: number) => [string, number];
declare const string_array: string[];

// @dts-jest
R_mapAccumRight(string_number_to_string_number_tuple, number);
// @dts-jest
R_mapAccumRight(string_number_to_string_number_tuple)(number)(string_array);
// @dts-jest
R_mapAccumRight(string_number_to_string_number_tuple, number, string_array);