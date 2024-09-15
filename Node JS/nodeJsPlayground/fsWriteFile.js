const fs = require("fs");

fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  }
  console.log("File Written successfully!");
});
