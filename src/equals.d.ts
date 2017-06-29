import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
declare const equals: equals_00;
type equals_00 = {
    <T>(_a: PH, b: T): equals_01<T>;
    <T>(a: T, b: T): equals_11;
    <T>(a: T): equals_10<T>;
};
type equals_10<T> = {
    (b: T): equals_11;
};
type equals_01<T> = {
    (a: T): equals_11;
};
type equals_11 = boolean;
export = equals;
