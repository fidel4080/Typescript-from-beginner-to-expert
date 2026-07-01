// Interface are a way to define the shape of an object

interface Employee {
  readonly id: number;
  name: string;
  hobbies: string[];
  employeeHobbies(): string[];
}

function getEmployeeInfo(
  id: number,
  name: string,
  hobbies: string[],
): Employee {
  return {
    id,
    name,
    hobbies,
    employeeHobbies() {
      return this.hobbies;
    },
  };
}

let employee: Employee = getEmployeeInfo(1281, " F. Omuya", [
  "coding",
  "travelling",
]);

console.log(employee);
console.log(employee.employeeHobbies());
