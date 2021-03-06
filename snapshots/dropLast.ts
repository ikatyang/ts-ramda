import * as R_dropLast from '../ramda/dist/src/dropLast';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> string
R_dropLast(number, string);
// @dts-jest:pass -> boolean[]
R_dropLast(number, boolean_array);
