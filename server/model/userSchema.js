const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: Object,
    required: true,
  },
  completed_chapters: {
    type: Array,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
});

const Course = mongoose.model("USER", userSchema);

module.exports = Course;
