type mixedTypes =
  | "Hi"
  | ["JS", "TS"]
  | 668
  | { name: "TS"; price: number }
  | "Hey"
  | 13
  | { name: "JS"; price: number }
  | [12, 13, 14, 15];

type Strings = Extract<mixedTypes, string>; // "Hi" | "Hey"

type numbers = Extract<mixedTypes, number>; // 668 | 13

type product = Extract<mixedTypes, { name: "TS" }>; /*
type product = {
    name: "TS";
    price: number;
} */

type arr1 = Extract<mixedTypes, number[]>; // type arr1 = [12, 13, 14, 15]
type arr2 = Extract<mixedTypes, string[]>; // type arr2 = ["JS", "TS"]
