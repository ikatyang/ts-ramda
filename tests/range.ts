import * as R_range from '../ramda/dist/src/range';

declare const number: number;

// @dts-jest:pass
R_range(number);
// @dts-jest:pass
R_range(number)(number);
// @dts-jest:pass
R_range(number, number);
