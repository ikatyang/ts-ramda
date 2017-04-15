/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * ap applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the second argument, if present. Also treats curried functions as applicatives.
   */
  function ap<T, U>(fns: List<Morphism<T, U>>, list: List<T>): List<U>;
  function ap<T>(_fns: PH, list: List<T>): {
    <U>(fns: List<Morphism<T, U>>): List<U>;
  };
  function ap<T, U>(fns: List<Morphism<T, U>>): {
    (list: List<T>): List<U>;
  };
  function ap<T, U>(fns: List<Morphism<T, U>>, list: List<T>): List<U>;

  function ap<T, U>(fns: List<Morphism<T, U>>, appable: Appable<T>): Appable<U>;
  function ap<T>(_fns: PH, appable: Appable<T>): {
    <U>(fns: List<Morphism<T, U>>): Appable<U>;
  };
  function ap<T, U>(fns: List<Morphism<T, U>>): {
    (appable: Appable<T>): Appable<U>;
  };
  function ap<T, U>(fns: List<Morphism<T, U>>, appable: Appable<T>): Appable<U>;

}
