// used when a value will never return or never stop execution

function keeprunning(): never {
  while (true) {
    console.log("Running...");
  }
}

keeprunning();

//code below here will be unreachable

// console.log("unreachable code");
