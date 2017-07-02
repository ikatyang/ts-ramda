import { List, Property } from "./$types";
/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
declare const props: props_00;
type props_00 = {
    <T, K extends keyof T>(keys: List<K>): props_keyof_10<T, K>;
    <K extends string>(keys: List<K>): props_record_10<K>;
    (keys: Property[]): props_manual_10;
    <T, K extends keyof T>(keys: List<K>, object: T): props_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(keys: List<K>, object: T): props_record_11<K, T>;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(keys: List<K>) => props_keyof_10<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(keys: List<K>) => props_record_10<K>;
    <$SEL extends "1", $KIND extends "manual">(): (keys: Property[]) => props_manual_10;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(keys: List<K>, object: T) => props_keyof_11<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(keys: List<K>, object: T) => props_record_11<K, T>;
    <$SEL extends "11", $KIND extends "manual">(): <V>(keys: Property[], object: any) => props_manual_11<V>;
    <V>(keys: Property[], object: any): props_manual_11<V>;
};
type props_keyof_10<T, K extends keyof T> = {
    (object: T): props_keyof_11<T, K>;
};
type props_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): props_record_11<K, T>;
};
type props_manual_10 = {
    <V>(object: any): props_manual_11<V>;
};
type props_keyof_01<T> = {
    <K extends keyof T>(keys: List<K>): props_keyof_11<T, K>;
};
type props_record_01<K extends string, T extends Record<K, any>> = {
    (keys: List<K>): props_record_11<K, T>;
};
type props_manual_01 = {
    <V>(keys: Property[]): props_manual_11<V>;
};
type props_keyof_11<T, K extends keyof T> = T[K][];
type props_record_11<K extends string, T extends Record<K, any>> = T[K][];
type props_manual_11<V> = V[];
export = props;
