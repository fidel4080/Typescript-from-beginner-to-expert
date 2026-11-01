class Product<T1, T2> {
  public name: T1;
  public price: T2;

  constructor(name: T1, price: T2) {
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product<string, number>("TS Bootcamp", 45);
const product2 = new Product<string, string>("JS Bootcamp", "free");

console.log(product1);
console.log(product2);
