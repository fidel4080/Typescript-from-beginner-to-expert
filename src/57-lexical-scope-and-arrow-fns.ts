// a lexical scope is where a variable can be accessed by the child scope from the parent scope

class MyProduct {
  onlineCourse() {
    const productName: string = "TS BOOTCAMP";
    console.log(productName);

    console.log(this);

    setTimeout(() => {
      console.log(this); // this refers to the parent object MyProduct{}

      console.log(productName);
    }, 1500);
  }
}

let product = new MyProduct();
product.onlineCourse();
