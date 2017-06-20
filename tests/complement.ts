import * as R_complement from 'ramda/src/complement';

declare const string: string;
declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass
R_complement(string_string_to_boolean);
// @dts-jest:pass
R_complement(string_string_to_boolean)(string, string);
