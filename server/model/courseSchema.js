const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  category: {
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
  correct1: {
    type: String,
    required: true,
  },
  correct2: {
    type: String,
    required: true,
  },
  correct3: {
    type: String,
    required: true,
  },
  correct4: {
    type: String,
    required: true,
  },
  correct5: {
    type: String,
    required: true,
  },
  options1: {
    type: String,
    required: true,
  },
  options2: {
    type: String,
    required: true,
  },
  options3: {
    type: String,
    required: true,
  },
  options4: {
    type: String,
    required: true,
  },
  options5: {
    type: String,
    required: true,
  },
  question1: {
    type: String,
    required: true,
  },
  question2: {
    type: String,
    required: true,
  },
  question3: {
    type: String,
    required: true,
  },
  question4: {
    type: String,
    required: true,
  },
  question5: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  // quiz: {
  //   type: Array,
  //   required: true,
  // },
});

const Course = mongoose.model("COURSE", courseSchema);

module.exports = Course;

// OLD FORMAT
// {
//   "category": "basic",
//   "topic": "String",
//   "chapter": "Chapter 2",
//   "content": "Demo Content 2",
//   "quiz": {
//       "question": "Question 1",
//       "options": [
//           "option 1",
//           "option 2",
//           "option 3",
//           "option 4"
//       ],
//       "correct": 1
//   }
// }
