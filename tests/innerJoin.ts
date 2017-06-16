import * as R_innerJoin from 'ramda/src/innerJoin';

declare const object_number_to_boolean: (x: object, y: number) => boolean;
declare const object_array: object[];
declare const number_array: number[];

// @dts-jest
R_innerJoin(object_number_to_boolean, object_array);
// @dts-jest
R_innerJoin(object_number_to_boolean, object_array, number_array);
// @dts-jest
R_innerJoin(object_number_to_boolean)(object_array)(number_array);
