type Course = {
  name: string;
  price: number;
  readonly level: string; //putting readonly prevents the key to be updated
  enrolled?: boolean; //flag this property -> can be used or not, doesnt matter
};

const TSCourse: Course = {
  name: "TS Bootcamp",
  price: 10.99,
  level: "beginner",
};

TSCourse.enrolled = false;

// TSCourse.level = "intermediate"; (Cannot assign to 'level' because it is a read-only property)

console.log(TSCourse);
