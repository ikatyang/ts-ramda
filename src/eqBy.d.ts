import { Morphism } from "./$types";
/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
declare const eqBy: eqBy_000;
type eqBy_000 = {
    <T>(fn: Morphism<T, any>, a: T, b: T): eqBy_111<T>;
    <T>(fn: Morphism<T, any>, a: T): eqBy_110<T>;
    <T>(fn: Morphism<T, any>): eqBy_100<T>;
};
type eqBy_100<T> = {
    (a: T, b: T): eqBy_111<T>;
    (a: T): eqBy_110<T>;
};
type eqBy_010<T> = {
    (fn: Morphism<T, any>, b: T): eqBy_111<T>;
    (fn: Morphism<T, any>): eqBy_110<T>;
};
type eqBy_110<T> = {
    (b: T): eqBy_111<T>;
};
type eqBy_001<T> = {
    (fn: Morphism<T, any>, a: T): eqBy_111<T>;
    (fn: Morphism<T, any>): eqBy_101<T>;
};
type eqBy_101<T> = {
    (a: T): eqBy_111<T>;
};
type eqBy_011<T> = {
    (fn: Morphism<T, any>): eqBy_111<T>;
};
type eqBy_111<T> = boolean;
export = eqBy;
