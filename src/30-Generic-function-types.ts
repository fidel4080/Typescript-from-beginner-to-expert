type funcType<T> = (Elements: T[]) => number;

let getArrayLength: funcType<number> = (Elements) => {
  return Elements.length;
};

console.log(getArrayLength([1, 2, 3, 4, 5, 6]));
