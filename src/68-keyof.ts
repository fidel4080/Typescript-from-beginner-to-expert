const TsCourse = {
  name: "TS",
  price: 10.99,
};

type Product = typeof TsCourse;
type ProductKeys = keyof Product;
type ProductKeyTypes = Product[ProductKeys];

const JsCourse: Product = {
  name: "JS",
  price: 8.99,
};

function getCourseInfo<T, K extends keyof T>(course: T, info: K) {
  return course[info];
}

let courseName = getCourseInfo(TsCourse, "name");
let coursePrice = getCourseInfo(TsCourse, "price");
console.log(courseName, coursePrice); // TS 10.99
