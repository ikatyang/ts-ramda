import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
declare const prop: prop_00;
type prop_00 = {
    <T, K extends keyof T>(key: K): prop_keyof_10<T, K>;
    <K extends string>(key: K): prop_record_10<K>;
    (key: Property): prop_manual_10;
    <T>(_key: PH, object: T): prop_keyof_01<T>;
    <K extends string, T extends Record<K, any>>(_key: PH, object: T): prop_record_01<K, T>;
    (_key: PH, object: any): prop_manual_01;
    <T, K extends keyof T>(key: K, object: T): prop_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): prop_record_11<K, T>;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(key: K, object: T) => prop_keyof_11<T, K>;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(key: K) => prop_keyof_10<T, K>;
    <$SEL extends "01", $KIND extends "keyof">(): <T>(_key: PH, object: T) => prop_keyof_01<T>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(key: K, object: T) => prop_record_11<K, T>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(key: K) => prop_record_10<K>;
    <$SEL extends "01", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_key: PH, object: T) => prop_record_01<K, T>;
    <$SEL extends "11", $KIND extends "manual">(): <V>(key: Property, object: any) => prop_manual_11<V>;
    <$SEL extends "1", $KIND extends "manual">(): (key: Property) => prop_manual_10;
    <$SEL extends "01", $KIND extends "manual">(): (_key: PH, object: any) => prop_manual_01;
    <V>(key: Property, object: any): prop_manual_11<V>;
};
type prop_keyof_10<T, K extends keyof T> = {
    (object: T): prop_keyof_11<T, K>;
};
type prop_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): prop_record_11<K, T>;
};
type prop_manual_10 = {
    <V>(object: any): prop_manual_11<V>;
};
type prop_keyof_01<T> = {
    <K extends keyof T>(key: K): prop_keyof_11<T, K>;
};
type prop_record_01<K extends string, T extends Record<K, any>> = {
    (key: K): prop_record_11<K, T>;
};
type prop_manual_01 = {
    <V>(key: Property): prop_manual_11<V>;
};
type prop_keyof_11<T, K extends keyof T> = T[K];
type prop_record_11<K extends string, T extends Record<K, any>> = T[K];
type prop_manual_11<V> = V;
export = prop;
