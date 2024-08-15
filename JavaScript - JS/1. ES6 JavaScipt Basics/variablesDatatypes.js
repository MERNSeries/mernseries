// ? What is a Variable?
// Name given to a container to store datatypes.

// ! Declaring Variables
// var, let, const

var myContainer;
let myContainer1;
// const myContainer2;

// ! Initilization Variables

var myContainer = 10;
myContainer1 = "hello";
const myContainer2 = true;

// ! Reassigning Variables
myContainer = 15;
myContainer1 = "MERN";
// myContainer2 = false;

// console.log(myContainer);
// console.log(myContainer1);
// console.log(myContainer2);

// ! Scoping Variables
// var = Function Scoped
// let, const = Blocked Scoped

function example() {
  var x = 10;
  if (true) {
    let y = 20;
    const z = 30;
    // console.log(y);
    // console.log(z);
  }
  // console.log(x);
}

example();

// ! JavaScipt Datatypes
// 1. Primitive Datatypes
// 2. Non-Primitive Datatypes

// 1. number, string, bigInt, null, undefined, boolean, symbol

let age = 25;
let pi = 3.14;

let name = "MERN";
let greeting = "hello";
let template = `Hello, ${name} `;

console.log(typeof name);

let isLogin = false;

let myVariable;
// console.log(myVariable);

let empty = null;
// console.log(empty);

let uniqueID = Symbol("id");
let anotherID = Symbol("id");
console.log(uniqueID === anotherID); // false

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);

// Non-Primitive

// Array
// Objects

let myArray = [2, 44, "asds", true];
let myObject = {
  name: "MERN",
  date: 2,
  month: "feb",
};
