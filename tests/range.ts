import * as R_range from 'ramda/src/range';

declare const number: number;

// @dts-jest
R_range(number);
// @dts-jest
R_range(number)(number);
// @dts-jest
R_range(number, number);