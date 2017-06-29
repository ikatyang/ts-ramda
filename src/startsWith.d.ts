import { List } from "./$types";
/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
declare const startsWith: startsWith_00;
type startsWith_00 = {
    <T extends List<any>>(prefix: T, list: T): startsWith_11<T>;
    <T extends List<any>>(prefix: T): startsWith_10<T>;
};
type startsWith_10<T extends List<any>> = {
    (list: T): startsWith_11<T>;
};
type startsWith_01<T extends List<any>> = {
    (prefix: T): startsWith_11<T>;
};
type startsWith_11<T extends List<any>> = boolean;
export = startsWith;
