import * as R_minBy from '../ramda/dist/src/minBy';

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest:pass -> (b: object) => object
R_minBy(object_to_number, object);
// @dts-jest:pass -> object
R_minBy(object_to_number)(object)(object);
// @dts-jest:pass -> object
R_minBy(object_to_number, object, object);
