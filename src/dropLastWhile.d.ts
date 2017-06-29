import { List, Predicate } from "./$types";
/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
declare const dropLastWhile: dropLastWhile_00;
type dropLastWhile_00 = {
    <T>(fn: Predicate<T>, list: List<T>): dropLastWhile_11<T>;
    <T>(fn: Predicate<T>): dropLastWhile_10<T>;
};
type dropLastWhile_10<T> = {
    (list: List<T>): dropLastWhile_11<T>;
};
type dropLastWhile_01<T> = {
    (fn: Predicate<T>): dropLastWhile_11<T>;
};
type dropLastWhile_11<T> = T[];
export = dropLastWhile;
