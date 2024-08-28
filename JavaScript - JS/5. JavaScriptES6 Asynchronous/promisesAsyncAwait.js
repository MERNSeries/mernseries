// ! What is a Promise?
// * A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It's a cleaner and more powerful alternative to callback functions, especially when dealing with multiple asynchronous operations.

let myObj = { name: "MERN", time: "02:20:21" };

// ! Pending: The initial state, neither fulfilled nor rejected.
// ! Fulfilled: The operation completed successfully, and the promise has a value.
//  ! Rejected: The operation failed, and the promise has a reason for the failure (usually an error).

// Creation of a promise

// let promise = new Promise(function (resolve, reject) {
// asynchronous operation
//   if (/* operation successful */) {
//     resolve(value) // Fullfilled
//   } else {
//     reject(error)
//   }
// })

// Creating a Promise

// let fetchData = new Promise(function (resolve, reject) {
//   // Asynchronous Operation
//   let success = true;
//   if (success) {
//     resolve("Data Fetched Successfully!");
//   } else {
//     reject("Error fetching data.");
//   }
// });

// Consuming a Promise

// console.log(fetchData);

// fetchData
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Promises with Callbacks

// Handling the Async Operation with Callback
// function fetchData(callbackProcessData) {
//   setTimeout(function () {
//     console.log("Fetching data...");
//     const data = { name: "MERN", topics: 100 };
//     callbackProcessData(data);
//   }, 1000);
// }

// function processData(data, callbackDisplayData) {
//   setTimeout(function () {
//     console.log("Processing data...");
//     data.processed = true;
//     callbackDisplayData(data);
//   }, 1000);
// }

// function displayData(data) {
//   console.log("Data:", data);
// }

// Callback Hell or Pyramid of Doom
// fetchData(function (data) {
//   processData(data, function (processedData) {
//     displayData(processedData);
//   });
// });

// Handling the Async Operation with Promises
// function fetchData() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Fetching data...");
//       const data = { name: "MERN", topics: 100 };
//       resolve(data);
//     }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Processing data...");
//       data.processed = true;
//       resolve(data);
//     }, 1000);
//   });
// }

// function displayData(data) {
//   console.log("Data:", data);
// }

// fetchData()
//   .then(processData)
//   .then(displayData)
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// ! Async - Await => Asynchronous Operation

// * Async/Await is a modern way to handle asynchronous operations in JavaScript, making code easier to read and maintain. It is built on top of Promises, providing a more synchronous appearance while working with asynchronous code.

// ? An async function is a function declared with the async keyword. Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved or rejected.

async function getData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Fetched!"), 5000);
  });

  console.log(promise); // Pending
  let result = await promise; // Pauses here until promise resolves
  console.log(promise);
  console.log(result);
}

getData();
