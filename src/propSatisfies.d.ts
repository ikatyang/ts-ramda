import { Predicate, Property } from "./$types";
/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
declare const propSatisfies: propSatisfies_000;
type propSatisfies_000 = {
    <T, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <V>(fn: Predicate<V>): propSatisfies_manual_100<V>;
    <T, K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_110<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K): propSatisfies_record_110<K, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_manual_110<V>;
    <T, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_keyof_111;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_record_111;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_100<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_100<K, T>;
    <$SEL extends "1", $KIND extends "manual">(): <V>(fn: Predicate<V>) => propSatisfies_manual_100<V>;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(fn: Predicate<T[K]>, key: K) => propSatisfies_keyof_110<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K) => propSatisfies_record_110<K, T>;
    <$SEL extends "11", $KIND extends "manual">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_manual_110<V>;
    <$SEL extends "111", $KIND extends "keyof">(): <T, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T) => propSatisfies_keyof_111;
    <$SEL extends "111", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T) => propSatisfies_record_111;
    <$SEL extends "111", $KIND extends "manual">(): <V>(fn: Predicate<V>, key: Property, object: any) => propSatisfies_manual_111;
    <V>(fn: Predicate<V>, key: Property, object: any): propSatisfies_manual_111;
};
type propSatisfies_keyof_100<T, K extends keyof T> = {
    (key: K): propSatisfies_keyof_110<T, K>;
    <$SEL extends "1">(): (key: K) => propSatisfies_keyof_110<T, K>;
    <$SEL extends "11">(): (key: K, object: T) => propSatisfies_keyof_111;
    (key: K, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_100<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_110<K, T>;
    <$SEL extends "1">(): (key: K) => propSatisfies_record_110<K, T>;
    <$SEL extends "11">(): (key: K, object: T) => propSatisfies_record_111;
    (key: K, object: T): propSatisfies_record_111;
};
type propSatisfies_manual_100<V> = {
    (key: Property): propSatisfies_manual_110<V>;
    <$SEL extends "1">(): (key: Property) => propSatisfies_manual_110<V>;
    <$SEL extends "11">(): (key: Property, object: any) => propSatisfies_manual_111;
    (key: Property, object: any): propSatisfies_manual_111;
};
type propSatisfies_keyof_010<T, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_110<T, K>;
    <$SEL extends "1">(): (fn: Predicate<T[K]>) => propSatisfies_keyof_110<T, K>;
    <$SEL extends "11">(): (fn: Predicate<T[K]>, object: T) => propSatisfies_keyof_111;
    (fn: Predicate<T[K]>, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_010<K extends string> = {
    <T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_110<K, T>;
    <$SEL extends "1">(): <T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_110<K, T>;
    <$SEL extends "11">(): <T extends Record<K, any>>(fn: Predicate<T[K]>, object: T) => propSatisfies_record_111;
    <T extends Record<K, any>>(fn: Predicate<T[K]>, object: T): propSatisfies_record_111;
};
type propSatisfies_manual_010 = {
    <V>(fn: Predicate<V>): propSatisfies_manual_110<V>;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_manual_110<V>;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, object: any) => propSatisfies_manual_111;
    <V>(fn: Predicate<V>, object: any): propSatisfies_manual_111;
};
type propSatisfies_keyof_110<T, K extends keyof T> = {
    (object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_110<K extends string, T extends Record<K, any>> = {
    (object: T): propSatisfies_record_111;
};
type propSatisfies_manual_110<V> = {
    (object: any): propSatisfies_manual_111;
};
type propSatisfies_keyof_001<T> = {
    <K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_101<T, K>;
    <$SEL extends "1">(): <K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_101<T, K>;
    <$SEL extends "11">(): <K extends keyof T>(fn: Predicate<T[K]>, key: K) => propSatisfies_keyof_111;
    <K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_111;
};
type propSatisfies_record_001<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_101<K, T>;
    <$SEL extends "1">(): (fn: Predicate<T[K]>) => propSatisfies_record_101<K, T>;
    <$SEL extends "11">(): (fn: Predicate<T[K]>, key: K) => propSatisfies_record_111;
    (fn: Predicate<T[K]>, key: K): propSatisfies_record_111;
};
type propSatisfies_manual_001 = {
    <V>(fn: Predicate<V>): propSatisfies_manual_101<V>;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_manual_101<V>;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_manual_111;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_manual_111;
};
type propSatisfies_keyof_101<T, K extends keyof T> = {
    (key: K): propSatisfies_keyof_111;
};
type propSatisfies_record_101<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_111;
};
type propSatisfies_manual_101<V> = {
    (key: Property): propSatisfies_manual_111;
};
type propSatisfies_keyof_011<T, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_111;
};
type propSatisfies_record_011<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_111;
};
type propSatisfies_manual_011 = {
    <V>(fn: Predicate<V>): propSatisfies_manual_111;
};
type propSatisfies_keyof_111 = boolean;
type propSatisfies_record_111 = boolean;
type propSatisfies_manual_111 = boolean;
export = propSatisfies;
