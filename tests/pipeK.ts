import {Chain} from 'ramda/src/$types';
import * as R_pipeK from 'ramda/src/pipeK';

declare const chain_boolean_to_chain_number: (x: Chain<boolean>) => Chain<number>;
declare const chain_boolean_to_chain_string: (x: Chain<boolean>) => Chain<string>;
declare const chain_number_to_chain_boolean: (x: Chain<number>) => Chain<boolean>;
declare const chain_number_to_chain_string: (x: Chain<number>) => Chain<string>;
declare const chain_string_to_chain_boolean: (x: Chain<string>) => Chain<boolean>;
declare const chain_string_to_chain_number: (x: Chain<string>) => Chain<number>;

// @dts-jest
R_pipeK(chain_boolean_to_chain_number);
// @dts-jest
R_pipeK(
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest
R_pipeK(
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest
R_pipeK(
  chain_string_to_chain_number,
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest
R_pipeK(
  chain_boolean_to_chain_string,
  chain_string_to_chain_number,
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
// @dts-jest
R_pipeK(
  chain_number_to_chain_boolean,
  chain_boolean_to_chain_string,
  chain_string_to_chain_number,
  chain_number_to_chain_string,
  chain_string_to_chain_boolean,
  chain_boolean_to_chain_number,
);
