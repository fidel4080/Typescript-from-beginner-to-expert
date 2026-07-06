// Makes the properties of an object optional

type Product = {
  name: string;
  price: number;
};

const MyProduct: Partial<Product> = {
  name: "product1",
};
