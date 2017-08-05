import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const descend: descend_000;
type descend_000 = {
    <T>(fn: Morphism<T, Ordered>): descend_100<T>;
    <T>(_fn: PH, a: T): descend_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): descend_110<T>;
    <T>(_fn: PH, _a: PH, b: T): descend_001<T>;
    <T>(_fn: PH, a: T, b: T): descend_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): descend_101<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): descend_111;
};
type descend_100<T> = {
    (a: T): descend_110<T>;
    (_a: PH, b: T): descend_101<T>;
    (a: T, b: T): descend_111;
};
type descend_010<T> = {
    (fn: Morphism<T, Ordered>): descend_110<T>;
    (_fn: PH, b: T): descend_011<T>;
    (fn: Morphism<T, Ordered>, b: T): descend_111;
};
type descend_110<T> = {
    (b: T): descend_111;
};
type descend_001<T> = {
    (fn: Morphism<T, Ordered>): descend_101<T>;
    (_fn: PH, a: T): descend_011<T>;
    (fn: Morphism<T, Ordered>, a: T): descend_111;
};
type descend_101<T> = {
    (a: T): descend_111;
};
type descend_011<T> = {
    (fn: Morphism<T, Ordered>): descend_111;
};
type descend_111 = number;
export = descend;
