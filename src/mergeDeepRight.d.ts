import { Placeholder as PH } from "./$placeholder";
/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
declare const mergeDeepRight: mergeDeepRight_00;
type mergeDeepRight_00 = {
    (left: object): mergeDeepRight_10;
    (_left: PH, right: object): mergeDeepRight_01;
    <T>(left: object, right: object): mergeDeepRight_11<T>;
};
type mergeDeepRight_10 = {
    <T>(right: object): mergeDeepRight_11<T>;
};
type mergeDeepRight_01 = {
    <T>(left: object): mergeDeepRight_11<T>;
};
type mergeDeepRight_11<T> = T;
export = mergeDeepRight;
