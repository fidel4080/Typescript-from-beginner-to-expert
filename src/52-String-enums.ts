enum Employee {
  Name = "Fidel Castro",
  Job = "Frontend DEV",
}

function getEmployeeInfo(employee: Employee): Employee {
  return employee;
}

console.log(getEmployeeInfo(Employee.Name)); //Fidel Castro
console.log(getEmployeeInfo(Employee.Job)); //Frontend DEV
