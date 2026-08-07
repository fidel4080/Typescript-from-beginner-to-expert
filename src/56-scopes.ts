// 1. Global scope - can be accessed inside functions

let myName: string = "Fidel";

function displayName() {
  console.log(myName);
}

displayName();

//=============================================================================
// 2. local scope
// var is function scope
// let is block scope

function myFunc() {
  var num: number = 23;
  console.log(num);
}

myFunc();

//=================================================================================
// 3. block scope

{
  var num1: number = 10;
  let num2: number = 20;
  const num3: number = 30;

  console.log("var inside the block", num1);
  console.log("var inside the block", num2);
  console.log("var inside the block", num3);
}

// var outside the block is still accessible but let and const are not
console.log("var outside the block", num1);
