// * Asynchronous JavaScript is a crucial aspect of modern web development, enabling non-blocking operations that allow your application to remain responsive while performing tasks like data fetching, timers, or handling user inputs.

// ! Synchronous JavaScript
// ? Code execution happens line by line. Each statement waits for the previous one to complete before executing. This can lead to blocking, especially with time-consuming operations like API requests.

// ! Asynchronous JavaScript
// ? Code can execute without waiting for previous operations to complete, allowing the program to handle other tasks in the meantime. This is essential for maintaining a smooth user experience in web applications.

// console.log("Start");
// for (let i = 0; i < 10000000000; i++) {}
// console.log("End");

// console.log("Start");
// setTimeout(() => {
//   console.log("Delayed");
// }, 1000);
// console.log("End");
// console.log("End");
// console.log("End");

// Callbacks
// Promises
// Async/Await

// ! The setTimeout function is used to execute a piece of code once after a specified delay.

// * setTimeout(function, delay);

// setTimeout(() => {
//   console.log("This message is displayed after 2 seconds.");
// }, 2000);

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// setTimeout(greet, 3000, "Alice");

// const timeoutId = setTimeout(() => {
//   console.log("This will not be displayed");
// }, 5000);
// console.log(timeoutId);
// clearTimeout(timeoutId);

// ! The setInterval function is used to repeatedly execute a piece of code at specified intervals.

// const intervalId = setInterval(() => {
//   console.log("This message is displayed every 3 seconds");
// }, 3000);

// ! Callbacks

// * What is a Callback? A callback is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used in JavaScript for asynchronous operations, such as API calls, file handling, event handling, and more.

// ? Why Use Callbacks? Callbacks are essential in JavaScript for handling asynchronous operations, allowing the program to continue running without blocking while waiting for a process to complete. This makes JavaScript highly efficient, especially in web development, where tasks like data fetching or file reading are common.

// How the Callback works?

// ! In JavaScript, functions are first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables. This feature allows callbacks to be used effectively.

// Synchronous Callback

// function greet(name, callbackSayGoodBye) {
//   console.log("Hello, " + name);
//   callbackSayGoodBye();
// }

// // a callback function
// function sayGoodBye() {
//   console.log("Goodbye!");
// }

// greet("MERN", sayGoodBye);

// function fetchData(callbackProcessData) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     console.log("Data Fetched");
//     callbackProcessData();
//   }, 3000);
// }

// // a callback function
// function processData() {
//   console.log("Processing data....");
// }

// fetchData(processData);

// ! Handling Errors with Callbacks

// function loadData(callbackHandleData) {
//   setTimeout(() => {
//     const error = false;
//     if (error) {
//       callbackHandleData("Error occured while loading data", null);
//     } else {
//       const data = { id: 1, name: "MERN" };
//       callbackHandleData(null, data);
//     }
//   }, 4000);
// }

// function handleData(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Data loaded successfully:", data);
//   }
// }

// loadData(handleData);

// Callback HEll

// When multiple asynchronous operations need to be performed one after the other, you might end up with nested callbacks, often referred to as "callback hell."

function step1(callbackStep2) {
  setTimeout(function () {
    console.log("Step 1 completed");
    callbackStep2();
  }, 1000);
}

function step2(callbackStep3) {
  setTimeout(function () {
    console.log("Step 2 completed");
    callbackStep3();
  }, 1000);
}

function step3(callbackStep4) {
  setTimeout(function () {
    console.log("Step 3 completed");
    callbackStep4();
  }, 1000);
}

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All steps completed.");
    });
  });
});
