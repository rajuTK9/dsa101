const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DB =
  "mongodb+srv://rajutk:tmkBDFA@dsa101.4cd4s4c.mongodb.net/?retryWrites=true&w=majority";
const PORT = 4000;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successfull.");
  })
  .catch((err) => {
    console.log("No connection \n", err);
  });

app.get("/", (req, res) => {
  res.send("DSA101 Home");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
