const a = 12;
let b = 10;
b = 20;
console.log(b);
// 2 < > <= >= != === !=== && ||
const name1 = "shaon";
const id = 25;
const address = "Rajshahi";

if (name1 === "shaoni" && address == "Rajshahi") {
  console.log("its ok");
} else if (id == 25 || address == "dhaka") {
  console.log("id", id);
} else {
  console.log("you are not identified");
}

// array
const n = [1, 2, 3];
// n[0] = 12;
n.push(4);
n.pop(4);
n.unshift(100);
n.shift(100);
console.log(n);
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const findindex = numbers.indexOf(30);
console.log(findindex);

numbers[2] = 200;
console.log(numbers);
const find = numbers[5];
console.log(find);
//
const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numbers2.length; i++) {
  const spinner = numbers2[i];
  console.log("all:", spinner);
}

function add(num1, num2) {
  const add = num1 + num2;
  return add;
}

const result = add(12, 2);
console.log(result);

// object

const object1 = {
  name: "Rezwan",
  address: "raj",
  Designation: "web-developer",
  id: [1, 2, 3, 4],
};

console.log(object1);
console.log(object1.id[3]);

// es666666666

const es6example = {
  name: "Rezwan",
  address: "raj",
  Designation: "web-developer",
  id: [1, 20, 30, 4],
};

const templeteString = `name ${es6example.name}address${es6example.address} id ${es6example.id[0]}`;

console.log(templeteString);

// spread operator

const numbers3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

numbers3.push(100);
numbers3.push(200);
numbers3.push(300);

console.log(numbers3);
const addanother = [500, 600];
const spreadnum = [...numbers3, ...addanother, 12, 14];

console.log(spreadnum);

// arrow Function

const show = () => 65;
console.log(show());

const show1 = (num) => num + 65;
console.log(show1(10));
const show2 = (num) => num % 2 === 0;
console.log(show2(11));
const show3 = (A, B, C) => A + B + C;
console.log(show3(1, 2, 3));
const show4 = (num1, num2) => {
  const multiply = num1 * num2;
  return multiply;
};

console.log(show4(5, 10));

// destructuring ///////////////
const numbers5 = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [a1, b2] = numbers5;
console.log(a1, b2);

function boxify(num1, num2) {
  const box = [num1, num2];
  return box;
}
console.log(boxify(12, 10));

// //
// const student = {
//   name: "Salib Khan",
//   age: 32,
//   movies: ["king khan", "Dhakar Mastan"],
// };

// const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie, secondMovie);

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { ide, machine } = employee;
const { height, drink } = employee.specification;
const [html, css] = employee.languages;
console.log(ide);
console.log(drink);
console.log(html);
