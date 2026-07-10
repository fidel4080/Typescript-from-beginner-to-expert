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
  return course.info?.noOfStudents;
});

console.log(numOfStudents);
