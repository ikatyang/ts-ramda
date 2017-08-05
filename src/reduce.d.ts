import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reduce: reduce_000;
type reduce_000 = {
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_100<T, U>;
    <U>(_fn: PH, initial: U): reduce_010<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduce_110<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): reduce_001<T>;
    <T, U>(_fn: PH, initial: U, values: List<T>): reduce_011<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduce_101<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduce_111<U>;
};
type reduce_100<T, U> = {
    (initial: U): reduce_110<T, U>;
    (_initial: PH, values: List<T>): reduce_101<T, U>;
    (initial: U, values: List<T>): reduce_111<U>;
};
type reduce_010<U> = {
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_110<T, U>;
    <T>(_fn: PH, values: List<T>): reduce_011<T, U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduce_111<U>;
};
type reduce_110<T, U> = {
    (values: List<T>): reduce_111<U>;
};
type reduce_001<T> = {
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_101<T, U>;
    <U>(_fn: PH, initial: U): reduce_011<T, U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduce_111<U>;
};
type reduce_101<T, U> = {
    (initial: U): reduce_111<U>;
};
type reduce_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_111<U>;
};
type reduce_111<U> = U;
export = reduce;
