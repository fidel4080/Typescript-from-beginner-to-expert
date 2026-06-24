function holidaySales(
  product: string,
  sales: number,
  tax: number,
  discount: number,
): number {
  let price: number = 0;

  if (product === "sunglasses") {
    price = 29;
  } else if (product === "hats") {
    price = 19;
  } else if (product === "shoes") {
    price = 59;
  }

  let totalSalesForIndividualProducts: number = price * sales;

  return (
    totalSalesForIndividualProducts -
    tax * totalSalesForIndividualProducts -
    discount * totalSalesForIndividualProducts
  );
}

const sunglassesPrice: number = holidaySales("sunglasses", 10, 0.16, 0.12);
const hatPrice: number = holidaySales("hats", 30, 0.16, 0.12);

console.log(`The total price for sunglasses is $${hatPrice}`);

// function expression
let holidaySales1 = function (
  product: string,
  sales: number,
  tax: number,
  discount: number,
): number {
  let price: number = 0;

  if (product === "sunglasses") {
    price = 29;
  } else if (product === "hats") {
    price = 19;
  } else if (product === "shoes") {
    price = 59;
  }

  let totalSalesForIndividualProducts: number = price * sales;

  return (
    totalSalesForIndividualProducts -
    tax * totalSalesForIndividualProducts -
    discount * totalSalesForIndividualProducts
  );
};
