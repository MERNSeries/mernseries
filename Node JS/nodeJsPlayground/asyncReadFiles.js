const fs = require("fs").promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile("example.txt", "utf8");
    console.log("First file content:", data1);

    const data2 = await fs.readFile("output.txt", "utf8");
    console.log("Second file content:", data2);
  } catch (err) {
    console.log("Error", err);
  }
}

readFiles();
