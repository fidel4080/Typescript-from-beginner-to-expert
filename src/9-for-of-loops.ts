let mixData: (string | number)[] = ["moon", 40, 50, "stars"];

for (let item of mixData) {
  console.log(item);
}

// .entries() returns an array of indices and individual items as arrays
for (let item of mixData.entries()) {
  console.log(item[1]);
}
// therefore: item[0] -> the indices
//            item[1] -> the individual items

//Destructuring
for (let [i, item] of mixData.entries()) {
  console.log(`${i + 1} - ${item}`);
}
