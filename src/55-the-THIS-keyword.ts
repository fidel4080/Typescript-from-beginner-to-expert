const person = {
  objFunc(): void {
    console.log("object", this);
  },
};

person.objFunc();

// --------------------------------------------------
class Test {
  classFunc(): void {
    console.log("class", this);
  }
}

let test = new Test();
test.classFunc();

// -------------------------------------------
// the this keyword binds itself to the window object
function addition(a: number, b: number): void {
  console.log("Function", this, a + b);
}
addition.call({ name: "John" }, 10, 50);

//--------
function addition2(a: number, b: number): void {
  console.log("Function", this, a + b);
}
addition2.apply({ name: "James" }, [10, 5]);
