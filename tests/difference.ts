import * as R_difference from '../ramda/dist/src/difference';

declare const number_array: number[];

// @dts-jest:pass
R_difference(number_array);
// @dts-jest:pass
R_difference(number_array, number_array);
