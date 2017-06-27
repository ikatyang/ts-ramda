import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
declare const splitAt: splitAt_00;
type splitAt_00 = {
    (index: number, str: string): splitAt_string_11;
    <T>(index: number, list: List<T>): splitAt_list_11<T>;
    (index: number): splitAt_10;
};
type splitAt_10 = {
    (str: string): splitAt_string_11;
    <T>(list: List<T>): splitAt_list_11<T>;
};
type splitAt_string_01 = {
    (index: number): splitAt_string_11;
};
type splitAt_list_01<T> = {
    (index: number): splitAt_list_11<T>;
};
type splitAt_string_11 = string[];
type splitAt_list_11<T> = T[][];
export = splitAt;
