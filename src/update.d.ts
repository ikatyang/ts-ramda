import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
declare const update: update_000;
type update_000 = {
    (index: number): update_100;
    <T>(_index: PH, value: T): update_010<T>;
    <T>(index: number, value: T): update_110<T>;
    <T>(_index: PH, _value: PH, list: List<T>): update_001<T>;
    <T>(_index: PH, value: T, list: List<T>): update_011<T>;
    <T>(index: number, _value: PH, list: List<T>): update_101<T>;
    <$SEL extends "1">(): (index: number) => update_100;
    <$SEL extends "01">(): <T>(_index: PH, value: T) => update_010<T>;
    <$SEL extends "11">(): <T>(index: number, value: T) => update_110<T>;
    <$SEL extends "001">(): <T>(_index: PH, _value: PH, list: List<T>) => update_001<T>;
    <$SEL extends "011">(): <T>(_index: PH, value: T, list: List<T>) => update_011<T>;
    <$SEL extends "101">(): <T>(index: number, _value: PH, list: List<T>) => update_101<T>;
    <$SEL extends "111">(): <T>(index: number, value: T, list: List<T>) => update_111<T>;
    <T>(index: number, value: T, list: List<T>): update_111<T>;
};
type update_100 = {
    <T>(value: T): update_110<T>;
    <T>(_value: PH, list: List<T>): update_101<T>;
    <$SEL extends "1">(): <T>(value: T) => update_110<T>;
    <$SEL extends "01">(): <T>(_value: PH, list: List<T>) => update_101<T>;
    <$SEL extends "11">(): <T>(value: T, list: List<T>) => update_111<T>;
    <T>(value: T, list: List<T>): update_111<T>;
};
type update_010<T> = {
    (index: number): update_110<T>;
    (_index: PH, list: List<T>): update_011<T>;
    <$SEL extends "1">(): (index: number) => update_110<T>;
    <$SEL extends "01">(): (_index: PH, list: List<T>) => update_011<T>;
    <$SEL extends "11">(): (index: number, list: List<T>) => update_111<T>;
    (index: number, list: List<T>): update_111<T>;
};
type update_110<T> = {
    (list: List<T>): update_111<T>;
};
type update_001<T> = {
    (index: number): update_101<T>;
    (_index: PH, value: T): update_011<T>;
    <$SEL extends "1">(): (index: number) => update_101<T>;
    <$SEL extends "01">(): (_index: PH, value: T) => update_011<T>;
    <$SEL extends "11">(): (index: number, value: T) => update_111<T>;
    (index: number, value: T): update_111<T>;
};
type update_101<T> = {
    (value: T): update_111<T>;
};
type update_011<T> = {
    (index: number): update_111<T>;
};
type update_111<T> = T[];
export = update;