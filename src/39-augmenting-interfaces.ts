interface Product {
  name: string;
  price: number;
}

const course: Product = {
  name: "TS",
  price: 10.999,
  rating: 98,
  sales: 1281,
};

interface Product {
  // price: number; // can have same properting with same name and same type but not different type
  rating: number;
  sales: number;
}
