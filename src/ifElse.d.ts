import { Morphism, Predicate } from "./$types";
declare const ifElse: ifElse_000;
type ifElse_000 = {
    <T>(pred: Predicate<T>): ifElse_100<T>;
    <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => ifElse_100<T>;
    <$SEL extends "11">(): <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>) => ifElse_110<T, U>;
    <$SEL extends "111">(): <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_100<T> = {
    <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <$SEL extends "1">(): <U>(onTrue: Morphism<T, U>) => ifElse_110<T, U>;
    <$SEL extends "11">(): <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_010<T, U> = {
    (pred: Predicate<T>): ifElse_110<T, U>;
    <$SEL extends "1">(): (pred: Predicate<T>) => ifElse_110<T, U>;
    <$SEL extends "11">(): <V>(pred: Predicate<T>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <V>(pred: Predicate<T>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_110<T, U> = {
    <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_001<T, V> = {
    (pred: Predicate<T>): ifElse_101<T, V>;
    <$SEL extends "1">(): (pred: Predicate<T>) => ifElse_101<T, V>;
    <$SEL extends "11">(): <U>(pred: Predicate<T>, onTrue: Morphism<T, U>) => ifElse_111<T, U, V>;
    <U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_111<T, U, V>;
};
type ifElse_101<T, V> = {
    <U>(onTrue: Morphism<T, U>): ifElse_111<T, U, V>;
};
type ifElse_011<T, U, V> = {
    (pred: Predicate<T>): ifElse_111<T, U, V>;
};
type ifElse_111<T, U, V> = Morphism<T, U | V>;
export = ifElse;
