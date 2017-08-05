declare const type: type_0;
type type_0 = {
    (value: null): type_null_1;
    (value: undefined): type_undefined_1;
    (value: boolean): type_boolean_1;
    (value: number): type_number_1;
    (value: string): type_string_1;
    (value: symbol): type_symbol_1;
    (value: any): type_general_1;
};
type type_null_1 = "Null";
type type_undefined_1 = "Undefined";
type type_boolean_1 = "Boolean";
type type_number_1 = "Number";
type type_string_1 = "String";
type type_symbol_1 = "Symbol";
type type_general_1 = string;
export = type;
