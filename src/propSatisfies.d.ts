import { Predicate, Property } from "./$types";
declare const propSatisfies: propSatisfies_000;
type propSatisfies_000 = {
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <V>(fn: Predicate<V>): propSatisfies_general_100<V>;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_110<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K): propSatisfies_record_110<K, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_general_110<V>;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_keyof_111;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_record_111;
    <$SEL extends "1", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_100<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_100<K, T>;
    <$SEL extends "1", $KIND extends "general">(): <V>(fn: Predicate<V>) => propSatisfies_general_100<V>;
    <$SEL extends "11", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K) => propSatisfies_keyof_110<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K) => propSatisfies_record_110<K, T>;
    <$SEL extends "11", $KIND extends "general">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_general_110<V>;
    <$SEL extends "111", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T) => propSatisfies_keyof_111;
    <$SEL extends "111", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T) => propSatisfies_record_111;
    <$SEL extends "111", $KIND extends "general">(): <V>(fn: Predicate<V>, key: Property, object: {}) => propSatisfies_general_111;
    <V>(fn: Predicate<V>, key: Property, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_100<T extends {}, K extends keyof T> = {
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
type propSatisfies_general_100<V> = {
    (key: Property): propSatisfies_general_110<V>;
    <$SEL extends "1">(): (key: Property) => propSatisfies_general_110<V>;
    <$SEL extends "11">(): (key: Property, object: {}) => propSatisfies_general_111;
    (key: Property, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_010<T extends {}, K extends keyof T> = {
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
type propSatisfies_general_010 = {
    <V>(fn: Predicate<V>): propSatisfies_general_110<V>;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_general_110<V>;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, object: {}) => propSatisfies_general_111;
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
type propSatisfies_general_001 = {
    <V>(fn: Predicate<V>): propSatisfies_general_101<V>;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_general_101<V>;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_general_111;
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
