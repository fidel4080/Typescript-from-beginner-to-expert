// random example for values
let age: number = 18;
const allowedToDrive = age >= 21 ? "Allowed" : "Not Allowed";
console.log(allowedToDrive);

//===============================================================================

// Conditional types allow you to choose a type based on whether another type satisfies a condition.

type name = string;
type price = number;

type Product<T> = T extends "ProductName" ? name : price;

let productName: Product<"ProductName">; // let productName: string
let productPrice: Product<"ProductType">; // let productPrice: number
