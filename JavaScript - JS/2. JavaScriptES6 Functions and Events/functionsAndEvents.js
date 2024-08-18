function myFunction() {
  console.log("Hey, I am myFunction Statement.");
}

myFunction();

// ! A function is a reusable block of code designed to perform a specific task.

//? Functions help organize code, making it more modular and easier to manage.

// 1. Function Declaration

function functionName(parameters) {
  // Code to be executed
}

function greet(name) {
  console.log("Hello " + name + "!");
}

// functionName(arguments)
// greet("MERN");

// "return a value"

function add(a = 1, b = 1) {
  return a + b;
}

let result = add(10, 20);
// console.log(result);

// Regular JS / Normal JS Function
function myFunction() {
  console.log("Hello");
}

// Anonymous Functions and Function Expression

const sayHi = function (name) {
  console.log("hi," + name + "!");
};

// sayHi("MERN");

// const multiply = (a, b) => a * b;
const multiply = (a, b) => {
  console.log("hello everyone!");
  return a * b;
};

console.log(multiply(2, 3));

// Immediately Invoked Functions Expressions (IIFE)

(function () {
  console.log("this is a self-invoking function!");
})();

// ! Events in JavaScript ////////////////////////

// ? Event handling in JavaScript involves responding to user interactions like clicks, key presses, or mouse movements.

// * Events are actions or occurrences that happen in the browser, which JavaScript can respond to

// ! Common events include click, mouseover, keydown, submit, etc.

// DOM => Document Object Model
// In JS everything behaves as an object other than primitive datatypes.

// ! element.addEventListener('event', function)

const button = document.getElementById("btn");
// console.log(button);

// function handleClick() {
//   alert("button was clicked!");
//   button.style.backgroundColor = "red";
//   console.log("Butttton Hello");
// }

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

// mernSeries;

// ! When an event occurs, an event object is passed to the handler function, providing details about the event.

// button.addEventListener("click", function (event) {
//   console.log("Event type:", event.type);
//   console.log("Event target:", event.target);
//   console.log(event);
// });

// ! Event delegation involves adding a single event listener to a parent element to handle events on multiple child elements.

// const container = document.getElementById("container");
// container.addEventListener("click", function (event) {
//   if (event.target.tagName === "BUTTON") {
//     alert("A button inside the container was clicked");
//   } else {
//     console.log("Hey, don't click here! ");
//   }
// });

// function submitForm(event) {

// }

const form = document.getElementById("form");
form.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event.key);
});
