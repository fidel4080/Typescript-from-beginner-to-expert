let discount: unknown = 25;

let otherNum: number = typeof discount === "number" ? discount : 10;

console.log(otherNum);

//===================================================
// Type any and unknown are assignable to one another
let courseName: any = "TS";

let coursePrice: number = courseName;

console.log(coursePrice);

//===================================================

let personAge: unknown = 25;
let person2Aage: any = personAge;

//====================================================

// NOT RECOMMENDED
// let productName: unknown = "TS";
// let productPrice: any = productName;
// let price: number = productPrice;
// console.log(typeof price, price);

// RECOMMENDED

let productName: any = "TS";
let productPrice: unknown = productName;
let price: number = typeof productPrice === "number" ? productPrice : 9.99;
console.log(typeof price, price);

// unknown absorbs the union type

let num1: unknown | number = 25;
// let num2: number = num1; // Type 'unknown' is not assignable to type 'number'

// unknown will be absorbed by the intersection

let num3: unknown & number = 35;
let num4: number = num3; // no error
