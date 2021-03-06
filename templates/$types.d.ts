// simple

export type Property = string | number | symbol;
export type Path = List<Property>;

// general

export type Constructor<T> = new (...args: any[]) => T;

export type Morphism<T, U> = (value: T) => U;
export type NestedMorphism<T, U, V> = (value: T) => (value: U) => V;
export type IndexedListMorphism<T, U> = (
  value: T,
  index: number,
  list: List<T>,
) => U;
export type IndexedObjectMorphism<T, U, K extends string> = (
  value: T,
  index: number,
  object: Record<K, T>,
) => U;
export type KeyedObjectMorphism<T, U, K extends string> = (
  value: T,
  key: K,
  object: Record<K, T>,
) => U;

export type Tap<T> = (value: T) => void;
export type KeyedObjectTap<T, U extends Dictionary<T>> = (
  value: T,
  key: string,
  object: U,
) => void;

export type Predicate<T> = Morphism<T, boolean>;
export type Comparator<T, U extends number | boolean> = (a: T, b: T) => U;

export type Variadic<R> = (...args: any[]) => R;
export type TypedVariadic<T, R> = (...args: T[]) => R;

export type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
export type ObjectMapper<T, U, K extends string> = (
  fn: Morphism<T, U>,
  object: Record<K, T>,
) => Record<K, U>;

export interface KeyValuePair<K, V> extends ArrayLike<K | V> {
  0: K;
  1: V;
}

export type List<T> = T[] | ArrayLike<T>;
export type NestedList<T> = List<T | List<T>>;

export interface Dictionary<T> {
  [key: string]: T;
}
export interface NestedDictionary<T> {
  [key: string]: T | NestedDictionary<T>;
}

export interface Ordered {
  valueOf(): string | number | boolean;
}

// ramda

export interface ManualLens<T, U> {
  _fake_lens_getter: T;
  _fake_lens_setter: U;
}

export interface PseudoLens<K extends string | number> {
  _fake_lens_prop: K;
}

export interface Transformer<T, U, R> {
  // https://github.com/cognitect-labs/transducers-js#transformer-protocol
  '@@transducer/init': () => U;
  '@@transducer/step': (accumulator: U, value: T) => U;
  '@@transducer/result': (accumulator: U) => R;
}

export interface Reduced<T> {
  '@@transducer/value': T;
  '@@transducer/reduced': true;
}

// ramda-dispatch

export interface Filterable<T> {
  filter(fn: Predicate<T>): Filterable<T>;
}

// https://github.com/fantasyland/fantasy-land

export interface Functor<T> {
  map<U>(fn: Morphism<T, U>): Functor<U>;
}

export interface Apply<T> extends Functor<T> {
  ap<U>(fn: Apply<Morphism<T, U>>): Apply<U>;
}

export interface Chain<T> extends Apply<T> {
  chain<U>(fn: Morphism<T, Chain<U>>): Chain<U>;
}

export interface Applicative<T> extends Apply<T> {
  of<U>(value: U): Applicative<U>;
}

export interface Foldable<T> {
  reduce<U>(fn: (accumulator: U, value: T) => U, initial: U): U;
}

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse<U, V>(
    fn: Morphism<T, Applicative<U>>,
    of: Morphism<V, Applicative<V>>,
  ): Applicative<Traversable<U>>;
}
