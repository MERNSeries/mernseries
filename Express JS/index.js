const express = require("express");
const app = express();

// Define a Simple Route - API
app.get("/", (req, res) => {
  res.send("Hello World! We are learning the Express JS.");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
