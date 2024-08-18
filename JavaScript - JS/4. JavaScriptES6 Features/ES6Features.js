// ! In JavaScript, let and const are two keywords introduced in ES6 (ECMAScript 2015) that are used for declaring variables. They are preferred over the older var keyword due to their improved scoping, behavior, and more predictable outcomes in code.

// ? let keyword

// * => Block Scope => Variables declared with let are block-scoped, which means they are only accessible within the block (curly braces {}) they are defined in. This is unlike var, which is function-scoped.

// if (true) {
//   let x = 10;
//   console.log(x);
// }

// console.log(x);

// ! Variables declared with let can be reassigned new values after their initial declaration.

// let y = 20;
// y = 30;
// console.log(y);

// Hoisting

// Scope
// 1. Global
// 2. Local
// 3. Block

// ! let variables are hoisted to the top of their block but are not initialized. They remain in a "temporal dead zone" from the start of the block until the declaration is encountered.

// var x = 100;
// var x = 10;
// console.log(x);
// console.log(myFunction);
// console.log(myFunction());

// function myFunction() {
//   console.log("Hello, We are learning Hoisting..");
//   return "Hellooo..";
// }

// Const Keyword
//
// if (true) {
//   const b = 40;
//   console.log(b); // 40
// }
// console.log(b); // Reference Error

// Immutability (Constant Assignment)

// ! Variables declared with const cannot be reassigned to a new value after their initial assignment. This makes them suitable for constants or values that should not change.

// const c = 50;
// c = 60;
// console.log(c);

// ! Must Be Initialized at the Time of Declaration:

// const d = 120;

//  ! Array and Object Mutability

// ? Although you cannot reassign a const variable to a new value, if the const variable is an object or an array, the properties of that object or the elements of that array can still be modified.

// const a = [20, 26, 34, 67];
// a = 300;
// a[0] = 45;
// console.log(a); // => a = a * 2

// const myObject = {
//   name: "MERN",
//   language: "English",
// };

// myObject.name = "Full Stack";
// console.log(myObject);

// Template Literals - String Interpolation.

// * Template literals in JavaScript are a powerful feature introduced in ECMAScript 2015 (ES6) that provide an easier and more readable way to work with strings. They allow you to create multi-line strings, interpolate variables directly within strings, and even embed expressions in strings.

// ! let string = `This is a String`

// let name = "MERN";
// let topics = 100;
// let message = `Hello, my name is ${name} and I do have ${topics} topics
// fewwefwe
// wefwefwefwe
// wefwefwef
// wefwe.`;

// console.log(message);

// let e = 5;
// let f = 10;
// console.log(`The sum of ${e} and ${f} is ${e + f}.`);

// ! ES6 Arrow Functions

// * => Arrow functions in JavaScript offer a concise way to write functions and come with some differences compared to traditional function expressions.

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

// const sqaure = (a) => {
//   console.log("asdasd");
//   return a ** 2;
// };

// // console.log(sqaure(8));

// let s = "Hello";

// function hello() {
//   let s = "Bye";
//   console.log(s);
// }

// if (true) {
//   let s = 10;
//   console.log(s);
// }

// console.log(s);
// hello();

// ! Lexical this

// Unlike regular functions, arrow functions don’t have their own this context. They inherit this from the surrounding scope.

// let myObj = {
//   name: "MERN",
//   topics: 100,
//   funcc: () => {
//     console.log(this);
//   },
// };

// myObj.funcc();

// function myFunc() {
//   console.log(this);
// }

// myFunc();

// function Person() {
//   this.age = 0;

//   setInterval(function () {
//     this.age++;
//   }, 1000);
// }
// const person = new Person();
// console.log(person);

// function Person() {
//   this.age = 0;

//   setInterval(() => {
//     this.age++;
//   }, 1000);
// }
// const person = new Person();
// console.log(person.age);

// No arguments Object

// Arrow functions do not have their own arguments object. If you need to access arguments, you should use a regular function.

// const logArguments = () => {
//   console.log(arguments);
// };

// logArguments(1, 2, 3, 4, 5);

// const Person = function (name) {
//   this.name = name;
// };
// const john = new Person("John");

// function sub(a, b) {
//   return a - b;
// }
// console.log(sub(11, 1));

// const add = (a, a) => a + a;
// console.log(sum(1, 1));

// ! Destructing

// ! => Destructuring in JavaScript is a convenient way of extracting values from arrays, objects, and even nested structures, assigning them to variables in a single, concise statement. It simplifies the code by reducing the need for multiple lines when extracting values from these structures.

// * 1. Array Destructuring

// const array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// const [a, b, c, d, e, f, g] = array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// Rest Syntax (...) => Accumulation/Collection/Gathering

// const myArray = [1, 2, 3, 4, 5, 6, 7];
// const [a, ...vishal] = myArray;
// console.log(a);
// console.log(vishal); // array

// const obj = {
//   name: "MERN",
//   topics: 100,
//   age: 25,
// };
// console.log(obj);

// console.log(name);
// const { name: fullName, ...rest } = obj;
// console.log(fullName);
// console.log(rest);
// console.log(age);

const response = {
  status: "success",
  data: {
    user: {
      id: 1,
      name: "John",
    },
  },
};

const {
  data: {
    user: { id, name },
  },
} = response;

console.log(id);
console.log(name);
