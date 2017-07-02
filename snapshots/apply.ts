import * as R_apply from '../ramda/dist/src/apply';

declare const number_and_string_to_boolean: (a: number, b: string) => boolean;
declare const number_and_string: [number, string];

// @dts-jest:pass -> boolean
R_apply(number_and_string_to_boolean)(number_and_string);
// @dts-jest:pass -> boolean
R_apply(number_and_string_to_boolean, number_and_string);
