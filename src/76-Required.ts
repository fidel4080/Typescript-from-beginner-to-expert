/**
 * Make all properties in T required

type Required<T> = {
    [P in keyof T]-?: T[P];
};
 */

interface Product {
  name: string;
  price?: number;
  rating?: number;
  sales?: number;
}

type RequiredTYPE<Type> = {
  [Key in keyof Type]-?: Type[Key];
};

const onlineCourse: RequiredTYPE<Product> = {
  name: "TS Course",
  price: 10.98,
  rating: 4.9,
  sales: 1118,
}; // all the keys are required

const Free_course: Product = {
  name: "JS Course",
}; //  I can add the other properties in inteface Product if I want and there will be no error because they are optional
