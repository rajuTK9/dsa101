const express = require("express");
const router = express.Router();

const Course = require("../model/courseSchema");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("DSA101 Home");
});

router.post("/admin-upload", async (req, res) => {
  const { category, topic, chapter, content, quiz } = req.body;
  if (!(category || topic || chapter || content || quiz)) {
    return res
      .status(422)
      .json({ error: "Please fill all the required fields" });
  }

  try {
    const data = new Course({ category, topic, chapter, content, quiz });

    await data.save();

    res.status(201).json({ message: "Chapter added successfully." });
  } catch (err) {
    res.status(500).json({
      error: "An error occured, please try again later. \n Error:",
      err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { quizPerformance, notes } = req.body;
  if (!(quizPerformance || notes)) {
    return res.status(422).json({ error: "Incomplete information" });
  }
  try {
    const data = new User({ quizPerformance, notes });

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
