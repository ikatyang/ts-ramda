import { Functor, List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pluck: pluck_00;
type pluck_00 = {
    (index: number): pluck_list_10;
    <T, K extends keyof T>(key: K): pluck_keyof_10<T, K>;
    <K extends string>(key: K): pluck_record_10<K>;
    (key: Property): pluck_general_10;
    <U>(_index: PH, list: List<List<U>>): pluck_list_01<U>;
    <T>(_key: PH, list: List<T>): pluck_keyof_01<T>;
    <K extends string, V, T extends Record<K, V>>(_key: PH, list: List<T>): pluck_record_01<K, V, T>;
    (_key: PH, list: List<any>): pluck_general_01;
    <U>(index: number, list: List<List<U>>): pluck_list_11<U>;
    <T, K extends keyof T>(key: K, list: List<T>): pluck_keyof_11<T, K>;
    <K extends string, V, T extends Record<K, V>>(key: K, list: List<T>): pluck_record_11<K, V, T>;
    <$SEL extends "1", $KIND extends "list">(): (index: number) => pluck_list_10;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(key: K) => pluck_keyof_10<T, K>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(key: K) => pluck_record_10<K>;
    <$SEL extends "1", $KIND extends "general">(): (key: Property) => pluck_general_10;
    <$SEL extends "01", $KIND extends "list">(): <U>(_index: PH, list: List<List<U>>) => pluck_list_01<U>;
    <$SEL extends "01", $KIND extends "keyof">(): <T>(_key: PH, list: List<T>) => pluck_keyof_01<T>;
    <$SEL extends "01", $KIND extends "record">(): <K extends string, V, T extends Record<K, V>>(_key: PH, list: List<T>) => pluck_record_01<K, V, T>;
    <$SEL extends "01", $KIND extends "general">(): (_key: PH, list: List<any>) => pluck_general_01;
    <$SEL extends "11", $KIND extends "list">(): <U>(index: number, list: List<List<U>>) => pluck_list_11<U>;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(key: K, list: List<T>) => pluck_keyof_11<T, K>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, V, T extends Record<K, V>>(key: K, list: List<T>) => pluck_record_11<K, V, T>;
    <$SEL extends "11", $KIND extends "general">(): (key: Property, list: List<any>) => pluck_general_11;
    (key: Property, list: List<any>): pluck_general_11;
};
type pluck_list_10 = {
    <U>(list: List<List<U>>): pluck_list_11<U>;
};
type pluck_keyof_10<T, K extends keyof T> = {
    (list: List<T>): pluck_keyof_11<T, K>;
};
type pluck_record_10<K extends string> = {
    <V, T extends Record<K, V>>(list: List<T>): pluck_record_11<K, V, T>;
};
type pluck_general_10 = {
    (list: List<any>): pluck_general_11;
};
type pluck_list_01<U> = {
    (index: number): pluck_list_11<U>;
};
type pluck_keyof_01<T> = {
    <K extends keyof T>(key: K): pluck_keyof_11<T, K>;
};
type pluck_record_01<K extends string, V, T extends Record<K, V>> = {
    (key: K): pluck_record_11<K, V, T>;
};
type pluck_general_01 = {
    (key: Property): pluck_general_11;
};
type pluck_list_11<U> = U[];
type pluck_keyof_11<T, K extends keyof T> = T[K][];
type pluck_record_11<K extends string, V, T extends Record<K, V>> = T[K][];
type pluck_general_11 = any[];
export = pluck;
