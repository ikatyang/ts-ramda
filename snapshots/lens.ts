import * as R_lens from '../ramda/dist/src/lens';

declare const object_to_string: (x: object) => string;
declare const string_object_to_object: (x: string, y: object) => object;

// @dts-jest:pass -> (setter: (focus: string, target: object) => object) => Lens<string, object>
R_lens(object_to_string);
// @dts-jest:pass -> Lens<string, object>
R_lens(object_to_string)(string_object_to_object);
// @dts-jest:pass -> Lens<string, object>
R_lens(object_to_string, string_object_to_object);
