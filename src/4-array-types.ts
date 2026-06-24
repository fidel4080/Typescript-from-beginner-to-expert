// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of srings
let names: string[] = ["fidel", "castro", "omuya"];

// Array of numbers and strings
let mixedData: (string | number)[] = ["fidel", 1, "castro", 2];

// Array of numbers, string and boolean
let mixedData2: (string | number | boolean)[] = ["fidel", 1, "castro", 2, true];

//nested number array
let myNums: number[][] = [
  [1, 2],
  [2, 4],
];

// nested array of string and number
let mixedData3: (number | string)[][] = [
  ["fidel", 3],
  [4, 5],
  ["castro", "omuya"],
];

console.log(mixedData3);
