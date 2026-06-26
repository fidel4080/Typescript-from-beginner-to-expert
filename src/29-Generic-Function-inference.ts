function getArrayLength<T>(Elements: T[]): number {
  return Elements.length;
}

const arrLength = getArrayLength([2, 4, 6, 8, 10]);
console.log(arrLength);
