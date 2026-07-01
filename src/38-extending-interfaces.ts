// Interface are a way to define the shape of an object
interface Department {
  departments: string[];
}

interface Employee extends Department {
  readonly id: number;
  name: string;
  hobbies: string[];
}

function getEmployeeInfo(
  id: number,
  name: string,
  departments: string[],
  hobbies: string[],
): Employee {
  return {
    id,
    name,
    departments,
    hobbies,
  };
}

let employee: Employee = getEmployeeInfo(
  1281,
  " F. Omuya",
  ["CIS", "IT"],
  ["coding", "travelling"],
);

console.log(employee);
