import {Dictionary, KeyedObjectTap} from 'ramda/src/$types';
import * as R_fromPairs from 'ramda/src/fromPairs';

declare const number_object_tuple: [number, object];

// @dts-jest
R_fromPairs([number_object_tuple]);