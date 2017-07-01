import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
declare const descend: descend_000;
type descend_000 = {
    <T>(_fn: PH, _a: PH, b: T): descend_001<T>;
    <T>(_fn: PH, a: T, b: T): descend_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): descend_101<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): descend_111;
    <T>(_fn: PH, a: T): descend_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): descend_110<T>;
    <T>(fn: Morphism<T, Ordered>): descend_100<T>;
};
type descend_100<T> = {
    (_a: PH, b: T): descend_101<T>;
    (a: T, b: T): descend_111;
    (a: T): descend_110<T>;
};
type descend_010<T> = {
    (_fn: PH, b: T): descend_011<T>;
    (fn: Morphism<T, Ordered>, b: T): descend_111;
    (fn: Morphism<T, Ordered>): descend_110<T>;
};
type descend_110<T> = {
    (b: T): descend_111;
};
type descend_001<T> = {
    (_fn: PH, a: T): descend_011<T>;
    (fn: Morphism<T, Ordered>, a: T): descend_111;
    (fn: Morphism<T, Ordered>): descend_101<T>;
};
type descend_101<T> = {
    (a: T): descend_111;
};
type descend_011<T> = {
    (fn: Morphism<T, Ordered>): descend_111;
};
type descend_111 = number;
export = descend;
