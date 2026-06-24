// returns the indices of the items in an array but in string datatype

let data: (string | number)[] = ["moon", 76, "earth", 34];

for (let dataPoint in data) {
  console.log(`${+dataPoint + 1} - ${data[dataPoint]}`);
}
// the + before dataPoint converts the string indices to number dataType
