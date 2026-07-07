type Product = {
  name: string;
  info: ProductInfo | undefined;
};

type ProductInfo = {
  level: string;
  noOfStudents: number | undefined;
};

const courses: Product[] = [
  {
    name: "JS",
    info: {
      level: "beginner",
      noOfStudents: 456,
    },
  },
  {
    name: "TS",
    info: {
      level: "advanced",
      noOfStudents: undefined,
    },
  },
  {
    name: "TailWind CSS",
    info: undefined,
  },
];

const numOfStudents = courses.map((course) => {
  if (course.info) {
    return course.info.noOfStudents;
  }

  return undefined;
});

console.log(numOfStudents);
