import * as R_reduceWhile from '../ramda/dist/src/reduceWhile';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;
declare const object_number_to_boolean: (acc: object, val: number) => boolean;

// @dts-jest:pass -> (values: number[] | ArrayLike<number>) => object
R_reduceWhile(object_number_to_boolean, object_number_to_object, object);
// @dts-jest:pass -> object
R_reduceWhile(object_number_to_boolean)(object_number_to_object)(object)(number_array);
// @dts-jest:pass -> object
R_reduceWhile(object_number_to_boolean, object_number_to_object, object, number_array);
