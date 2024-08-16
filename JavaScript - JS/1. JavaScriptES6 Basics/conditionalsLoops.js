// ! Conditionals are used to perform different actions based on different conditions. They are fundamental in controlling the flow of a program.

// 1. "if"

// if (condition) {
// Code to be executed if condition is true
// }

// let age = 18;
// if (age >= 18) {
//   console.log("you are an adult.");
// }

// 2. "else"

// if (condition) {
// Code to be executed if condition is true
// } else {
// Code to be executed if condition is false
// }

// let age = 16;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// if else-if else

// if (condition1) {
//   // Code to be executed if condition1 is true
// } else if (condition2) {
//   // Code to be executed if condition1 is false and condition2 is true
// } else {
//   // Code to be executed if both condition1 and condition2 are false
// }

// let score = 95;
// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("Grade B");
// } else if (score >= 70) {
//   console.log("Grade C");
// } else {
//   console.log("Grade F");
// }

// Switch Statement

// let score = 96;
// switch (true) {
//   case score >= 90:
//     console.log("Grade A");
//     break;
//   case score >= 80:
//     console.log("Grade B");
//     break;
//   case score >= 70:
//     console.log("Grade C");
//     break;
//   default:
//     console.log("Grade F");
// }

// switch (expression) {
//   case value1:
//     // Code to be executed if expression === value1
//     break;
//   case value2:
//     // Code to be executed if expression === value2
//     break;
//   // You can have any number of case blocks
//   default:
//   // Code to be executed if expression doesn't match any case
// }

// let day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("Start of the workweek.");
//     break;
//   case "Friday":
//     console.log("Last workday of the week.");
//     break;
//   default:
//     console.log("Midweek day.");
// }

// ? Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse;

// let isMember = false;
// let fee = isMember ? "$10" : "$20";
// console.log(fee);

// let age = 22;
// let hasID = true;

// if (age >= 18) {
//   if (hasID) {
//     console.log("Entry allowed.");
//   } else {
//     console.log("No ID, no entry.");
//   }
// } else {
//   console.log("Underage, entry not allowed.");
// }

// ! Loops - Jumping Statements
// Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met.

// 1. for
// for (initialization; condition; increment / decrement) {
//   // Code to execute
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Iteration Number " + i);
// }

// while (condition) {
//   // Code to execute
// }

// let i = 0;
// while (i < 5) {
//   console.log("Iteration number " + i);
//   i++;
// }

// do {
//   // Code to execute
// } while (condition);

let i = 0;
do {
  console.log("Iteration number " + i);
  i++;
} while (i < -1);
