import { Lens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const view: view_00;
type view_00 = {
    <T, U>(lens: Lens<T, U>): view_10<T, U>;
    <U>(_lens: PH, target: U): view_01<U>;
    <T, U>(lens: Lens<T, U>, target: U): view_11<T>;
};
type view_10<T, U> = {
    (target: U): view_11<T>;
};
type view_01<U> = {
    <T>(lens: Lens<T, U>): view_11<T>;
};
type view_11<T> = T;
export = view;
