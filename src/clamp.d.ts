import { Ordered } from "./$types";
/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
declare const clamp: clamp_000;
type clamp_000 = {
    <T extends Ordered>(min: T): clamp_100<T>;
    <T extends Ordered>(min: T, max: T): clamp_110<T>;
    <$SEL extends "111">(): <T extends Ordered>(min: T, max: T, value: T) => clamp_111<T>;
    <$SEL extends "11">(): <T extends Ordered>(min: T, max: T) => clamp_110<T>;
    <$SEL extends "1">(): <T extends Ordered>(min: T) => clamp_100<T>;
    <T extends Ordered>(min: T, max: T, value: T): clamp_111<T>;
};
type clamp_100<T extends Ordered> = {
    (max: T): clamp_110<T>;
    <$SEL extends "11">(): (max: T, value: T) => clamp_111<T>;
    <$SEL extends "1">(): (max: T) => clamp_110<T>;
    (max: T, value: T): clamp_111<T>;
};
type clamp_010<T extends Ordered> = {
    (min: T): clamp_110<T>;
    <$SEL extends "11">(): (min: T, value: T) => clamp_111<T>;
    <$SEL extends "1">(): (min: T) => clamp_110<T>;
    (min: T, value: T): clamp_111<T>;
};
type clamp_110<T extends Ordered> = {
    (value: T): clamp_111<T>;
};
type clamp_001<T extends Ordered> = {
    (min: T): clamp_101<T>;
    <$SEL extends "11">(): (min: T, max: T) => clamp_111<T>;
    <$SEL extends "1">(): (min: T) => clamp_101<T>;
    (min: T, max: T): clamp_111<T>;
};
type clamp_101<T extends Ordered> = {
    (max: T): clamp_111<T>;
};
type clamp_011<T extends Ordered> = {
    (min: T): clamp_111<T>;
};
type clamp_111<T extends Ordered> = T;
export = clamp;
