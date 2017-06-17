import {CurriedFunction3} from 'ramda/src/$curried-functions';
import * as R___ from 'ramda/src/__';

declare const boolean: boolean;
declare const number: number;
declare const string: string;
declare const curried_string_boolean_number_to_object: CurriedFunction3<string, boolean, number, object>;

// @dts-jest
curried_string_boolean_number_to_object(string)(boolean)(number);
// @dts-jest
curried_string_boolean_number_to_object(string, boolean, number);
// @dts-jest
curried_string_boolean_number_to_object(R___, boolean, number);
// @dts-jest
curried_string_boolean_number_to_object(string, R___, number);
// @dts-jest
curried_string_boolean_number_to_object(R___, R___, number);
// @dts-jest
curried_string_boolean_number_to_object(string)(R___, number);
