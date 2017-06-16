import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
declare const omit: omit_00;
type omit_00 = {
    (_keys: PH, object: any): omit_01;
    <T>(keys: List<Property>, object: any): omit_11<T>;
    <$SEL extends "11">(): <T>(keys: List<Property>, object: any) => omit_11<T>;
    <$SEL extends "1">(): (keys: List<Property>) => omit_10;
    <$SEL extends "01">(): (_keys: PH, object: any) => omit_01;
    (keys: List<Property>): omit_10;
};
type omit_10 = {
    <T>(object: any): omit_11<T>;
};
type omit_01 = {
    <T>(keys: List<Property>): omit_11<T>;
};
type omit_11<T> = T;
export = omit;
