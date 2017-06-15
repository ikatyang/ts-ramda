import {Variadic} from 'ramda/src/$types';
import * as R_bind from 'ramda/src/bind';

declare const object: object;
declare const string_number_symbol_to_boolean: (a: string, b: number, c: symbol) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:show
R_bind(string_number_symbol_to_boolean);
// @dts-jest:show
R_bind(string_number_symbol_to_boolean, object);

// @dts-jest:show
R_bind(object_variadic);
// @dts-jest:show
R_bind(object_variadic, object);
