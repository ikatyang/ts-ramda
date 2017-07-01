import { List } from "./$types";
/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
declare const drop: drop_00;
type drop_00 = {
    (n: number): drop_10;
    (n: number, str: string): drop_string_11;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => drop_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => drop_list_11<T>;
    <$SEL extends "1">(): (n: number) => drop_10;
    <T>(n: number, list: List<T>): drop_list_11<T>;
};
type drop_10 = {
    (str: string): drop_string_11;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => drop_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => drop_list_11<T>;
    <T>(list: List<T>): drop_list_11<T>;
};
type drop_string_01 = {
    (n: number): drop_string_11;
};
type drop_list_01<T> = {
    (n: number): drop_list_11<T>;
};
type drop_string_11 = string;
type drop_list_11<T> = T[];
export = drop;
