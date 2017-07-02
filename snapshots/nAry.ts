import {Variadic} from '../ramda/dist/src/$types';
import * as R_nAry from '../ramda/dist/src/nAry';

declare const number: number;
declare const string_number_symbol_to_boolean: (a: string, b: number, c: symbol) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:pass -> (v1: string) => boolean
R_nAry(1, string_number_symbol_to_boolean);
// @dts-jest:pass -> (v1: any) => object
R_nAry(1, object_variadic);

// @dts-jest:pass -> Variadic<boolean>
R_nAry(number, string_number_symbol_to_boolean);
// @dts-jest:pass -> Variadic<object>
R_nAry(number, object_variadic);
