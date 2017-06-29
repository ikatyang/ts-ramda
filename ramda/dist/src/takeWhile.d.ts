import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
declare const takeWhile: takeWhile_00;
type takeWhile_00 = {
    <T>(_fn: PH, list: List<T>): takeWhile_01<T>;
    <T$1, T$2 extends T$1 = T$1>(fn: Predicate<T$1>, list: List<T$2>): takeWhile_11<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(fn: Predicate<T$1>, list: List<T$2>) => takeWhile_11<T$2>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => takeWhile_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => takeWhile_01<T>;
    <T>(fn: Predicate<T>): takeWhile_10<T>;
};
type takeWhile_10<T> = {
    <T$1 extends T = T>(list: List<T$1>): takeWhile_11<T$1>;
};
type takeWhile_01<T> = {
    (fn: Predicate<T>): takeWhile_11<T>;
};
type takeWhile_11<T> = T[];
export = takeWhile;
