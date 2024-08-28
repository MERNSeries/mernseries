// Web Development
// => 1. Frontend
// => 2. Backend (Express JS)
// APIs (Application Programming Interface)
// JSON (Data Format)

// HTTP (Hyper Text Transfer Protocol)
// CRUD => Create,Read, Update, Delete
// (Method) => POST, GET, PUT, DELETE;

// ! The fetch method in JavaScript is used to make network requests to servers and is part of the modern approach to handling HTTP requests. It returns a Promise that resolves to the Response object representing the response to the request.

// fetch(url)
//   .then((response) => {
//     // Handle the response
//   })
//   .catch((error) => {
//     // Handle errors
//   });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json(); // Parse the JSON data (JavaScript Object) (JSON => JS Object)
//   })
//   .then((data) => {
//     console.log(data);
//     document.write(JSON.stringify(data)); // (JS Object => JSON)
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation: ", error);
//   });

const jsonString = '{"name":"John", "age":30, "isStudent":false}';
const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const jsonStringg = JSON.stringify(person);
// console.log(jsonStringg);

// * APIs: JSON is commonly used for APIs to exchange data between a client and a server.

let promise = fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    document.write(`<h1>${data.title}</h1>`);
    document.write(`<h1>${data.body}</h1>`);
  })
  .catch((error) => {
    document.write("Error", error);
  });
console.log(promise);
