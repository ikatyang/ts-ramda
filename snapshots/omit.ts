import * as R_omit from '../ramda/dist/src/omit';

declare const object: object;
declare const string: string;

// @dts-jest:pass -> object
R_omit([string])(object);
// @dts-jest:pass -> object
R_omit([string], object);

// @dts-jest:pass -> Record<string, string>
R_omit([string])<Record<string, string>>(object);
// @dts-jest:pass -> Record<string, string>
R_omit<Record<string, string>>([string], object);