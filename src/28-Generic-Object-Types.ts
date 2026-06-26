type Cover<T> = {
  front: T;
  back: T;
};

const BookCover: Cover<string> = {
  front: "book title",
  back: "Author biography",
};

//--------------------------------

type Product<T1, T2> = {
  name: T1;
  price: T2;
};

const product1: Product<string, number> = {
  name: "Chair",
  price: 20.98,
};

const product2: Product<string, string> = {
  name: "Cup of coffee",
  price: "FREE",
};
