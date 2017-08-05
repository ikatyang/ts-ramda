import { Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const eqBy: eqBy_000;
type eqBy_000 = {
    <T>(fn: Morphism<T, any>): eqBy_100<T>;
    <T>(_fn: PH, a: T): eqBy_010<T>;
    <T>(fn: Morphism<T, any>, a: T): eqBy_110<T>;
    <T>(_fn: PH, _a: PH, b: T): eqBy_001<T>;
    <T>(_fn: PH, a: T, b: T): eqBy_011<T>;
    <T>(fn: Morphism<T, any>, _a: PH, b: T): eqBy_101<T>;
    <T>(fn: Morphism<T, any>, a: T, b: T): eqBy_111;
};
type eqBy_100<T> = {
    (a: T): eqBy_110<T>;
    (_a: PH, b: T): eqBy_101<T>;
    (a: T, b: T): eqBy_111;
};
type eqBy_010<T> = {
    (fn: Morphism<T, any>): eqBy_110<T>;
    (_fn: PH, b: T): eqBy_011<T>;
    (fn: Morphism<T, any>, b: T): eqBy_111;
};
type eqBy_110<T> = {
    (b: T): eqBy_111;
};
type eqBy_001<T> = {
    (fn: Morphism<T, any>): eqBy_101<T>;
    (_fn: PH, a: T): eqBy_011<T>;
    (fn: Morphism<T, any>, a: T): eqBy_111;
};
type eqBy_101<T> = {
    (a: T): eqBy_111;
};
type eqBy_011<T> = {
    (fn: Morphism<T, any>): eqBy_111;
};
type eqBy_111 = boolean;
export = eqBy;
