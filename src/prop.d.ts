import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const prop: prop_00;
type prop_00 = {
    <T extends {}, K extends keyof T>(key: K): prop_keyof_10<T, K>;
    <K extends string>(key: K): prop_record_10<K>;
    (key: Property): prop_general_10;
    <T extends {}>(_key: PH, object: T): prop_keyof_01<T>;
    <K extends string, T extends Record<K, any>>(_key: PH, object: T): prop_record_01<K, T>;
    (_key: PH, object: {}): prop_general_01;
    <T extends {}, K extends keyof T>(key: K, object: T): prop_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): prop_record_11<K, T>;
    <$SEL extends "1", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(key: K) => prop_keyof_10<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(key: K) => prop_record_10<K>;
    <$SEL extends "1", $KIND extends "general">(): (key: Property) => prop_general_10;
    <$SEL extends "01", $KIND extends "keyof">(): <T extends {}>(_key: PH, object: T) => prop_keyof_01<T>;
    <$SEL extends "01", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_key: PH, object: T) => prop_record_01<K, T>;
    <$SEL extends "01", $KIND extends "general">(): (_key: PH, object: {}) => prop_general_01;
    <$SEL extends "11", $KIND extends "keyof">(): <T extends {}, K extends keyof T>(key: K, object: T) => prop_keyof_11<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(key: K, object: T) => prop_record_11<K, T>;
    <$SEL extends "11", $KIND extends "general">(): (key: Property, object: {}) => prop_general_11;
    (key: Property, object: {}): prop_general_11;
};
type prop_keyof_10<T extends {}, K extends keyof T> = {
    (object: T): prop_keyof_11<T, K>;
};
type prop_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): prop_record_11<K, T>;
};
type prop_general_10 = {
    (object: {}): prop_general_11;
};
type prop_keyof_01<T extends {}> = {
    <K extends keyof T>(key: K): prop_keyof_11<T, K>;
};
type prop_record_01<K extends string, T extends Record<K, any>> = {
    (key: K): prop_record_11<K, T>;
};
type prop_general_01 = {
    (key: Property): prop_general_11;
};
type prop_keyof_11<T extends {}, K extends keyof T> = T[K];
type prop_record_11<K extends string, T extends Record<K, any>> = T[K];
type prop_general_11 = any;
export = prop;
