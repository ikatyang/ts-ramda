import { Predicate, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propSatisfies: propSatisfies_000;
type propSatisfies_000 = {
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <V>(fn: Predicate<V>): propSatisfies_general_100<V>;
    <T extends {}, K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_010<T, K>;
    <K extends string>(_fn: PH, key: K): propSatisfies_record_010<K>;
    (_fn: PH, key: Property): propSatisfies_general_010;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_110<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K): propSatisfies_record_110<K, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_general_110<V>;
    <T extends {}>(_fn: PH, _key: PH, object: T): propSatisfies_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_fn: PH, _key: PH, object: T): propSatisfies_record_001<K, T>;
    (_fn: PH, _key: PH, object: {}): propSatisfies_general_001;
    <T extends {}, K extends keyof T>(_fn: PH, key: K, object: T): propSatisfies_keyof_011<T, K>;
    <K extends string, T extends Record<K, any>>(_fn: PH, key: K, object: T): propSatisfies_record_011<K, T>;
    (_fn: PH, key: Property, object: {}): propSatisfies_general_011;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, _key: PH, object: T): propSatisfies_keyof_101<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, _key: PH, object: T): propSatisfies_record_101<K, T>;
    <V>(fn: Predicate<V>, _key: PH, object: {}): propSatisfies_general_101<V>;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_keyof_111;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_record_111;
    <V>(fn: Predicate<V>, key: Property, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_100<T extends {}, K extends keyof T> = {
    (key: K): propSatisfies_keyof_110<T, K>;
    (_key: PH, object: T): propSatisfies_keyof_101<T, K>;
    (key: K, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_100<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_110<K, T>;
    (_key: PH, object: T): propSatisfies_record_101<K, T>;
    (key: K, object: T): propSatisfies_record_111;
};
type propSatisfies_general_100<V> = {
    (key: Property): propSatisfies_general_110<V>;
    (_key: PH, object: {}): propSatisfies_general_101<V>;
    (key: Property, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_010<T extends {}, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_110<T, K>;
    (_fn: PH, object: T): propSatisfies_keyof_011<T, K>;
    (fn: Predicate<T[K]>, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_010<K extends string> = {
    <T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_110<K, T>;
    <T extends Record<K, any>>(_fn: PH, object: T): propSatisfies_record_011<K, T>;
    <T extends Record<K, any>>(fn: Predicate<T[K]>, object: T): propSatisfies_record_111;
};
type propSatisfies_general_010 = {
    <V>(fn: Predicate<V>): propSatisfies_general_110<V>;
    (_fn: PH, object: {}): propSatisfies_general_011;
    <V>(fn: Predicate<V>, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_110<T extends {}, K extends keyof T> = {
    (object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_110<K extends string, T extends Record<K, any>> = {
    (object: T): propSatisfies_record_111;
};
type propSatisfies_general_110<V> = {
    (object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_001<T extends {}> = {
    <K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_101<T, K>;
    <K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_011<T, K>;
    <K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_111;
};
type propSatisfies_record_001<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_101<K, T>;
    (_fn: PH, key: K): propSatisfies_record_011<K, T>;
    (fn: Predicate<T[K]>, key: K): propSatisfies_record_111;
};
type propSatisfies_general_001 = {
    <V>(fn: Predicate<V>): propSatisfies_general_101<V>;
    (_fn: PH, key: Property): propSatisfies_general_011;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_general_111;
};
type propSatisfies_keyof_101<T extends {}, K extends keyof T> = {
    (key: K): propSatisfies_keyof_111;
};
type propSatisfies_record_101<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_111;
};
type propSatisfies_general_101<V> = {
    (key: Property): propSatisfies_general_111;
};
type propSatisfies_keyof_011<T extends {}, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_111;
};
type propSatisfies_record_011<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_111;
};
type propSatisfies_general_011 = {
    <V>(fn: Predicate<V>): propSatisfies_general_111;
};
type propSatisfies_keyof_111 = boolean;
type propSatisfies_record_111 = boolean;
type propSatisfies_general_111 = boolean;
export = propSatisfies;
