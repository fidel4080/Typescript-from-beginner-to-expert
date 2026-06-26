let getNames: (firstName: string, secondName?: string) => string;

getNames = (firstName, secondName) => {
  return `${firstName} ` + `${secondName}`;
};

console.log(getNames("Fidel")); //will return fidel undefined

// look 23-default-parameters.ts to see how the undefined is solved
