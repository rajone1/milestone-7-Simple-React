// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar + 100;
  console.log(myVar);
} else {
  myVar = 0;
  console.log(myVar);
}
// FALSY
let myVar2 = 5;
// check any truthy
if (!myVar2) {
  myVar2 = myVar2 + 100;
  console.log(myVar);
} else {
  myVar2 = 0;
  console.log(myVar2);
}

// IF ELSE INSTEAD TERNARY OPERATOR

let money = 500;
let moneychack = 1000;
let book;
if (!money > 300) {
  book = "ai book";
  console.log(book);
} else {
  const book = "no  book";
  console.log(book);
}

// or

const chack = money > 300 ? "ai book" : "no book";
console.log(chack);

const chack2 = money > 300 && moneychack > 500 ? "ai book buy" : "no boooook";
console.log(chack2);

//

let isactive = true;
// isactive = !isactive its give false result

const showuser = () => console.log("disply user");
const hideuser = () => console.log("hide user");

isactive ? showuser() : hideuser();

// convert string to number

const string1 = "55";
const num1 = +string1;
// console.log(num1);

const num2 = 100;
const string2 = num2 + "";
// console.log(string2);

//bracket notation22222222222222
const person = {
  name: "Lal Nil Holud mia",
  profession: "Traffic Surgeon",
  age: 39,
  25: "Summer",
  "son-name": "Sunny",
  address: "Shahabag",
};

// dot notation
const prof1 = person.profession;

// bracket notation
const prof2 = person["profession"];
const pName = "profession";
const prof3 = person[pName];
// console.log(prof3);

const season = person[25];
// console.log(season);
const son = person["son-name"];
