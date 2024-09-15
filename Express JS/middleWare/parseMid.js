// In-built Middleware - Parsing Incoming Header Request

const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Data Recieved");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
