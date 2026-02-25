require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/authDB");
mongoose.connect(process.env.MONGO_URI);
try {
  console.log("MongoDB Connected");
} catch (err) {
  console.log(err);
}

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
