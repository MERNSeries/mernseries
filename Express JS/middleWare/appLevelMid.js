// App Level Middleware

const express = require("express");
const app = express();

const PORT = 3000;

// Mock Authentication middleware
const authMiddleware = (req, res, next) => {
  const authenticated = true;
  if (authenticated) {
    console.log("User authenticated");
    next();
  } else {
    res.status(401).send("Authentication required");
  }
};

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Home - Authenticated");
});

app.get("/dashboard", (req, res) => {
  res.send("DashBoard - Authenticated");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
