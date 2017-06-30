import { Dictionary, Filterable, List, Predicate } from "./$types";
/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
declare const reject: reject_00;
type reject_00 = {
    <T>(fn: Predicate<T>, list: List<T>): reject_list_11<T>;
    <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): reject_filterable_11<T, U>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U): reject_object_11<T, U>;
    <T>(fn: Predicate<T>): reject_10<T>;
};
type reject_10<T> = {
    (list: List<T>): reject_list_11<T>;
    <U extends Filterable<T>>(filterable: U): reject_filterable_11<T, U>;
    <U extends Dictionary<T>>(object: U): reject_object_11<T, U>;
};
type reject_list_01<T> = {
    (fn: Predicate<T>): reject_list_11<T>;
};
type reject_filterable_01<T, U extends Filterable<T>> = {
    (fn: Predicate<T>): reject_filterable_11<T, U>;
};
type reject_object_01<T, U extends Dictionary<T>> = {
    (fn: Predicate<T>): reject_object_11<T, U>;
};
type reject_list_11<T> = T[];
type reject_filterable_11<T, U extends Filterable<T>> = U;
type reject_object_11<T, U extends Dictionary<T>> = Partial<U>;
export = reject;