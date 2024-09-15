const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Add EventListener for a specific event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emitting/Triggering the "greet" event
eventEmitter.emit("greet", "Mayank");
