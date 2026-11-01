// typeof can also be used in type query

const TsCourse = {
  name: "TS",
  price: 10.99,
};

type Product = typeof TsCourse;

const JsCourse: Product = {
  name: "JS",
  price: 8.99,
};
