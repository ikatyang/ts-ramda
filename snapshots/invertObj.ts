import * as R_invertObj from '../ramda/dist/src/invertObj';

declare const number_object_record: {[number: number]: object};

// @dts-jest:pass -> Dictionary<string>
R_invertObj(number_object_record);
