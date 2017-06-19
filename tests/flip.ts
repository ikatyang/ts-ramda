import * as R_flip from 'ramda/src/flip';

declare const string_number_to_object: (x: string, y: number) => object;
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

// @dts-jest
R_flip(string_number_to_object);
// @dts-jest
R_flip(number_boolean_to_string);
// @dts-jest
R_flip(number_args_to_boolean);
// @dts-jest
R_flip(seven_string_to_number);
