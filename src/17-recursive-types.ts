// recursive type is a type that references itself
// can be used to create nested types e.g nested arrays and numbers

type NestedArray = number | NestedArray[];
let numbers: NestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
