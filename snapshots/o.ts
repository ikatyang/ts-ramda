import * as R_o from '../ramda/dist/src/o';

declare const number_to_string: (x: number) => string;
declare const boolean_to_number: (x: boolean) => number;
declare const boolean: boolean;

// @dts-jest:pass -> <T1$1 extends boolean = boolean>(value: T1$1) => string
R_o(number_to_string, boolean_to_number);
// @dts-jest:pass -> string
R_o(number_to_string)(boolean_to_number)(boolean);
// @dts-jest:pass -> string
R_o(number_to_string, boolean_to_number, boolean);
