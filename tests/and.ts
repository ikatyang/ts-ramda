import * as R_and from 'ramda/src/and';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_and(string)(number);
// @dts-jest:pass
R_and(string, number);
