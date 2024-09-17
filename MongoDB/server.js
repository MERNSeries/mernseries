const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mernseries2:rqlQcg4EC0wMzMea@dummydb.becek.mongodb.net/?retryWrites=true&w=majority&appName=DummyDB"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
