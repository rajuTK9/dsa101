const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  quiz: {
    type: Object,
    required: true,
  },
});

const Course = mongoose.model("COURSE", courseSchema);

module.exports = Course;
