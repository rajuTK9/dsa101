const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: Object,
    required: true,
  },
  // quizPerformance: {
  //   type: Object,
  //   required: true,
  // },
  // notes: {
  //   type: String,
  //   required: true,
  // },
});

const Course = mongoose.model("USER", userSchema);

module.exports = Course;
