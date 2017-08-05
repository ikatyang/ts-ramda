import { Applicative, List, Morphism, Traversable } from "./$types";
declare const traverse: traverse_000;
type traverse_000 = {
    <T>(of: Morphism<T, Applicative<T>>): traverse_100<T>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_110<T, U>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T>): traverse_list_111<U>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "1">(): <T>(of: Morphism<T, Applicative<T>>) => traverse_100<T>;
    <$SEL extends "11">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_110<T, U>;
    <$SEL extends "111", $KIND extends "list">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "111", $KIND extends "traversable">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "111", $KIND extends "mixed">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_100<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_110<T, U>;
    <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T>): traverse_list_111<U>;
    <U>(fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "1">(): <U>(fn: Morphism<T, Applicative<U>>) => traverse_110<T, U>;
    <$SEL extends "11", $KIND extends "list">(): <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "11", $KIND extends "traversable">(): <U>(fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "11", $KIND extends "mixed">(): <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_010<T, U> = {
    (of: Morphism<T, Applicative<T>>): traverse_110<T, U>;
    (of: Morphism<T, Applicative<T>>, traversable: List<T>): traverse_list_111<U>;
    (of: Morphism<T, Applicative<T>>, traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_110<T, U>;
    <$SEL extends "11", $KIND extends "list">(): (of: Morphism<T, Applicative<T>>, traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "11", $KIND extends "traversable">(): (of: Morphism<T, Applicative<T>>, traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "11", $KIND extends "mixed">(): (of: Morphism<T, Applicative<T>>, traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    (of: Morphism<T, Applicative<T>>, traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_110<T, U> = {
    (traversable: List<T>): traverse_list_111<U>;
    (traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "1", $KIND extends "list">(): (traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "1", $KIND extends "traversable">(): (traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "1", $KIND extends "mixed">(): (traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    (traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_list_001<T> = {
    (of: Morphism<T, Applicative<T>>): traverse_list_101<T>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_list_101<T>;
    <$SEL extends "11">(): <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_list_111<U>;
    <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_list_111<U>;
};
type traverse_traversable_001<T> = {
    (of: Morphism<T, Applicative<T>>): traverse_traversable_101<T>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_traversable_101<T>;
    <$SEL extends "11">(): <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_traversable_111<U>;
    <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_traversable_111<U>;
};
type traverse_mixed_001<T> = {
    (of: Morphism<T, Applicative<T>>): traverse_mixed_101<T>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_mixed_101<T>;
    <$SEL extends "11">(): <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_mixed_111<U>;
    <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_mixed_111<U>;
};
type traverse_list_101<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_list_111<U>;
};
type traverse_traversable_101<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_traversable_111<U>;
};
type traverse_mixed_101<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_mixed_111<U>;
};
type traverse_list_011<T, U> = {
    (of: Morphism<T, Applicative<T>>): traverse_list_111<U>;
};
type traverse_traversable_011<T, U> = {
    (of: Morphism<T, Applicative<T>>): traverse_traversable_111<U>;
};
type traverse_mixed_011<T, U> = {
    (of: Morphism<T, Applicative<T>>): traverse_mixed_111<U>;
};
type traverse_list_111<U> = Applicative<U[]>;
type traverse_traversable_111<U> = Applicative<Traversable<U>>;
type traverse_mixed_111<U> = Applicative<U[]> | Applicative<Traversable<U>>;
export = traverse;
