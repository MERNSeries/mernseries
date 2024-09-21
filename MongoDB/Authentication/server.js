const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

dotenv.config(); // Load the .env file into process.env

const app = express();
app.use(express.json()); // JSON to JS Object
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
