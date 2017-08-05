import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const eqProps: eqProps_000;
type eqProps_000 = {
    (property: Property): eqProps_100;
    <T>(_property: PH, a: T): eqProps_010<T>;
    <T>(property: Property, a: T): eqProps_110<T>;
    <T>(_property: PH, _a: PH, b: T): eqProps_001<T>;
    <T>(_property: PH, a: T, b: T): eqProps_011<T>;
    <T>(property: Property, _a: PH, b: T): eqProps_101<T>;
    <T>(property: Property, a: T, b: T): eqProps_111;
};
type eqProps_100 = {
    <T>(a: T): eqProps_110<T>;
    <T>(_a: PH, b: T): eqProps_101<T>;
    <T>(a: T, b: T): eqProps_111;
};
type eqProps_010<T> = {
    (property: Property): eqProps_110<T>;
    (_property: PH, b: T): eqProps_011<T>;
    (property: Property, b: T): eqProps_111;
};
type eqProps_110<T> = {
    (b: T): eqProps_111;
};
type eqProps_001<T> = {
    (property: Property): eqProps_101<T>;
    (_property: PH, a: T): eqProps_011<T>;
    (property: Property, a: T): eqProps_111;
};
type eqProps_101<T> = {
    (a: T): eqProps_111;
};
type eqProps_011<T> = {
    (property: Property): eqProps_111;
};
type eqProps_111 = boolean;
export = eqProps;
