// 1. JSON => stringify, parse
const student = {
  name: "Saharuk Khan",
  age: 32,
  movies: ["jawan", "dilwa dulhania"],
};

const stringifyJason = JSON.stringify(student);
const makeobject = JSON.parse(stringifyJason);

console.log(student);
console.log(stringifyJason);
console.log(makeobject);

// fetch
// fetch(url)
// .then((res)=> res.json())
// .then((data)=>console.log(data))

const student2 = {
  name: "Saharuk Khan",
  age: 32,
  movies: ["jawan", "dilwa dulhania"],
};

const keyofobject = Object.keys(student2);
const valueofObject = Object.values(student2);
console.log(keyofobject);
console.log(valueofObject);
const stringify2 = JSON.stringify(valueofObject);
console.log(stringify2);

// add or remove array

const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 5000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sungalss", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const products2 = {
  name: "book",
  price: 500,
  brand: "Bangladesh",
  color: "lite pink",
};
const addall = [...products, products2];
console.log(addall);

// remove item

const remopove = products.filter((item) => item.brand !== "ray");
console.log(remopove);
// remove 2 item
const remove2 = products.filter(
  (item) => item.brand !== "ray" && item.name !== "camera"
);

console.log(remove2);
