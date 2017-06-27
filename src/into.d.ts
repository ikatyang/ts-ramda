import { Morphism, Reduced, Transformer } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
declare const into: into_000;
type into_000 = {
    <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_111<T, U>;
    <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_111<T, V>;
    <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_110<T, U>;
    <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_110<T, V>;
    <T, U>(initial: Transformer<T, U, U>): into_transformer_100<T, U>;
    <$SEL extends "111", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_transformer_111<T, U>;
    <$SEL extends "11", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_110<T, U>;
    <$SEL extends "1", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>) => into_transformer_100<T, U>;
    <$SEL extends "111", $KIND extends "base">(): <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]) => into_base_111<T, V>;
    <$SEL extends "11", $KIND extends "base">(): <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_110<T, V>;
    <$SEL extends "1", $KIND extends "base">(): <V extends string | object>(initial: V) => into_base_100<V>;
    <V extends string | object>(initial: V): into_base_100<V>;
};
type into_001<T> = {
    <U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_111<T, U>;
    <V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_111<T, V>;
    <U>(initial: Transformer<T, U, U>): into_transformer_101<T, U>;
    <$SEL extends "11", $KIND extends "transformer">(): <U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_111<T, U>;
    <$SEL extends "1", $KIND extends "transformer">(): <U>(initial: Transformer<T, U, U>) => into_transformer_101<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_111<T, V>;
    <$SEL extends "1", $KIND extends "base">(): <V extends string | object>(initial: V) => into_base_101<T, V>;
    <V extends string | object>(initial: V): into_base_101<T, V>;
};
type into_transformer_100<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_111<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_transformer_111<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_110<T, U>;
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_110<T, U>;
};
type into_base_100<V extends string | object> = {
    <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_111<T, V>;
    <$SEL extends "11">(): <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]) => into_base_111<T, V>;
    <$SEL extends "1">(): <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_110<T, V>;
    <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_110<T, V>;
};
type into_transformer_010<T, U> = {
    (initial: Transformer<T, U, U>, values: T[]): into_transformer_111<T, U>;
    <$SEL extends "11">(): (initial: Transformer<T, U, U>, values: T[]) => into_transformer_111<T, U>;
    <$SEL extends "1">(): (initial: Transformer<T, U, U>) => into_transformer_110<T, U>;
    (initial: Transformer<T, U, U>): into_transformer_110<T, U>;
};
type into_base_010<T, V extends string | object> = {
    (initial: V, values: T[]): into_base_111<T, V>;
    <$SEL extends "11">(): (initial: V, values: T[]) => into_base_111<T, V>;
    <$SEL extends "1">(): (initial: V) => into_base_110<T, V>;
    (initial: V): into_base_110<T, V>;
};
type into_transformer_110<T, U> = {
    (values: T[]): into_transformer_111<T, U>;
};
type into_base_110<T, V extends string | object> = {
    (values: T[]): into_base_111<T, V>;
};
type into_transformer_101<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_111<T, U>;
};
type into_base_101<T, V extends string | object> = {
    (transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_111<T, V>;
};
type into_transformer_011<T, U> = {
    (initial: Transformer<T, U, U>): into_transformer_111<T, U>;
};
type into_base_011<T, V extends string | object> = {
    (initial: V): into_base_111<T, V>;
};
type into_transformer_111<T, U> = U;
type into_base_111<T, V extends string | object> = V;
export = into;
