import { Placeholder as PH } from "./$placeholder";
/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
declare const tryCatch: tryCatch_00;
type tryCatch_00 = {
    <F extends Function>(_tryer: PH, catcher: F): tryCatch_01<F>;
    <F$1 extends Function, F$2 extends F$1 = F$1>(tryer: F$1, catcher: F$2): tryCatch_11<F$2>;
    <$SEL extends "11">(): <F$1 extends Function, F$2 extends F$1 = F$1>(tryer: F$1, catcher: F$2) => tryCatch_11<F$2>;
    <$SEL extends "1">(): <F extends Function>(tryer: F) => tryCatch_10<F>;
    <$SEL extends "01">(): <F extends Function>(_tryer: PH, catcher: F) => tryCatch_01<F>;
    <F extends Function>(tryer: F): tryCatch_10<F>;
};
type tryCatch_10<F extends Function> = {
    <F$1 extends F = F>(catcher: F$1): tryCatch_11<F$1>;
};
type tryCatch_01<F extends Function> = {
    (tryer: F): tryCatch_11<F>;
};
type tryCatch_11<F extends Function> = F;
export = tryCatch;
