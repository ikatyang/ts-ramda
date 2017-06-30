import * as R_partialRight from '../ramda/dist/src/partialRight';

declare const number_string_to_object: (a: number, b: string) => object;
declare const number: number;
declare const string: string;

// @dts-jest:pass -> (args: any[]) => (...args: any[]) => object
R_partialRight(number_string_to_object);
// @dts-jest:pass -> (...args: any[]) => object
R_partialRight(number_string_to_object, [string]);
// @dts-jest:pass -> object
R_partialRight(number_string_to_object, [string])(number);
