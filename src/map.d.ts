import { Functor, List, Morphism } from "./$types";
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
declare const map: map_00;
type map_00 = {
    <T, U>(fn: Morphism<T, U>, list: List<T>): map_list_11<T, U>;
    <T, U>(fn: Morphism<T, U>, functor: Functor<T>): map_functor_11<T, U>;
    <T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>): map_object_11<T, U, K>;
    <T, U>(fn: Morphism<T, U>): map_10<T, U>;
};
type map_10<T, U> = {
    (list: List<T>): map_list_11<T, U>;
    (functor: Functor<T>): map_functor_11<T, U>;
    <K extends string>(object: Record<K, T>): map_object_11<T, U, K>;
};
type map_list_01<T> = {
    <U>(fn: Morphism<T, U>): map_list_11<T, U>;
};
type map_functor_01<T> = {
    <U>(fn: Morphism<T, U>): map_functor_11<T, U>;
};
type map_object_01<T, K extends string> = {
    <U>(fn: Morphism<T, U>): map_object_11<T, U, K>;
};
type map_list_11<T, U> = U[];
type map_functor_11<T, U> = Functor<U>;
type map_object_11<T, U, K extends string> = Record<K, U>;
export = map;
