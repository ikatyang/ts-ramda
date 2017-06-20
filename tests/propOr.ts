import {Placeholder} from 'ramda/src/$placeholder';
import * as R_propOr from 'ramda/src/propOr';

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;
declare const defaults: 'defaults';

// @dts-jest:pass
R_propOr(defaults, 'a');
// @dts-jest:pass
R_propOr(defaults, 'a')(a_b_number_record);

// @dts-jest:pass
R_propOr(defaults, 'a', a_b_number_record);

// @dts-jest:pass
R_propOr(defaults, placeholder, a_b_number_record);
// @dts-jest:pass
R_propOr(defaults, placeholder, a_b_number_record)('a');
