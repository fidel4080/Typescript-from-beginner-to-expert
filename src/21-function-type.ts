let productName: Function; // type annotate the variable to a function

productName = (product: string): string => {
  return product;
};

console.log(productName("Shoes"));

// OR -----------------------------------------------

let getName: (name: string) => string;

getName = (name) => {
  return name;
};

console.log(getName("Fidel"));

//---------------------------------------------------

let addNumbers: (a: number, b: number) => number;

addNumbers = (a, b) => {
  return a + b;
};

console.log(addNumbers(20, 38));
