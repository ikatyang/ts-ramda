import * as R_propIs from '../ramda/dist/src/propIs';

declare const object: object;

// @dts-jest:pass
R_propIs(Number)('a');
// @dts-jest:pass
R_propIs(Number, 'a');
// @dts-jest:pass
R_propIs(Number)('a')(object);
// @dts-jest:pass
R_propIs(Number, 'a', object);
