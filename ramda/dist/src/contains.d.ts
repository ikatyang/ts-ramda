import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
declare const contains: contains_00;
type contains_00 = {
    <T>(_value: PH, list: List<T>): contains_01<T>;
    <T$1, T$2 extends T$1 = T$1>(value: T$1, list: List<T$2>): contains_11;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(value: T$1, list: List<T$2>) => contains_11;
    <$SEL extends "1">(): <T>(value: T) => contains_10<T>;
    <$SEL extends "01">(): <T>(_value: PH, list: List<T>) => contains_01<T>;
    <T>(value: T): contains_10<T>;
};
type contains_10<T> = {
    <T$1 extends T = T>(list: List<T$1>): contains_11;
};
type contains_01<T> = {
    (value: T): contains_11;
};
type contains_11 = boolean;
export = contains;
