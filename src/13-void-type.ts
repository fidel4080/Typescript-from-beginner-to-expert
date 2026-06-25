// void is when a function does not return anything

let productCategory: string = "";

let shoppingCart = (category: string): void => {
  category = productCategory;
};

console.log(shoppingCart("shirt")); // returns undefined
