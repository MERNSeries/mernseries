const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(express.json());

const URL =
  "mongodb+srv://mernseries2:8IY6qW09un4U8Ljw@userdb.2xo6h.mongodb.net/?retryWrites=true&w=majority&appName=UserDB";

mongoose
  .connect(URL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.error("MongoDB Connection Error:", error));

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`User Server is running on http://localhost:${PORT}`);
});
