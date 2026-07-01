type Product = {
  name: "TS";
  price: number;
};

function getCourseName(course: Product) {
  return course.name;
}

const myCourse = {
  name: "TS" as const, // the value itself becomes deeply readonly and literal types are preserved.
  price: 10.99,
};

console.log(getCourseName(myCourse));
