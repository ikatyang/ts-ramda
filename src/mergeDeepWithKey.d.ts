/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
declare const mergeDeepWithKey: mergeDeepWithKey_000;
type mergeDeepWithKey_000 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_100<V>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_110<V>;
    <$SEL extends "111">(): <V, T>(fn: (key: string, a: V, b: V) => any, left: object, right: object) => mergeDeepWithKey_111<T>;
    <$SEL extends "11">(): <V>(fn: (key: string, a: V, b: V) => any, left: object) => mergeDeepWithKey_110<V>;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeDeepWithKey_100<V>;
    <V, T>(fn: (key: string, a: V, b: V) => any, left: object, right: object): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_100<V> = {
    (left: object): mergeDeepWithKey_110<V>;
    <$SEL extends "11">(): <T>(left: object, right: object) => mergeDeepWithKey_111<T>;
    <$SEL extends "1">(): (left: object) => mergeDeepWithKey_110<V>;
    <T>(left: object, right: object): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_010 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_110<V>;
    <$SEL extends "11">(): <V, T>(fn: (key: string, a: V, b: V) => any, right: object) => mergeDeepWithKey_111<T>;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeDeepWithKey_110<V>;
    <V, T>(fn: (key: string, a: V, b: V) => any, right: object): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_110<V> = {
    <T>(right: object): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_001 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_101<V>;
    <$SEL extends "11">(): <V, T>(fn: (key: string, a: V, b: V) => any, left: object) => mergeDeepWithKey_111<T>;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeDeepWithKey_101<V>;
    <V, T>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_101<V> = {
    <T>(left: object): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_011 = {
    <V, T>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_111<T>;
};
type mergeDeepWithKey_111<T> = T;
export = mergeDeepWithKey;
