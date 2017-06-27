import { Placeholder as PH } from "./$placeholder";
/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
declare const mergeDeepWith: mergeDeepWith_000;
type mergeDeepWith_000 = {
    <V>(fn: (a: V, b: V) => any, _left: PH, right: object): mergeDeepWith_101<V>;
    (_fn: PH, left: object, right: object): mergeDeepWith_011;
    (_fn: PH, _left: PH, right: object): mergeDeepWith_001;
    <V, T>(fn: (a: V, b: V) => any, left: object, right: object): mergeDeepWith_111<V, T>;
    (_fn: PH, left: object): mergeDeepWith_010;
    <V>(fn: (a: V, b: V) => any, left: object): mergeDeepWith_110<V>;
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_100<V>;
};
type mergeDeepWith_100<V> = {
    (_left: PH, right: object): mergeDeepWith_101<V>;
    <T>(left: object, right: object): mergeDeepWith_111<V, T>;
    (left: object): mergeDeepWith_110<V>;
};
type mergeDeepWith_010 = {
    (_fn: PH, right: object): mergeDeepWith_011;
    <V, T>(fn: (a: V, b: V) => any, right: object): mergeDeepWith_111<V, T>;
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_110<V>;
};
type mergeDeepWith_110<V> = {
    <T>(right: object): mergeDeepWith_111<V, T>;
};
type mergeDeepWith_001 = {
    (_fn: PH, left: object): mergeDeepWith_011;
    <V, T>(fn: (a: V, b: V) => any, left: object): mergeDeepWith_111<V, T>;
    <V>(fn: (a: V, b: V) => any): mergeDeepWith_101<V>;
};
type mergeDeepWith_101<V> = {
    <T>(left: object): mergeDeepWith_111<V, T>;
};
type mergeDeepWith_011 = {
    <V, T>(fn: (a: V, b: V) => any): mergeDeepWith_111<V, T>;
};
type mergeDeepWith_111<V, T> = T;
export = mergeDeepWith;
