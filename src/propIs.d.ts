import { Constructor, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
declare const propIs: propIs_000;
type propIs_000 = {
    <T>(constructor: Constructor<T>): propIs_guard_100<T>;
    (constructor: Constructor<any>): propIs_general_100;
    <K extends string>(_constructor: PH, key: K): propIs_guard_010<K>;
    (_constructor: PH, key: Property): propIs_general_010;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_110<T, K>;
    (constructor: Constructor<any>, key: Property): propIs_general_110;
    <U>(_constructor: PH, _key: PH, object: U): propIs_guard_001<U>;
    (_constructor: PH, _key: PH, object: {}): propIs_general_001;
    <U, K extends string>(_constructor: PH, key: K, object: U): propIs_guard_011<U, K>;
    (_constructor: PH, key: Property, object: {}): propIs_general_011;
    <T, U>(constructor: Constructor<T>, _key: PH, object: U): propIs_guard_101<T, U>;
    (constructor: Constructor<any>, _key: PH, object: {}): propIs_general_101;
    <T, U, K extends string>(constructor: Constructor<T>, key: K, object: U): object is U & Record<K, T>;
    <$SEL extends "1", $KIND extends "guard">(): <T>(constructor: Constructor<T>) => propIs_guard_100<T>;
    <$SEL extends "1", $KIND extends "general">(): (constructor: Constructor<any>) => propIs_general_100;
    <$SEL extends "01", $KIND extends "guard">(): <K extends string>(_constructor: PH, key: K) => propIs_guard_010<K>;
    <$SEL extends "01", $KIND extends "general">(): (_constructor: PH, key: Property) => propIs_general_010;
    <$SEL extends "11", $KIND extends "guard">(): <T, K extends string>(constructor: Constructor<T>, key: K) => propIs_guard_110<T, K>;
    <$SEL extends "11", $KIND extends "general">(): (constructor: Constructor<any>, key: Property) => propIs_general_110;
    <$SEL extends "001", $KIND extends "guard">(): <U>(_constructor: PH, _key: PH, object: U) => propIs_guard_001<U>;
    <$SEL extends "001", $KIND extends "general">(): (_constructor: PH, _key: PH, object: {}) => propIs_general_001;
    <$SEL extends "011", $KIND extends "guard">(): <U, K extends string>(_constructor: PH, key: K, object: U) => propIs_guard_011<U, K>;
    <$SEL extends "011", $KIND extends "general">(): (_constructor: PH, key: Property, object: {}) => propIs_general_011;
    <$SEL extends "101", $KIND extends "guard">(): <T, U>(constructor: Constructor<T>, _key: PH, object: U) => propIs_guard_101<T, U>;
    <$SEL extends "101", $KIND extends "general">(): (constructor: Constructor<any>, _key: PH, object: {}) => propIs_general_101;
    <$SEL extends "111", $KIND extends "guard">(): <T, U, K extends string>(constructor: Constructor<T>, key: K, object: U) => object is U & Record<K, T>;
    <$SEL extends "111", $KIND extends "general">(): (constructor: Constructor<any>, key: Property, object: {}) => propIs_general_111;
    (constructor: Constructor<any>, key: Property, object: {}): propIs_general_111;
};
type propIs_guard_100<T> = {
    <K extends string>(key: K): propIs_guard_110<T, K>;
    <U>(_key: PH, object: U): propIs_guard_101<T, U>;
    <$SEL extends "1">(): <K extends string>(key: K) => propIs_guard_110<T, K>;
    <$SEL extends "01">(): <U>(_key: PH, object: U) => propIs_guard_101<T, U>;
    <$SEL extends "11">(): <U, K extends string>(key: K, object: U) => object is U & Record<K, T>;
    <U, K extends string>(key: K, object: U): object is U & Record<K, T>;
};
type propIs_general_100 = {
    (key: Property): propIs_general_110;
    (_key: PH, object: {}): propIs_general_101;
    <$SEL extends "1">(): (key: Property) => propIs_general_110;
    <$SEL extends "01">(): (_key: PH, object: {}) => propIs_general_101;
    <$SEL extends "11">(): (key: Property, object: {}) => propIs_general_111;
    (key: Property, object: {}): propIs_general_111;
};
type propIs_guard_010<K extends string> = {
    <T>(constructor: Constructor<T>): propIs_guard_110<T, K>;
    <U>(_constructor: PH, object: U): propIs_guard_011<U, K>;
    <$SEL extends "1">(): <T>(constructor: Constructor<T>) => propIs_guard_110<T, K>;
    <$SEL extends "01">(): <U>(_constructor: PH, object: U) => propIs_guard_011<U, K>;
    <$SEL extends "11">(): <T, U>(constructor: Constructor<T>, object: U) => object is U & Record<K, T>;
    <T, U>(constructor: Constructor<T>, object: U): object is U & Record<K, T>;
};
type propIs_general_010 = {
    (constructor: Constructor<any>): propIs_general_110;
    (_constructor: PH, object: {}): propIs_general_011;
    <$SEL extends "1">(): (constructor: Constructor<any>) => propIs_general_110;
    <$SEL extends "01">(): (_constructor: PH, object: {}) => propIs_general_011;
    <$SEL extends "11">(): (constructor: Constructor<any>, object: {}) => propIs_general_111;
    (constructor: Constructor<any>, object: {}): propIs_general_111;
};
type propIs_guard_110<T, K extends string> = {
    <U>(object: U): object is U & Record<K, T>;
};
type propIs_general_110 = {
    (object: {}): propIs_general_111;
};
type propIs_guard_001<U> = {
    <T>(constructor: Constructor<T>): propIs_guard_101<T, U>;
    <K extends string>(_constructor: PH, key: K): propIs_guard_011<U, K>;
    <$SEL extends "1">(): <T>(constructor: Constructor<T>) => propIs_guard_101<T, U>;
    <$SEL extends "01">(): <K extends string>(_constructor: PH, key: K) => propIs_guard_011<U, K>;
    <$SEL extends "11">(): <T, K extends string>(constructor: Constructor<T>, key: K) => propIs_guard_111<T, U, K>;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_111<T, U, K>;
};
type propIs_general_001 = {
    (constructor: Constructor<any>): propIs_general_101;
    (_constructor: PH, key: Property): propIs_general_011;
    <$SEL extends "1">(): (constructor: Constructor<any>) => propIs_general_101;
    <$SEL extends "01">(): (_constructor: PH, key: Property) => propIs_general_011;
    <$SEL extends "11">(): (constructor: Constructor<any>, key: Property) => propIs_general_111;
    (constructor: Constructor<any>, key: Property): propIs_general_111;
};
type propIs_guard_101<T, U> = {
    <K extends string>(key: K): propIs_guard_111<T, U, K>;
};
type propIs_general_101 = {
    (key: Property): propIs_general_111;
};
type propIs_guard_011<U, K extends string> = {
    <T>(constructor: Constructor<T>): propIs_guard_111<T, U, K>;
};
type propIs_general_011 = {
    (constructor: Constructor<any>): propIs_general_111;
};
type propIs_guard_111<T, U, K extends string> = boolean;
type propIs_general_111 = boolean;
export = propIs;
