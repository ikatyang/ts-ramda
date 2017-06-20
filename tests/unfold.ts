import * as R_unfold from 'ramda/src/unfold';

declare const string_to_object_string_tuple_or_false: (x: string) => [object, string] | false;
declare const string: string;

// @dts-jest:pass
R_unfold(string_to_object_string_tuple_or_false);
// @dts-jest:pass
R_unfold(string_to_object_string_tuple_or_false)(string);
// @dts-jest:pass
R_unfold(string_to_object_string_tuple_or_false, string);
