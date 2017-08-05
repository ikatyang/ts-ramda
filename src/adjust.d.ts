import { List, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const adjust: adjust_000;
type adjust_000 = {
    <T, U>(fn: Morphism<T, U>): adjust_100<T, U>;
    (_fn: PH, index: number): adjust_010;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_110<T, U>;
    <T>(_fn: PH, _index: PH, list: List<T>): adjust_001<T>;
    <T>(_fn: PH, index: number, list: List<T>): adjust_011<T>;
    <T, U>(fn: Morphism<T, U>, _index: PH, list: List<T>): adjust_101<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number, list: List<T>): adjust_111<T, U>;
};
type adjust_100<T, U> = {
    (index: number): adjust_110<T, U>;
    (_index: PH, list: List<T>): adjust_101<T, U>;
    (index: number, list: List<T>): adjust_111<T, U>;
};
type adjust_010 = {
    <T, U>(fn: Morphism<T, U>): adjust_110<T, U>;
    <T>(_fn: PH, list: List<T>): adjust_011<T>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): adjust_111<T, U>;
};
type adjust_110<T, U> = {
    (list: List<T>): adjust_111<T, U>;
};
type adjust_001<T> = {
    <U>(fn: Morphism<T, U>): adjust_101<T, U>;
    (_fn: PH, index: number): adjust_011<T>;
    <U>(fn: Morphism<T, U>, index: number): adjust_111<T, U>;
};
type adjust_101<T, U> = {
    (index: number): adjust_111<T, U>;
};
type adjust_011<T> = {
    <U>(fn: Morphism<T, U>): adjust_111<T, U>;
};
type adjust_111<T, U> = (T | U)[];
export = adjust;
