//static properties and methods only belong to the class itself and not to individual objects (instances) created from the class

class Product {
  static isNew: boolean = false;

  static discount(): string {
    if (Product.isNew) {
      return "5% off";
    }

    return "10% off";
  }
}

const product = new Product();
// console.log(product.isNew); // Error

console.log(Product.isNew); // true
console.log(Product.discount());
