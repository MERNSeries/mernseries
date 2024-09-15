const fs = require("fs");

// Reading the file asynchronously with callback
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File Content:", data);
  }
});
