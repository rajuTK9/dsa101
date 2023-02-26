const express = require("express");
const router = express.Router();

const Course = require("../model/courseSchema");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("DSA101 Home");
});

router.post("/admin-upload", async (req, res) => {
  const {
    category,
    chapter,
    content,
    correct1,
    correct2,
    correct3,
    correct4,
    correct5,
    options1,
    options2,
    options3,
    options4,
    options5,
    question1,
    question2,
    question3,
    question4,
    question5,
    topic,
  } = req.body;
  if (
    !(
      category &&
      topic &&
      chapter &&
      content &&
      correct1 &&
      correct2 &&
      correct3 &&
      correct4 &&
      correct5 &&
      options1 &&
      options2 &&
      options3 &&
      options4 &&
      options5 &&
      question1 &&
      question2 &&
      question3 &&
      question4 &&
      question5
    )
  ) {
    return res
      .status(422)
      .json({ error: "Please fill all the required fields", status: 422 });
  }

  try {
    const data = new Course({
      category,
      chapter,
      content,
      correct1,
      correct2,
      correct3,
      correct4,
      correct5,
      options1,
      options2,
      options3,
      options4,
      options5,
      question1,
      question2,
      question3,
      question4,
      question5,
      topic,
      // quiz,
    });

    await data.save();

    res.status(201).json({ message: "Chapter added successfully." });
  } catch (err) {
    res.status(500).json({
      error: "An error occured, please try again later. \n Error:",
      status: 500,
      err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(422).json({ error: "Incomplete information" });
  }
  // const { quizPerformance, notes } = req.body;
  // if (!(quizPerformance || notes)) {
  //   return res.status(422).json({ error: "Incomplete information" });
  // }
  try {
    // const data = new User({ quizPerformance, notes });
    const data = new User({ name });

    await data.save();

    res.status(201).json({ message: "User information saved successfully." });
  } catch (err) {
    res.status(500).json({
      error: "An error occured, please try again later. \n Error:",
      err,
    });
  }
});

module.exports = router;
