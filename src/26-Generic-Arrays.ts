//Generics in TypeScript allow you to create reusable components (functions, classes, interfaces, etc.) that can work with different types while still preserving type safety.

let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ["Hello", "Hi"];

let regularArr: number[] = numbers; //you can assign generic arrays to regular arrays

let boolArr: Array<boolean> = [true, false];

let nestedArr: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];

let mixedArr: Array<number | string> = [1, 3, "Hello"];
