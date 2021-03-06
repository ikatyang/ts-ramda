import * as R_curryN from '../ramda/dist/src/curryN';

declare const string_to_object: (x: string) => object;
declare const number_boolean_to_string: (x: number, y: boolean) => string;
declare const number_args_to_boolean: (...args: number[]) => boolean;
declare const seven_string_to_number: (
  v1: string,
  v2: string,
  v3: string,
  v4: string,
  v5: string,
  v6: string,
  v7: string,
) => number;

// @dts-jest:pass
R_curryN(0, string_to_object);
// @dts-jest:pass
R_curryN(1, number_boolean_to_string);
// @dts-jest:pass
R_curryN(4, number_args_to_boolean);
// @dts-jest:pass
R_curryN(7, seven_string_to_number);
