import {Transformer} from '../ramda/dist/src/$types';
import * as R_into from '../ramda/dist/src/into';

declare const object: object;
declare const str_obj_transformer: Transformer<string, object, object>;
declare const str_obj_transformer_to_obj_str_to_obj: (
  x: Transformer<string, object, object>,
) => (x: object, y: string) => object;

declare const string: string;
declare const num_str_transformer: Transformer<number, string, string>;
declare const num_str_transformer_to_str_num_to_str: (
  x: Transformer<number, string, string>,
) => (x: string, y: number) => string;

// @dts-jest:pass
R_into(object, str_obj_transformer_to_obj_str_to_obj);
// @dts-jest:pass
R_into(object)(str_obj_transformer_to_obj_str_to_obj);
// @dts-jest:pass
R_into(str_obj_transformer, str_obj_transformer_to_obj_str_to_obj);
// @dts-jest:pass
R_into(str_obj_transformer)(str_obj_transformer_to_obj_str_to_obj);

// @dts-jest:skip
R_into(string, num_str_transformer_to_str_num_to_str);
// @dts-jest:pass
R_into(string)(num_str_transformer_to_str_num_to_str);
// @dts-jest:skip
R_into(num_str_transformer, num_str_transformer_to_str_num_to_str);
// @dts-jest:pass
R_into(num_str_transformer)(num_str_transformer_to_str_num_to_str);
