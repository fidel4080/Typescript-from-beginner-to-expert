// type Course = {
//   name: String;
//   price: number;
// };

// type Product<T> = { [K: string]: T };

// function getCoursesInfo<T>(course: Product<T>) {
//   return course;
// }

// let courses = getCoursesInfo<Course>({
//   course1: { name: "TS", price: 9.99 },
//   course2: { name: "JS", price: 10.99 },
// });

// console.log(courses);

//===================================mapped type==========================

type Course = {
  name: string;
  price: number;
};

type Product = { [course in "TS" | "JS"]: Course };

function getCoursesInfo(course: Product) {
  return course;
}

let courses = getCoursesInfo({
  TS: { name: "TS", price: 9.99 },
  JS: { name: "JS", price: 10.99 },
});

console.log(courses);
