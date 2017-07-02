import {Path} from '../ramda/dist/src/$types';
import * as R_pathOr from '../ramda/dist/src/pathOr';

declare const path: Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass -> <U>(object: any) => number | U
R_pathOr(number, path);

// @dts-jest:pass -> number | {}
R_pathOr(number)(path)(object);
// @dts-jest:pass -> number | {}
R_pathOr(number, path, object);

// @dts-jest:pass -> string | number
R_pathOr(number)(path)<string>(object);
// @dts-jest:pass -> string | number
R_pathOr<number, string>(number, path, object);
