import * as R_mergeAll from '../ramda/dist/src/mergeAll';

declare const a_1: {a: 1};
declare const b_2: {b: 2};

// @dts-jest:pass -> any
R_mergeAll([a_1, b_2]);
