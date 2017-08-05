import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const nth: nth_00;
type nth_00 = {
    (n: number): nth_10;
    (_n: PH, str: string): nth_string_01;
    <T extends List<any>>(_n: PH, list: T): nth_general_01<T>;
    (n: number, str: string): nth_string_11;
    <T extends List<any>>(n: number, list: T): nth_general_11<T>;
};
type nth_10 = {
    (str: string): nth_string_11;
    <T extends List<any>>(list: T): nth_general_11<T>;
};
type nth_string_01 = {
    (n: number): nth_string_11;
};
type nth_general_01<T extends List<any>> = {
    (n: number): nth_general_11<T>;
};
type nth_string_11 = string;
type nth_general_11<T extends List<any>> = T[number] | undefined;
export = nth;
