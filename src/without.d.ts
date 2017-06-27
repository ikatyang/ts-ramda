import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
declare const without: without_00;
type without_00 = {
    <T>(a: List<T>, b: List<T>): without_11<T>;
    <T>(a: List<T>): without_10<T>;
};
type without_10<T> = {
    (b: List<T>): without_11<T>;
};
type without_01<T> = {
    (a: List<T>): without_11<T>;
};
type without_11<T> = T[];
export = without;
