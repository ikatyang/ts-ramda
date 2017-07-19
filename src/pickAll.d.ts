import { List, Property } from "./$types";
/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
declare const pickAll: pickAll_00;
type pickAll_00 = {
    <T, K extends keyof T>(keys: List<K>): pickAll_pick_10<T, K>;
    (keys: List<Property>): pickAll_general_10;
    <T, K extends keyof T>(keys: List<K>, object: T): pickAll_pick_11<T, K>;
    <$SEL extends "1", $KIND extends "pick">(): <T, K extends keyof T>(keys: List<K>) => pickAll_pick_10<T, K>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pickAll_general_10;
    <$SEL extends "11", $KIND extends "pick">(): <T, K extends keyof T>(keys: List<K>, object: T) => pickAll_pick_11<T, K>;
    <$SEL extends "11", $KIND extends "general">(): <T>(keys: List<Property>, object: T) => pickAll_general_11<T>;
    <T>(keys: List<Property>, object: T): pickAll_general_11<T>;
};
type pickAll_01<T> = {
    <K extends keyof T>(keys: List<K>): pickAll_pick_11<T, K>;
    <$SEL extends "1", $KIND extends "pick">(): <K extends keyof T>(keys: List<K>) => pickAll_pick_11<T, K>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pickAll_general_11<T>;
    (keys: List<Property>): pickAll_general_11<T>;
};
type pickAll_pick_10<T, K extends keyof T> = {
    (object: T): pickAll_pick_11<T, K>;
};
type pickAll_general_10 = {
    <T>(object: T): pickAll_general_11<T>;
};
type pickAll_pick_11<T, K extends keyof T> = Pick<T, K>;
type pickAll_general_11<T> = Partial<T>;
export = pickAll;
