import * as R_when from '../ramda/dist/src/when';

declare const number_to_boolean: (x: number) => boolean;
declare const number_to_string: (x: number) => string;
declare const number: number;

// @dts-jest:pass -> <T$1 extends number = number>(value: T$1) => string | T$1
R_when(number_to_boolean, number_to_string);
// @dts-jest:pass -> string | number
R_when(number_to_boolean)(number_to_string)(number);
// @dts-jest:pass -> string | number
R_when(number_to_boolean, number_to_string, number);
