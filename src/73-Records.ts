/**
 * Construct a type with a set of properties K of type T

type Record<K extends keyof any, T> = {
    [P in K]: T;
};
*/

type Course = {
  name: string;
  price: number;
};

// Original mapped type
// type Product = { [course in "TS" | "JS"]: Course };

type recordTYPE<keyType extends string, valueType> = {
  [key in keyType]: valueType;
};

function getCoursesInfo<U extends string, T>(course: recordTYPE<U, T>) {
  return course;
}

let courses = getCoursesInfo({
  TS: { name: "TS", price: 9.99 },
  JS: { name: "JS", price: 10.99 },
  Python: { name: "PY", price: 11.99 },
});

console.log(courses);
