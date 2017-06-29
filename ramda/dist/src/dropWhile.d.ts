import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
declare const dropWhile: dropWhile_00;
type dropWhile_00 = {
    <T>(_fn: PH, list: List<T>): dropWhile_01<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Predicate<T$1>, list: List<T$2>): dropWhile_11<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Predicate<T$1>, list: List<T$2>) => dropWhile_11<T$2>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => dropWhile_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => dropWhile_01<T>;
    <T>(fn: Predicate<T>): dropWhile_10<T>;
};
type dropWhile_10<T> = {
    <T$1 extends T = T>(list: List<T$1>): dropWhile_11<T$1>;
};
type dropWhile_01<T> = {
    (fn: Predicate<T>): dropWhile_11<T>;
};
type dropWhile_11<T> = T[];
export = dropWhile;
