import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
declare const insertAll: insertAll_000;
type insertAll_000 = {
    <T, U>(index: number, values: List<T>, list: List<U>): insertAll_111<T, U>;
    <T>(index: number, values: List<T>): insertAll_110<T>;
    (index: number): insertAll_100;
};
type insertAll_100 = {
    <T, U>(values: List<T>, list: List<U>): insertAll_111<T, U>;
    <T>(values: List<T>): insertAll_110<T>;
};
type insertAll_010<T> = {
    <U>(index: number, list: List<U>): insertAll_111<T, U>;
    (index: number): insertAll_110<T>;
};
type insertAll_110<T> = {
    <U>(list: List<U>): insertAll_111<T, U>;
};
type insertAll_001<U> = {
    <T>(index: number, values: List<T>): insertAll_111<T, U>;
    (index: number): insertAll_101<U>;
};
type insertAll_101<U> = {
    <T>(values: List<T>): insertAll_111<T, U>;
};
type insertAll_011<T, U> = {
    (index: number): insertAll_111<T, U>;
};
type insertAll_111<T, U> = (T | U)[];
export = insertAll;
