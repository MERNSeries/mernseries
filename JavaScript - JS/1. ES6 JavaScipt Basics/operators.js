// ! 1. Arithmetic Operators

let a = 10;
let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b); // 10^3

// ! 2. Assignment Operators

let x = 5;
x += 2; // => x = x + 2 // 7
x -= 2; // => x = x - 2 // 5
x *= 2; // => x = x * 2 // 10
x /= 1; // => x = x / 2 // 10

// console.log(x);

// ! 3. Comparison Operators

let num1 = 10;
let num2 = 20;

// console.log(num1 == num2); // equal to
// console.log(num1 === num2); // strict equal to
// console.log(num1 != num2); // not equal to
// console.log(num1 !== num2); // strict not equal to
// console.log(num1 > num2); // greater than
// console.log(num1 < num2); // less than
// console.log(num1 >= 10); // greater than or equal to
// console.log(num1 <= 5); // less than or equal to

// ! 4. Logical Operators

let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // false (AND)
console.log(isAdult || hasTicket); // true (OR)
console.log(!isAdult); // false (NOT)

// ! 5. String Operators

let firstName = "MERN";
let lastName = "Series";

console.log(firstName + " " + lastName);

// ! 6. Ternary Operators

// condition ? statement1 : statement2;

let age = 17;
let canVote = age >= 18 ? "yes" : "no";
console.log(canVote);

// typeof Operator

let name = "Alice";
let dob = 25;
let isStudent = true;

console.log(typeof name);
console.log(typeof dob);
console.log(typeof isStudent);
