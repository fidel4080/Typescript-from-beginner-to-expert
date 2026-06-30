type MagazineInfo = {
  title: string;
  author: string;
  publicationYear: number;
  price: number;
  sales: number;
  international: boolean;
};

const magazine: MagazineInfo = {
  title: "Healthy Living",
  author: "Fidel Castro",
  publicationYear: 2024,
  price: 58,
  sales: 970,
  international: true,
};

// console.log(magazine.price);

type Magazinetitle = {
  title: string;
};

const magazineTitle: Magazinetitle = magazine;
console.log(magazineTitle);
console.log(magazineTitle.title);
