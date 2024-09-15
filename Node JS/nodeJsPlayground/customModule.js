const EventEmitter = require("events");

class MyModule extends EventEmitter {
  performTask() {
    console.log("Task Started...");
    this.emit("done", "Task completed successfully.");
  }
}

module.exports = MyModule;
