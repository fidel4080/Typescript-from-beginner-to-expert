// Interface are a way to define the shape of an object

interface Employee {
  readonly id: number;
  name: string;
  hobbies: string[];
}

function getEmployeeInfo(
  id: number,
  name: string,
  hobbies: string[],
): Employee {
  return {
    id: id,
    name: name,
    hobbies: hobbies,
  };
}

let employee: Employee = getEmployeeInfo(1281, " F. Omuya", [
  "coding",
  "travelling",
]);

console.log(employee);
