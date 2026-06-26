// GENERIC FUNCTIONS

// function getArrayItem<T>(item: Array<T>): T{
//     return item[2];
// }

function getArrayItem<T>(item: Array<T>, index: number): T | undefined {
  if (index >= 0 && index < item.length) {
    return item[index];
  }

  return undefined; //return undefined if array index specified is out of bounds
}

let arrayItem = getArrayItem<number>([1, 2, 3, 4, 5], 3);

// let arrayItem = getArrayItem<string>(["Hi", "Hello", "Hey"], 2);
console.log(arrayItem);
