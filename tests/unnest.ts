import * as R_unnest from 'ramda/src/unnest';

declare const number_array: number[];
declare const number_array_array: number[][];

// @dts-jest:pass
R_unnest(number_array);
// @dts-jest:pass
R_unnest(number_array_array);
