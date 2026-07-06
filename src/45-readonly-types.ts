// makes the properties of an object readonly

type Product = {
  name: string;
  price: number;
};

const course: Readonly<Product> = {
  name: "TS Course",
  price: 10.99,
};

//==============================================
// can also be written as,

// type name  = Readonly<{}>

type Product2 = Readonly<{
  name: string;
  price: number;
}>;

const course2: Product2 = {
  name: "JS Course",
  price: 9.99,
};
