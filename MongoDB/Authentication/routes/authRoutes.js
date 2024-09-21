const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists in the database
  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  // Create a new user instance
  const user = new User({ username, email, password });

  // Save the user to the database
  await user.save();

  res.status(201).json({ message: "User registered successfully" });
});

// Login Route with JWT
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid Credentials" });

  //Compare entered password with hashed password in the database
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

  // Generate a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "10h",
  });

  res.cookie("token", token, { httpOnly: true });

  res.status(200).json({ message: "Login Successful", token });
});

module.exports = router;
