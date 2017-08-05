import { Dictionary } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const whereEq: whereEq_00;
type whereEq_00 = {
    <T>(spec: Dictionary<T>): whereEq_10<T>;
    <T>(_spec: PH, object: Dictionary<T>): whereEq_01<T>;
    <T>(spec: Dictionary<T>, object: Dictionary<T>): whereEq_11;
};
type whereEq_10<T> = {
    (object: Dictionary<T>): whereEq_11;
};
type whereEq_01<T> = {
    (spec: Dictionary<T>): whereEq_11;
};
type whereEq_11 = boolean;
export = whereEq;
