require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/authDB");
try {
  console.log("MongoDB Connected");
} catch (err) {
  console.log(err);
}

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("server running on port 5000");
});
