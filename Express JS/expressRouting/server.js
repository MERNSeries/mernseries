const express = require("express");
const app = express();

// Array to store dummy data
let users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Raman Sharma",
  },
  {
    id: 3,
    name: "Aman Sharma",
  },
  {
    id: 4,
    name: "Suman Sharma",
  },
];

// Get all the Users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get the specific data
app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

const PORT = 3001;

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
