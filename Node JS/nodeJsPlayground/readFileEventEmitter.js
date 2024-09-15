const EventEmitter = require("events");
const fs = require("fs");

const fileEmitter = new EventEmitter();

fileEmitter.on("readFile", (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      fileEmitter.emit("error", err);
    } else {
      fileEmitter.emit("fileRead", data);
    }
  });
});

fileEmitter.on("fileRead", (data) => {
  console.log("File Contents:", data);
});

fileEmitter.on("error", (err) => {
  console.log("Error occurred:", err.message);
});

fileEmitter.emit("readFile", "example.txt");
