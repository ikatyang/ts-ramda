import { Constructor, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propIs: propIs_000;
type propIs_000 = {
    <T>(constructor: Constructor<T>): propIs_guard_100<T>;
    (constructor: Constructor<any>): propIs_general_100;
    <K extends string>(_constructor: PH, key: K): propIs_guard_010<K>;
    (_constructor: PH, key: Property): propIs_general_010;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_110<T, K>;
    (constructor: Constructor<any>, key: Property): propIs_general_110;
    <U extends {}>(_constructor: PH, _key: PH, object: U): propIs_guard_001<U>;
    (_constructor: PH, _key: PH, object: {}): propIs_general_001;
    <U extends {}, K extends string>(_constructor: PH, key: K, object: U): propIs_guard_011<U, K>;
    (_constructor: PH, key: Property, object: {}): propIs_general_011;
    <T, U extends {}>(constructor: Constructor<T>, _key: PH, object: U): propIs_guard_101<T, U>;
    (constructor: Constructor<any>, _key: PH, object: {}): propIs_general_101;
    <T, U extends {}, K extends string>(constructor: Constructor<T>, key: K, object: U): object is U & Record<K, T>;
    (constructor: Constructor<any>, key: Property, object: {}): propIs_general_111;
};
type propIs_guard_100<T> = {
    <K extends string>(key: K): propIs_guard_110<T, K>;
    <U extends {}>(_key: PH, object: U): propIs_guard_101<T, U>;
    <U extends {}, K extends string>(key: K, object: U): object is U & Record<K, T>;
};
type propIs_general_100 = {
    (key: Property): propIs_general_110;
    (_key: PH, object: {}): propIs_general_101;
    (key: Property, object: {}): propIs_general_111;
};
type propIs_guard_010<K extends string> = {
    <T>(constructor: Constructor<T>): propIs_guard_110<T, K>;
    <U extends {}>(_constructor: PH, object: U): propIs_guard_011<U, K>;
    <T, U extends {}>(constructor: Constructor<T>, object: U): object is U & Record<K, T>;
};
type propIs_general_010 = {
    (constructor: Constructor<any>): propIs_general_110;
    (_constructor: PH, object: {}): propIs_general_011;
    (constructor: Constructor<any>, object: {}): propIs_general_111;
};
type propIs_guard_110<T, K extends string> = {
    <U extends {}>(object: U): object is U & Record<K, T>;
};
type propIs_general_110 = {
    (object: {}): propIs_general_111;
};
type propIs_guard_001<U extends {}> = {
    <T>(constructor: Constructor<T>): propIs_guard_101<T, U>;
    <K extends string>(_constructor: PH, key: K): propIs_guard_011<U, K>;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_111<T, U, K>;
};
type propIs_general_001 = {
    (constructor: Constructor<any>): propIs_general_101;
    (_constructor: PH, key: Property): propIs_general_011;
    (constructor: Constructor<any>, key: Property): propIs_general_111;
};
type propIs_guard_101<T, U extends {}> = {
    <K extends string>(key: K): propIs_guard_111<T, U, K>;
};
type propIs_general_101 = {
    (key: Property): propIs_general_111;
};
type propIs_guard_011<U extends {}, K extends string> = {
    <T>(constructor: Constructor<T>): propIs_guard_111<T, U, K>;
};
type propIs_general_011 = {
    (constructor: Constructor<any>): propIs_general_111;
};
type propIs_guard_111<T, U extends {}, K extends string> = boolean;
type propIs_general_111 = boolean;
export = propIs;
