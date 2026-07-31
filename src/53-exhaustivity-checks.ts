enum Courses {
  TS,
  JS,
  //Python
}

function setCoursePrice(course: Courses): String {
  switch (course) {
    case Courses.TS:
      return "$20.00";

    case Courses.JS:
      return "$19.30";

    default:
      return courseWarning(course);
  }
}

console.log(setCoursePrice(Courses.JS));
console.log(setCoursePrice(Courses.TS));
// console.log(setCoursePrice(Courses.Python));

function courseWarning(course: never): never {
  throw new Error(`The ${course} course has not been priced`);
}
