const path = require("path");

const fullPath = path.join("firstFolder", "secondFolder", "sample.txt");
console.log("Joined path:", fullPath);

const dirName = path.dirname("/folder/subfolder/file.txt");
console.log("Directory name:", dirName);
