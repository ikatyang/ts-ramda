import * as R_without from '../ramda/dist/src/without';

declare const number_array: number[];

// @dts-jest:pass -> (b: number[] | ArrayLike<number>) => number[]
R_without(number_array);
// @dts-jest:pass -> number[]
R_without(number_array, number_array);
