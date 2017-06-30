import * as R_drop from '../ramda/dist/src/drop';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> string
R_drop(number, string);
// @dts-jest:pass -> boolean[]
R_drop(number, boolean_array);
