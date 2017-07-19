import {Path} from '../ramda/dist/src/$types';
import * as R_pathSatisfies from '../ramda/dist/src/pathSatisfies';

declare const string_to_boolean: (x: string) => boolean;
declare const path: Path;
declare const object: object;

// @dts-jest:pass -> (object: {}) => boolean
R_pathSatisfies(string_to_boolean, path);
// @dts-jest:pass -> boolean
R_pathSatisfies(string_to_boolean)(path)(object);
// @dts-jest:pass -> boolean
R_pathSatisfies(string_to_boolean, path, object);
