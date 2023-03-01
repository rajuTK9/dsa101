const express = require("express");
const router = express.Router();

const Course = require("../model/courseSchema");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("DSA101 Home");
});

router.get("/get-course", async (req, res) => {
  try {
    const courseData = await Course.find({});
    res.json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/categories/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const courseData = await Course.find({ category: req.params.id });
    res.json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/topics/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const courseData = await Course.find({ topic: req.params.id });
    res.json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/chapters/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const courseData = await Course.findOne({ chapter: req.params.id });
    res.json(courseData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/chapterId/:category/:id", async (req, res) => {
  const id = Number(req.params.id);
  const category = req.params.category;
  try {
    let prevChapter = "",
      nxtChapter = "";
    prevChapter = await Course.findOne({
      category: category,
      chapterId: id - 1,
    });
    nxtChapter = await Course.findOne({
      category: category,
      chapterId: id + 1,
    });
    const chapterNames = {
      prevChapter,
      nxtChapter,
    };
    res.json(chapterNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/admin-upload", async (req, res) => {
  const { category, chapter, content, quiz, topic, chapterId } = req.body;
  if (!(category && topic && chapter && content && quiz && chapterId)) {
    return res
      .status(422)
      .json({ error: "Please fill all the required fields", status: 422 });
  }

  try {
    const data = new Course({
      category,
      chapter,
      content,
      topic,
      quiz,
      chapterId,
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
