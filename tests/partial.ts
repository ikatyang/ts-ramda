import * as R_partial from 'ramda/src/partial';

declare const number_string_to_object: (a: number, b: string) => object;
declare const number: number;
declare const string: string;

// @dts-jest
R_partial(number_string_to_object);
// @dts-jest
R_partial(number_string_to_object, [number]);
// @dts-jest
R_partial(number_string_to_object, [number])(string);
