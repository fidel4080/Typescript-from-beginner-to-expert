type Product = {
  [courseNames: string]: string;
};

let MyCourses: Product = {
  JS: "JS Bootcamp",
  TS: "TS Bootcamp",
  PY: "Python Bootcamp",
};

//====================================================
// can be used to create dictionaries

type Courses = {
  [k: string]: {
    name: string;
    price: number;
  };
};

let MyBootcamps: Courses = {
  TS: {
    name: "TS Bootcamp",
    price: 5.49,
  },
  JS: {
    name: "JS Bootcamp",
    price: 3.99,
  },
};
console.log(MyBootcamps.TS?.name);
