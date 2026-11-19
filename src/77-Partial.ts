/**
 * Make all properties in T optional
 
type Partial<T> = {
    [P in keyof T]?: T[P];
};
 */

interface Product {
  name: string;
  price: number;
  rating: number;
  sales: number;
}

type PartialTYPE<Type> = {
  [Key in keyof Type]+?: Type[Key]; // the '+' sign in +? is optional
};

const onlineCourse: Product = {
  name: "TS Course",
  price: 10.98,
  rating: 4.9,
  sales: 1118,
};

const Free_course: PartialTYPE<Product> = {
  name: "JS Course",
}; // makes all keys optional
