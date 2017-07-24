import { Placeholder } from '../ramda/dist/src/$placeholder';
import * as R_pluck from '../ramda/dist/src/pluck';

declare const placeholder: Placeholder;
declare const a_number_record: Record<'a', number>;
declare const string_array: string[];

// @dts-jest:pass -> <V, T extends Record<"a", V>>(list: T[] | ArrayLike<T>) => T["a"][]
R_pluck('a');
// @dts-jest:pass -> number[]
R_pluck('a')([a_number_record, a_number_record]);

// @dts-jest:pass -> number[]
R_pluck('a', [a_number_record, a_number_record]);

// @dts-jest:pass -> <K extends "a">(key: K) => Record<"a", number>[K][]
R_pluck(placeholder, [a_number_record, a_number_record]);
// @dts-jest:pass -> number[]
R_pluck(placeholder, [a_number_record, a_number_record])('a');

// @dts-jest:pass -> string[]
R_pluck(0, [string_array]);
