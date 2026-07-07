// type DigitalProduct = {
//   name: string;
//   price: number;
//   sales: number;
// };
// type Product = DigitalProduct & {
//   availability: string;
//   category: string;
// };

// type Course = DigitalProduct & {
//   released: boolean;
//   rating: number;
// };

// type OnlineCourse = Product | Course;

// const MyCourse: OnlineCourse = {
//   name: "TS Course",
//   price: 4.99,
//   sales: 899,
//   released: true,
//   rating: 4.8,

//   availability: "Available",
//   category: "Web-Dev",
// };

// Another syntax

type DigitalProduct = {
  name: string;
  price: number;
  sales: number;
} & (
  | {
      availability: string;
      category: string;
    }
  | {
      released: boolean;
      rating: number;
    }
);

const MyCourse: DigitalProduct = {
  name: "TS Course",
  price: 4.99,
  sales: 899,
  released: true,
  rating: 4.8,

  availability: "Available",
  category: "Web-Dev",
};

console.log(MyCourse);
