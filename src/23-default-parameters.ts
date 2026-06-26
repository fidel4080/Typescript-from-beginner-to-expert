// To get rid of getting undefined in the console, you put a default parameter

let getNames: (firstName: string, secondName?: string) => string;

getNames = (firstName, secondName = "") => {
  // default parameter is an empty string
  return `${firstName} ` + `${secondName}`;
};

console.log(getNames("Fidel"));

//-----------------------------------------------------------------

let addNumbers: (a: number, b?: number) => number;

addNumbers = (a, b = 0) => {
  //default parameter is zero, 0
  return a + b;
};

console.log(addNumbers(20));
