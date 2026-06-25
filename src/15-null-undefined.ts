let discount: number;

function specialDiscount(holidaySeason: boolean): number {
  if (holidaySeason) {
    return (discount = 0.25);
  } else {
    return (discount = 0.15);
  }
}

const holidayDiscount = specialDiscount(false);
// const holidayDiscount = specialDiscount(null); // you can not pass in null or undefined as arguments

console.log(holidayDiscount);
