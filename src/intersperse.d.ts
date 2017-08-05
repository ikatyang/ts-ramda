import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const intersperse: intersperse_00;
type intersperse_00 = {
    <T>(separator: T): intersperse_10<T>;
    <U>(_separator: PH, list: List<U>): intersperse_01<U>;
    <T, U>(separator: T, list: List<U>): intersperse_11<T, U>;
};
type intersperse_10<T> = {
    <U>(list: List<U>): intersperse_11<T, U>;
};
type intersperse_01<U> = {
    <T>(separator: T): intersperse_11<T, U>;
};
type intersperse_11<T, U> = (T | U)[];
export = intersperse;
