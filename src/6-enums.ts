// Allows us to declare a set of named constants

// 1.Numeric enum types
const enum RollNumbers {
  John = 1,
  James,
  Sandra,
  Samantha,
  Peter,
}
// accessing the values...
let studentRollNumber1: RollNumbers = RollNumbers.James;
console.log(studentRollNumber1);

// 2.String enum types
const enum StudentDetails {
  Name = "Fidel",
  Major = "Computer Science",
}
// accessing the values....
let studentName: StudentDetails = StudentDetails.Name; // Fidel
let studentMajor: StudentDetails = StudentDetails.Major; // Computer Science

// 3.Heterogenous enums
const enum StudentDetails2 {
  ID = 595305603,
  Name = "Castro",
  Major = "Info. Tech",
}
// accessing the values....
let studentName2: StudentDetails2 = StudentDetails2.Name; // Fidel
let studentMajor2: StudentDetails2 = StudentDetails2.Major; // Computer Science
let studentID: StudentDetails2 = StudentDetails2.ID; // 595305603
