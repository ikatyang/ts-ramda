import * as R_mergeDeepLeft from '../ramda/dist/src/mergeDeepLeft';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass
R_mergeDeepLeft(a_1);

// @dts-jest:pass
R_mergeDeepLeft(a_1)(b_2);
// @dts-jest:pass
R_mergeDeepLeft(a_1, b_2);
