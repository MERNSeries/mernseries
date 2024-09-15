// Router Middleware

const express = require("express");
const app = express();
const router = express.Router();

const PORT = 3000;

// Middleware specific to this router
const logRouterMiddleware = (req, res, next) => {
  console.log(`Router-level for ${req.method} ${req.url}`);
  next(); // Pass control to the middleware function
};

// use the logger middleware
router.use(logRouterMiddleware);

router.get("/user", (req, res) => {
  res.send("User Page");
});

router.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// Apply Router to appliation
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
