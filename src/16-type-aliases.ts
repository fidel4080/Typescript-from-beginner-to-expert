// type aliases lets you create custom names for your types

// 1. Numbers
type CourseDiscount = 25 | 35 | 45 | 75;
let courseDiscount: CourseDiscount = 25; //can only accept 25 / 35 / 45/ 75
console.log(courseDiscount);

// OR
type age = number;
let personAge: age = 25; //can accept all numbers
console.log(personAge);

// 2. strings
type name = "fidel";
let person: name = "fidel"; //can only accept "fidel"
console.log(person);

// 3. Objects
type myCourses = {
  name: string;
  price: number;
};

const TScourse: myCourses = {
  name: "TS Bootcamp",
  price: 25,
};

const JSCourse: myCourses = {
  name: "JS Bootcamp",
  price: 98,
};
