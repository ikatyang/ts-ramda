import * as R_lift from '../ramda/dist/src/lift';

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

// @dts-jest:pass -> CurriedFunction1<string[] | ArrayLike<string>, object[]>
R_lift(string_to_object);
// @dts-jest:pass -> CurriedFunction2<number[] | ArrayLike<number>, boolean[] | ArrayLike<boolean>, string[]>
R_lift(number_boolean_to_string);
// @dts-jest:pass -> () => boolean[]
R_lift(number_args_to_boolean);
// @dts-jest:pass -> (...args: any[]) => number[]
R_lift(seven_string_to_number);
