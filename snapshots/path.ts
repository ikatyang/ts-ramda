import { Path } from '../ramda/dist/src/$types';
import * as R_path from '../ramda/dist/src/path';

declare const path: Path;
declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass -> <T>(object: {}) => T | undefined
R_path(path);

// @dts-jest:pass -> {} | undefined
R_path(path)(object);
// @dts-jest:pass -> {} | undefined
R_path(path, object);

// @dts-jest:pass -> {} | undefined
R_path(['a', 'b', 'c'])(a_1_b_2_c_3);
// @dts-jest:pass -> {} | undefined
R_path(['a', 'b', 'c'], a_1_b_2_c_3);
