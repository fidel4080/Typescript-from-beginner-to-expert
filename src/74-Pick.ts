/**
 * From T, pick a set of properties whose keys are in the union K

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
**/

interface Product {
  name: string;
  price: number;
  rating: number;
  sales: number;
}

type pickTYPE<Type, KeyTYPE extends keyof Type> = {
  [Key in KeyTYPE]: Type[Key];
};

const Product1: pickTYPE<Product, "name" | "price"> = {
  name: "TS Course",
  price: 9.9,
};

const product1Rating: pickTYPE<Product, "name" | "rating"> = {
  name: Product1.name,
  rating: 4.9,
};

console.log({ Product1 });
console.log({ product1Rating });
