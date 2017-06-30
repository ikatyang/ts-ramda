import { Lens, Morphism } from "./$types";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
declare const over: over_000;
type over_000 = {
    <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>, target: U): over_111<U>;
    <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>): over_110<T, U>;
    <T, U>(lens: Lens<T, U>): over_100<T, U>;
};
type over_100<T, U> = {
    (fn: Morphism<T, T>, target: U): over_111<U>;
    (fn: Morphism<T, T>): over_110<T, U>;
};
type over_010<T> = {
    <U>(lens: Lens<T, U>, target: U): over_111<U>;
    <U>(lens: Lens<T, U>): over_110<T, U>;
};
type over_110<T, U> = {
    (target: U): over_111<U>;
};
type over_001<U> = {
    <T>(lens: Lens<T, U>, fn: Morphism<T, T>): over_111<U>;
    <T>(lens: Lens<T, U>): over_101<T, U>;
};
type over_101<T, U> = {
    (fn: Morphism<T, T>): over_111<U>;
};
type over_011<T, U> = {
    (lens: Lens<T, U>): over_111<U>;
};
type over_111<U> = U;
export = over;