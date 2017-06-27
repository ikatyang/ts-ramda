import {Dictionary, Filterable, Predicate} from '../ramda/dist/src/$types';
import * as R_filter from '../ramda/dist/src/filter';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];
declare const string_dictionary: Dictionary<string>;
declare const string_filterable: Filterable<string>;

// @dts-jest:pass
R_filter(string_predicate, string_array);
// @dts-jest:pass
R_filter(string_predicate)(string_array);

// @dts-jest:pass
R_filter(string_predicate, string_dictionary);
// @dts-jest:pass
R_filter(string_predicate)(string_dictionary);

// @dts-jest:pass
R_filter(string_predicate, string_filterable);
// @dts-jest:pass
R_filter(string_predicate)(string_filterable);
