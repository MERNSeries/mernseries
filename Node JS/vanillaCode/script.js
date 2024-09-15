// ! Asynchronous programming allows your program to start a task and move on to another task before the first one finishes. This is useful when you have tasks that might take some time to complete, like fetching data from a server.

console.log("Start");

setTimeout(() => {
  console.log("This message is displayed after 3 seconds.");
}, 3000);

console.log("End");

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button was clicked!");
});
