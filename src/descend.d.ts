import { Morphism, Ordered } from "./$types";
declare const descend: descend_000;
type descend_000 = {
    <T>(fn: Morphism<T, Ordered>): descend_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): descend_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => descend_100<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => descend_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => descend_111;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): descend_111;
};
type descend_100<T> = {
    (a: T): descend_110<T>;
    <$SEL extends "1">(): (a: T) => descend_110<T>;
    <$SEL extends "11">(): (a: T, b: T) => descend_111;
    (a: T, b: T): descend_111;
};
type descend_010<T> = {
    (fn: Morphism<T, Ordered>): descend_110<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => descend_110<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, b: T) => descend_111;
    (fn: Morphism<T, Ordered>, b: T): descend_111;
};
type descend_110<T> = {
    (b: T): descend_111;
};
type descend_001<T> = {
    (fn: Morphism<T, Ordered>): descend_101<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => descend_101<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => descend_111;
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
