import { Placeholder as PH } from "./$placeholder";
declare const test: test_00;
type test_00 = {
    (pattern: RegExp): test_10;
    (_pattern: PH, str: string): test_01;
    <$SEL extends "1">(): (pattern: RegExp) => test_10;
    <$SEL extends "01">(): (_pattern: PH, str: string) => test_01;
    <$SEL extends "11">(): (pattern: RegExp, str: string) => test_11;
    (pattern: RegExp, str: string): test_11;
};
type test_10 = {
    (str: string): test_11;
};
type test_01 = {
    (pattern: RegExp): test_11;
};
type test_11 = boolean;
export = test;
