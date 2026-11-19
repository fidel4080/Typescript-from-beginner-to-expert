/**
 * Make all properties in T readonly

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
 */

type Product = {
  name: string;
  price: number;
  rating: number;
  sales: number;
};

type readonlyTYPE<TYPE> = {
  readonly [Key in keyof TYPE]: TYPE[Key];
};

const MyProduct: readonlyTYPE<Product> = {
  name: "TS Bootcamp",
  price: 10.99,
  rating: 4.5,
  sales: 189,
};

// MyProduct.name = "JS"   !!! ERROR BECAUSE IT IS READONLY
