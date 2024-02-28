const products = [
  { name: "book", price: 500, brand: "Bangladesh", color: "lite pink" },

  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 5000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sungalss", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const usemap = products.map((find) => find.name);
// console.log(usemap);

const usefilter = products.filter((find) => find.price >= 5000);
// console.log(usefilter);

const usefilterSPACIFICNAME = products.filter((find) =>
  find.name.includes("p")
);
console.log(usefilterSPACIFICNAME);

// find give only first value

const usefind = products.find((get) => get.price <= 3000);
// console.log(usefind);

const usefind2 = products.find((get) => get.name.includes("p"));
console.log(usefind2);

// ata return korbana ata map er moto arry debana ata sudhu value deba

products.forEach((get) => {
  //   console.log(get.name);
  console.log(get.color);
});
