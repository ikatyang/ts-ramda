import * as R_init from 'ramda/src/init';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass
R_init(string);
// @dts-jest:pass
R_init(string_array);
