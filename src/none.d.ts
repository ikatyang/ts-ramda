import { List, Predicate } from "./$types";
/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
declare const none: none_00;
type none_00 = {
    <T>(fn: Predicate<T>, list: List<T>): none_11<T>;
    <T>(fn: Predicate<T>): none_10<T>;
};
type none_10<T> = {
    (list: List<T>): none_11<T>;
};
type none_01<T> = {
    (fn: Predicate<T>): none_11<T>;
};
type none_11<T> = boolean;
export = none;
