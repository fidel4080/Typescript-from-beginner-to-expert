// It is when an object is passed in a function

function getName(Person: { fullName: string }): string {
  return Person.fullName;
}

console.log(getName({ fullName: "Fidel" }));

// --------------------------------------------------------------

//destructuring
function getNames({ fullName }: { fullName: string }): string {
  return fullName;
}
