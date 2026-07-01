// 1. typeof

function getProductPrice(product: number | string): number {
  if (typeof product === "string") {
    return parseInt(product);
  }

  return product;
}

console.log(getProductPrice("234"));

// 2. instanceof

let newDate = new Date();

if (newDate instanceof Date) {
  console.log("success");
} else {
  console.log("failure");
}

// 3. specific value check

let someValue = null;

if (someValue === null) {
  console.log("success");
} else {
  console.log("failure");
}

// 4. Truthy/ falsy check

let someValue2 = true;

if (!someValue2) {
  console.log("success");
} else {
  console.log("failure");
}

// 5. Built-in methods

let someArr = [1, 2, 3, 4, 5];

if (Array.isArray(someArr)) {
  console.log("success");
} else {
  console.log("failure");
}

// 6. Property presence check

let someObject = { name: "Fidel" };

if ("price" in someObject) {
  console.log("success");
} else {
  console.log("failure");
}
