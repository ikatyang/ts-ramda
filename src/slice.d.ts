import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
declare const slice: slice_000;
type slice_000 = {
    (from: number, to: number, str: string): slice_string_111;
    <T>(from: number, to: number, list: List<T>): slice_list_111<T>;
    (from: number, to: number): slice_110;
    <$SEL extends "111", $KIND extends "string">(): (from: number, to: number, str: string) => slice_string_111;
    <$SEL extends "111", $KIND extends "list">(): <T>(from: number, to: number, list: List<T>) => slice_list_111<T>;
    <$SEL extends "11">(): (from: number, to: number) => slice_110;
    <$SEL extends "1">(): (from: number) => slice_100;
    (from: number): slice_100;
};
type slice_100 = {
    (to: number, str: string): slice_string_111;
    <T>(to: number, list: List<T>): slice_list_111<T>;
    <$SEL extends "11", $KIND extends "string">(): (to: number, str: string) => slice_string_111;
    <$SEL extends "11", $KIND extends "list">(): <T>(to: number, list: List<T>) => slice_list_111<T>;
    <$SEL extends "1">(): (to: number) => slice_110;
    (to: number): slice_110;
};
type slice_010 = {
    (from: number, str: string): slice_string_111;
    <T>(from: number, list: List<T>): slice_list_111<T>;
    <$SEL extends "11", $KIND extends "string">(): (from: number, str: string) => slice_string_111;
    <$SEL extends "11", $KIND extends "list">(): <T>(from: number, list: List<T>) => slice_list_111<T>;
    <$SEL extends "1">(): (from: number) => slice_110;
    (from: number): slice_110;
};
type slice_110 = {
    (str: string): slice_string_111;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => slice_string_111;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => slice_list_111<T>;
    <T>(list: List<T>): slice_list_111<T>;
};
type slice_string_001 = {
    (from: number, to: number): slice_string_111;
    <$SEL extends "11">(): (from: number, to: number) => slice_string_111;
    <$SEL extends "1">(): (from: number) => slice_string_101;
    (from: number): slice_string_101;
};
type slice_list_001<T> = {
    (from: number, to: number): slice_list_111<T>;
    <$SEL extends "11">(): (from: number, to: number) => slice_list_111<T>;
    <$SEL extends "1">(): (from: number) => slice_list_101<T>;
    (from: number): slice_list_101<T>;
};
type slice_string_101 = {
    (to: number): slice_string_111;
};
type slice_list_101<T> = {
    (to: number): slice_list_111<T>;
};
type slice_string_011 = {
    (from: number): slice_string_111;
};
type slice_list_011<T> = {
    (from: number): slice_list_111<T>;
};
type slice_string_111 = string;
type slice_list_111<T> = T[];
export = slice;
