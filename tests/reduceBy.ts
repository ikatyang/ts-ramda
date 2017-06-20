import * as R_reduceBy from 'ramda/src/reduceBy';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;
declare const number_to_string: (x: number) => string;
declare const number_to_a_b_c: (x: number) => 'a' | 'b' | 'c';

// @dts-jest
R_reduceBy(object_number_to_object, object, number_to_string);
// @dts-jest
R_reduceBy(object_number_to_object)(object)(number_to_string)(number_array);
// @dts-jest
R_reduceBy(object_number_to_object, object, number_to_string, number_array);

// @dts-jest
R_reduceBy(object_number_to_object, object, number_to_a_b_c);
// @dts-jest
R_reduceBy(object_number_to_object)(object)(number_to_a_b_c)(number_array);
// @dts-jest
R_reduceBy(object_number_to_object, object, number_to_a_b_c, number_array);
