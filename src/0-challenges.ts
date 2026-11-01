/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create a function that returns the length of a string array or undefined if the argument is undefined
*/

// function getArrayLength(myArray: string[] | undefined): number | undefined {
//   if (myArray === undefined) {
//     return undefined;
//   } else {
//     return myArray.length;
//   }
// }

// console.log(getArrayLength(["fidel", "ts"]));

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create a function that accepts either a number or undefined. If a number is passed then it returns the number otherwise it returns 1
*/

// function myFunc(arg: number | undefined): number {
//   if (arg === undefined) {
//     return 1;
//   } else {
//     return arg;
//   }
// }

// console.log(myFunc(undefined));

/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
What value will the status property log?
*/

// type User1 = {
//   online: true;
//   status: string;
// };

// type User2 = {
//   online: false;
// };

// type User = User1 | User2;

// const userInfo: User = {
//   online: false,
//   status: "Something Cool",
// };

// console.log(userInfo.status);   // Error: Property 'status' does not exist on type 'User'.
//                                        // Property 'status' does not exist on type 'User2'.

/* *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
What will the onlineCourse object log? 
*/

// interface Product {
//   name: string;
// }

// interface Product {
//   isPublished: boolean;
// }

// let onlineCourse: Product = {
//   name: "TS Bootcamp",
//   isPublished: true,
// };

// console.log(onlineCourse); // { name: 'TS Bootcamp', isPublished: true }

/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
Create a product class with 2 properties, name and number of students. Add a method to this class 
that would return the string “Best Seller” if a course has equal to or more than 3000 students, otherwise, it should print “Not so much”
*/

// class Product {
//   public name: string;
//   public numberOfStudents: number;

//   constructor(name: string, numberOfStudents: number) {
//     this.name = name;
//     this.numberOfStudents = numberOfStudents;
//   }

//   getInfo(): string {
//     if (this.numberOfStudents >= 3000) {
//       return "Best Seller";
//     }

//     return "Not so much";
//   }
// }

// const product1 = new Product("TS Bootcamp", 5000);
// console.log(product1.getInfo());

/* *-*-*-*-*-*-*-*-*-*-* Challenge 9 ------------------
What will the following function invocations result in?
*/

// function add(price: number, sales?: number) {
//   return price * (sales ?? 1);
// }
// console.log(add(9.99, 4)); // 39.96
// console.log(add(10.99)); // 10.99

/* *-*-*-*-*-*-*-*-*-*-* Challenge 10 ------------------
What will the function invocation result in?
*/

// type SucceededAPICall = {
//   response: "success";
//   value: number;
// };

// type FailedAPICall = {
//   response: "failure";
//   reason: string;
// };

// type APICall = SucceededAPICall | FailedAPICall;

// function APICallStatus(s: string): APICall {
//   const n: number = Number(s);
//   if (Number.isNaN(n)) {
//     return {
//       response: "failure",
//       reason: "string cannot be converted into a number",
//     };
//   } else {
//     return { response: "success", value: n };
//   }
// }

// console.log(APICallStatus("hey"));
// console.log(APICallStatus("10"));

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 12 ------------------
What will the console log?
*/

// type SucceededAPICall = {
//   response: "success";
//   value: number;
// };

// type FailedAPICall = {
//   response: "failure";
//   reason: string;
// };

// type APICall = SucceededAPICall | FailedAPICall;

// function APICallStatus(s: string): APICall {
//   const n: number = Number(s);
//   if (Number.isNaN(n)) {
//     return {
//       response: "failure",
//       reason: "the string passed cannot be converted into a number",
//     };
//   } else {
//     return { response: "success", value: n };
//   }
// }

// let apiCallResult = APICallStatus("10");
// console.log(
//   apiCallResult.response === "success" ? apiCallResult.value : undefined,
// ); // return value which is 10

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 13 ------------------
Create a Product class with a name property and a holidaySales method that return true. 
Then create an interface called ProductInfo that extends the class that includes a price property of type number. 
Finally create an object from the interface and log the object
*/

// class Product {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   holidaySales(): boolean {
//     return true;
//   }
// }

// interface ProductInfo extends Product {
//   price: number;
// }

// const product: ProductInfo = {
//   name: "TS Bootcamp",
//   holidaySales: () => true,
//   price: 10.99,
// };

// console.log(product);

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 14 ------------------
What will the course variable log?
*/

// interface Product {
//   name: string;
// }

// class TSCourse implements Product {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// let course = new TSCourse("TS Bootcamp");
// console.log(course); // TSCourse { name: 'TS Bootcamp' }

// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
