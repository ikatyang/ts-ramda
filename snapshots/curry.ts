import * as R_curry from '../ramda/dist/src/curry';

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

// @dts-jest:pass -> CurriedFunction1<string, object>
R_curry(string_to_object);
// @dts-jest:pass -> CurriedFunction2<number, boolean, string>
R_curry(number_boolean_to_string);
// @dts-jest:pass -> () => boolean
R_curry(number_args_to_boolean);
// @dts-jest:pass -> (...args: any[]) => number
R_curry(seven_string_to_number);
