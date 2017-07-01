import { Chain, List, Morphism, NestedMorphism } from "./$types";
/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
declare const chain: chain_00;
type chain_00 = {
    <T, U>(fn: Morphism<T, List<U>>): chain_list_10<T, U>;
    <T, U>(fn: Morphism<T, Chain<U>>): chain_chain_10<T, U>;
    <T, U, V>(fn: NestedMorphism<V, List<T>, U>): chain_listFn_10<T, U, V>;
    <T, U, V>(fn: NestedMorphism<V, Chain<T>, Chain<U>>): chain_chainFn_10<T, U, V>;
    <T, U>(fn: Morphism<T, List<U>>, list: List<T>): chain_list_11<U>;
    <T, U>(fn: Morphism<T, Chain<U>>, list: Chain<T>): chain_chain_11<U>;
    <T, U, V>(fn: NestedMorphism<V, List<T>, U>, monad: Morphism<List<T>, V>): chain_listFn_11<T, U>;
    <T, U, V>(fn: NestedMorphism<V, Chain<T>, Chain<U>>, monad: Morphism<Chain<T>, V>): chain_chainFn_11<T, U>;
};
type chain_list_10<T, U> = {
    (list: List<T>): chain_list_11<U>;
};
type chain_chain_10<T, U> = {
    (list: Chain<T>): chain_chain_11<U>;
};
type chain_listFn_10<T, U, V> = {
    (monad: Morphism<List<T>, V>): chain_listFn_11<T, U>;
};
type chain_chainFn_10<T, U, V> = {
    (monad: Morphism<Chain<T>, V>): chain_chainFn_11<T, U>;
};
type chain_list_01<T> = {
    <U>(fn: Morphism<T, List<U>>): chain_list_11<U>;
};
type chain_chain_01<T> = {
    <U>(fn: Morphism<T, Chain<U>>): chain_chain_11<U>;
};
type chain_listFn_01<T, V> = {
    <U>(fn: NestedMorphism<V, List<T>, U>): chain_listFn_11<T, U>;
};
type chain_chainFn_01<T, V> = {
    <U>(fn: NestedMorphism<V, Chain<T>, Chain<U>>): chain_chainFn_11<T, U>;
};
type chain_list_11<U> = U[];
type chain_chain_11<U> = Chain<U>;
type chain_listFn_11<T, U> = Morphism<List<T>, U>;
type chain_chainFn_11<T, U> = Morphism<Chain<T>, Chain<U>>;
export = chain;
