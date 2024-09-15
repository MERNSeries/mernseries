const express = require("express");
const app = express();

const PORT = 3000;

// Basic home route (GET Request)
app.get("/", (req, res) => {
  res.send("Welcome to Express.js Basic Routing!");
});

// Get with About Page
app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

// POST API
app.use(express.json()); // JSON to JS Object
app.post("/submit", (req, res) => {
  const data = req.body;
  res.send(`Recieved data: ${JSON.stringify(data)}`);
});

// (Frontend) => Backend;
// (JSON)
// JavaScript Object

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Updated resource with ID: ${id}`);
});

// Delete

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleted resource with ID: ${id}`);
});

// Route parameter
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

app.get("/user/:id/post/:postId", (req, res) => {
  const { id, postId } = req.params;
  res.send(`User ID: ${id}, Post ID: ${postId}`);
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
