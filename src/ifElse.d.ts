import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const ifElse: ifElse_000;
type ifElse_000 = {
    <T>(pred: Predicate<T>): ifElse_100<T>;
    <T, U>(_pred: PH, onTrue: Morphism<T, U>): ifElse_010<T, U>;
    <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <T, V>(_pred: PH, _onTrue: PH, onFalse: Morphism<T, V>): ifElse_001<T, V>;
    <T, U, V>(_pred: PH, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_011<T, U, V>;
    <T, V>(pred: Predicate<T>, _onTrue: PH, onFalse: Morphism<T, V>): ifElse_101<T, V>;
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_100<T> = {
    <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <V>(_onTrue: PH, onFalse: Morphism<T, V>): ifElse_101<T, V>;
    <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_010<T, U> = {
    (pred: Predicate<T>): ifElse_110<T, U>;
    <V>(_pred: PH, onFalse: Morphism<T, V>): ifElse_011<T, U, V>;
    <V>(pred: Predicate<T>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_110<T, U> = {
    <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_001<T, V> = {
    (pred: Predicate<T>): ifElse_101<T, V>;
    <U>(_pred: PH, onTrue: Morphism<T, U>): ifElse_011<T, U, V>;
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
