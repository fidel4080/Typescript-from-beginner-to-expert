type mixedTypes =
  | "Hi"
  | ["JS", "TS"]
  | 668
  | { name: "TS"; price: number }
  | "Hey"
  | 13
  | { name: "JS"; price: number }
  | [12, 13, 14, 15];

type notStrings = Exclude<mixedTypes, string>; // returns all other types except strings
type notArrNum = Exclude<mixedTypes, number[]>;
