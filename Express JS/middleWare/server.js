// Basic Middleware

const express = require("express");
const app = express();

const PORT = 3000;

// Basic middleware function that logs request method and URL
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the middleware function
};

// use the logger middleware
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
