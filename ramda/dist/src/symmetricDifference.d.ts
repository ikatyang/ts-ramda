import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
declare const symmetricDifference: symmetricDifference_00;
type symmetricDifference_00 = {
    <T>(_a: PH, b: List<T>): symmetricDifference_01<T>;
    <T$1, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>): symmetricDifference_11<T$2>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(a: List<T$1>, b: List<T$2>) => symmetricDifference_11<T$2>;
    <$SEL extends "1">(): <T>(a: List<T>) => symmetricDifference_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => symmetricDifference_01<T>;
    <T>(a: List<T>): symmetricDifference_10<T>;
};
type symmetricDifference_10<T> = {
    <T$1 extends T = T>(b: List<T$1>): symmetricDifference_11<T$1>;
};
type symmetricDifference_01<T> = {
    (a: List<T>): symmetricDifference_11<T>;
};
type symmetricDifference_11<T> = T[];
export = symmetricDifference;
