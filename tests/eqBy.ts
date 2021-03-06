import * as R_eqBy from '../ramda/dist/src/eqBy';

declare const string_to_number: (x: string) => number;
declare const string: string;

// @dts-jest:pass
R_eqBy(string_to_number, string);
// @dts-jest:pass
R_eqBy(string_to_number)(string)(string);
// @dts-jest:pass
R_eqBy(string_to_number, string, string);
