type Employee = {
  name: string;
  id: number;
  department: string;
};

const employee = {
  name: "fidel",
  id: 3009,
  department: "IT",
};

const JSONEmployee = JSON.stringify(employee);

function getEmployeeInfo(JsonEmployee: string) {
  console.log(JsonEmployee); //JSON string

  const employeeDetails = JSON.parse(JsonEmployee) as Employee; //assert the type to be Employee type

  return employeeDetails;
}

console.log(getEmployeeInfo(JSONEmployee)); //Javascript Object
