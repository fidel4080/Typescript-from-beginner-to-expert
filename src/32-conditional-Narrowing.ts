type Item = {
  productName: string;
};

function getItemOrItems(item: Item | Item[]) {
  if (Array.isArray(item)) {
    return item.length;
  } else {
    return item.productName;
  }
}

// object (item)
console.log(getItemOrItems({ productName: "Hay" }));

// array of objects (item[])
console.log(
  getItemOrItems([
    { productName: "shoes" },
    { productName: "pencils" },
    { productName: "books" },
    { productName: "Ruler" },
  ]),
);
