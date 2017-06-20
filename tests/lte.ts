import * as R_lte from 'ramda/src/lte';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_lte(string);
// @dts-jest:pass
R_lte(string, string);
// @dts-jest:pass
R_lte(number, number);
