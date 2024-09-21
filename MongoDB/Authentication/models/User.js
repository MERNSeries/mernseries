const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hashing the password before saving user to the database
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  // Generate salt for hashing
  const salt = await bcrypt.genSalt(10);
  // Hash the password
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserSchema);
