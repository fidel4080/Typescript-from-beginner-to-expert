type Product = {
  name: string;
  price: number;
};

type ProductName = Product["name"];

let courseName: ProductName = "TS";
console.log(courseName);

//=============================================
//helps us to pass an object as a function parameter
type Product2 = {
  name: string;
  price: number;
  moreInfo: {
    released: boolean;
    beginnerFriendly: boolean;
    level: string;
  };
};

function displayProduct(
  name: string,
  price: number,
  moreInfo: Product2["moreInfo"],
): Product2 {
  return { name, price, moreInfo };
}

let courseDetails = displayProduct("TS", 3.99, {
  released: true,
  beginnerFriendly: true,
  level: "beginner - advanced",
});

console.log(courseDetails);

// can also be implemented with interfaces

interface Product3 {
  name: string;
  price: number;
  moreInfo: {
    released: boolean;
    beginnerFriendly: boolean;
    level: string;
  };
}

let course_Name: Product3["name"] = "JS";
let course_Price: Product3["price"] = 2.99;

// let course_info: Product3["moreInfo"] = {
//   released: true,
//   beginnerFriendly: true,
//   level: "beginner-advanced",
// };

let course_level: Product3["moreInfo"]["level"] = "intermediate";
