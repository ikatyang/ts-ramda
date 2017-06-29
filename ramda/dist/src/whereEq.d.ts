import { Dictionary } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
declare const whereEq: whereEq_00;
type whereEq_00 = {
    <T>(_spec: PH, object: Dictionary<T>): whereEq_01<T>;
    <T$1, T$2 extends T$1 = T$1>(spec: Dictionary<T$1>, object: Dictionary<T$2>): whereEq_11;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(spec: Dictionary<T$1>, object: Dictionary<T$2>) => whereEq_11;
    <$SEL extends "1">(): <T>(spec: Dictionary<T>) => whereEq_10<T>;
    <$SEL extends "01">(): <T>(_spec: PH, object: Dictionary<T>) => whereEq_01<T>;
    <T>(spec: Dictionary<T>): whereEq_10<T>;
};
type whereEq_10<T> = {
    <T$1 extends T = T>(object: Dictionary<T$1>): whereEq_11;
};
type whereEq_01<T> = {
    (spec: Dictionary<T>): whereEq_11;
};
type whereEq_11 = boolean;
export = whereEq;
