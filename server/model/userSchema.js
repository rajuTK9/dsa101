const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  quizPerformance: {
    type: Object,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("USER", userSchema);

module.exports = Course;
