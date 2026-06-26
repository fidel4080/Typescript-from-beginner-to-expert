// combines all the declared

type ProductDetails = {
  id: number;
  category: string;
  name: string;
  price: number;
  stock: number;
};

type ProductDiscounts = {
  discount(): void;
};

type ProductSeasonalSales = {
  holidaySales(): void;
};

type ProductSubscription = {
  subscription(): void;
};

type ProductShipping = {
  shipping(): void;
};

// intersection of all types
type Product = ProductDetails &
  ProductDiscounts &
  ProductSeasonalSales &
  ProductShipping &
  ProductSubscription;

const chair: Product = {
  name: "chair",
  category: "hardware",
  id: 1001,
  price: 98,
  stock: 23,
  discount: () => {},
  subscription: () => {},
  holidaySales: () => {},
  shipping: () => {},
};
