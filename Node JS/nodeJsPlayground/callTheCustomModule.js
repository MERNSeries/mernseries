const MyModule = require("./customModule");
const myModuleInstance = new MyModule();

// Listen for the "done" event
myModuleInstance.on("done", (message) => {
  console.log(message);
});

// trigger the task
myModuleInstance.performTask();
