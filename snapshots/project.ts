import {Placeholder} from '../ramda/dist/src/$placeholder';
import * as R_project from '../ramda/dist/src/project';

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass -> <T extends Record<"a", any>>(list: T[] | ArrayLike<T>) => Pick<T, "a">[]
R_project(['a']);
// @dts-jest:pass -> Pick<Record<"a" | "b", number>, "a">[]
R_project(['a'])([a_b_number_record, a_b_number_record]);

// @dts-jest:pass -> Pick<Record<"a" | "b", number>, "a">[]
R_project(['a'], [a_b_number_record, a_b_number_record]);

// @dts-jest:pass -> <K extends "a" | "b">(keys: K[] | ArrayLike<K>) => Pick<Record<"a" | "b", number>, K>[]
R_project(placeholder, [a_b_number_record, a_b_number_record]);
// @dts-jest:pass -> Pick<Record<"a" | "b", number>, "a">[]
R_project(placeholder, [a_b_number_record, a_b_number_record])(['a']);
