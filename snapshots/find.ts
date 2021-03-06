import { Predicate } from '../ramda/dist/src/$types';
import * as R_find from '../ramda/dist/src/find';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => string | undefined
R_find(string_predicate);
// @dts-jest:pass -> string | undefined
R_find(string_predicate)(string_array);
// @dts-jest:pass -> string | undefined
R_find(string_predicate, string_array);
