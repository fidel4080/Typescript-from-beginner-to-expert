// private is accessible only inside the class that declares it, while protected is accessible inside the class and its subclasses

class Person {
  private age: number = 20;

  showAge(): void {
    console.log(this.age);
  }
}

let person = new Person();
person.showAge(); // 20

// console.log(person.age);  // Error

class Car {
  protected weight: number = 789;
}

class Benz extends Car {
  displayWeight(): void {
    console.log(this.weight);
  }
}

let benz = new Benz();
benz.displayWeight(); // 789

// console.log(benz.weight);   // Error
