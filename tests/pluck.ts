import {Placeholder} from '../ramda/dist/src/$placeholder';
import * as R_pluck from '../ramda/dist/src/pluck';

declare const placeholder: Placeholder;
declare const a_number_record: Record<'a', number>;
declare const string_array: string[];

// @dts-jest:pass
R_pluck('a');
// @dts-jest:pass
R_pluck('a')([a_number_record, a_number_record]);

// @dts-jest:pass
R_pluck('a', [a_number_record, a_number_record]);

// @dts-jest:pass
R_pluck(placeholder, [a_number_record, a_number_record]);
// @dts-jest:pass
R_pluck(placeholder, [a_number_record, a_number_record])('a');

// @dts-jest:pass
R_pluck(0, [string_array]);
