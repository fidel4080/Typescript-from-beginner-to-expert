// A Set is a special object that stores unique values only

let mySet = new Set([1, 2, 3, 4, 5, 6]);
console.log(typeof mySet); // it is an object

// PROPERTIES
// 1. add()
console.log(mySet.add(10));

// 2. has()
console.log(mySet.has(4)); // checks if the set has the specified item

// 3. delete()
console.log(mySet.delete(1)); // deletes a specified item

// 4. size
console.log(mySet.size); // returns the number of items

// clear()
console.log(mySet.clear()); // removes all elements from the set

//===========GENERIC SETS==============

const myNumSet: Set<number> = new Set([2, 4, 1, 5]);

const mixedSet: Set<number | string> = new Set(["Hey", 30, "Hello"]);
