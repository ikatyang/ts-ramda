import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pathOr: pathOr_000;
type pathOr_000 = {
    (defaults: any): pathOr_100;
    (_defaults: PH, path: Path): pathOr_010;
    (defaults: any, path: Path): pathOr_110;
    (_defaults: PH, _path: PH, object: {}): pathOr_001;
    (_defaults: PH, path: Path, object: {}): pathOr_011;
    (defaults: any, _path: PH, object: {}): pathOr_101;
    (defaults: any, path: Path, object: {}): pathOr_111;
};
type pathOr_100 = {
    (path: Path): pathOr_110;
    (_path: PH, object: {}): pathOr_101;
    (path: Path, object: {}): pathOr_111;
};
type pathOr_010 = {
    (defaults: any): pathOr_110;
    (_defaults: PH, object: {}): pathOr_011;
    (defaults: any, object: {}): pathOr_111;
};
type pathOr_110 = {
    (object: {}): pathOr_111;
};
type pathOr_001 = {
    (defaults: any): pathOr_101;
    (_defaults: PH, path: Path): pathOr_011;
    (defaults: any, path: Path): pathOr_111;
};
type pathOr_101 = {
    (path: Path): pathOr_111;
};
type pathOr_011 = {
    (defaults: any): pathOr_111;
};
type pathOr_111 = any;
export = pathOr;
