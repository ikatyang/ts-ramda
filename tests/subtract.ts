import * as R_subtract from '../ramda/dist/src/subtract';

declare const number: number;

// @dts-jest:pass
R_subtract(number, number);
// @dts-jest:pass
R_subtract(number)(number);
