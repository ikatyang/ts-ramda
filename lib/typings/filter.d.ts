/// <reference path="./internal/curried-functions.d.ts" />
/// <reference path="./internal/generals.d.ts" />

declare namespace R {

  /**
   * Takes a predicate and a "filterable", and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate.
   *
   * Dispatches to the `filter` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   */
  function filter<T>(fn: Predicate<T>, list: List<T>): T[];
  function filter<T>(_fn: PH, list: List<T>): {
    (fn: Predicate<T>): T[];
  };
  function filter<T>(fn: Predicate<T>): {
    (list: List<T>): T[];
  };
  function filter<T>(fn: Predicate<T>, list: List<T>): T[];

}
