import * as R_clamp from '../ramda/dist/src/clamp';

declare const number: number;

// @dts-jest:pass
R_clamp(number, number);
// @dts-jest:pass
R_clamp(number)(number);
// @dts-jest:pass
R_clamp(number, number, number);
