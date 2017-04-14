/// <reference path="./internal/curried-functions.d.ts" />

declare namespace R {

  /**
   * Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.
   *
   * This function is known as `const`, `constant`, or `K` (for K combinator) in other languages and libraries.
   */
  function always<T>(value: T): () => T;

}