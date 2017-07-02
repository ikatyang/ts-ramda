import { List } from "./$types";
/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
declare const takeLast: takeLast_00;
type takeLast_00 = {
    (n: number): takeLast_10;
    (n: number, str: string): takeLast_string_11;
    <$SEL extends "1">(): (n: number) => takeLast_10;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => takeLast_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => takeLast_list_11<T>;
    <T>(n: number, list: List<T>): takeLast_list_11<T>;
};
type takeLast_10 = {
    (str: string): takeLast_string_11;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => takeLast_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => takeLast_list_11<T>;
    <T>(list: List<T>): takeLast_list_11<T>;
};
type takeLast_string_01 = {
    (n: number): takeLast_string_11;
};
type takeLast_list_01<T> = {
    (n: number): takeLast_list_11<T>;
};
type takeLast_string_11 = string;
type takeLast_list_11<T> = T[];
export = takeLast;
