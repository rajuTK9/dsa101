import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./CourseUpload.css";
import FormQuiz from "./FormQuiz/FormQuiz";
export default function CourseUpload() {
  // const [content, setContent] = useState("");
  const editor = useRef(null);

  const initialValues = {
    category: "Basics",
    topic: "Basics of C++",
    chapter: "",
    content: "",
    // quiz: [{}, {}, {}, {}, {}],
    // quizDemo: [
    //   {
    //     question: "Question 1",
    //     options: ["option 1", "option 2", "option 3", "option 4"],
    //     correct: "1",
    //   },
    // ],
  };
  const [formData, setFormData] = useState(initialValues);

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
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
    } = formData;
    const res = await fetch("/admin-upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });
    const data = await res.json();

    if (data.status === 422 || data.status === 500) {
      alert(data.error);
    } else {
      alert("Chapter added scuccessfully!");
    }

    console.log(data);
  };
  return (
    <div className="course-upload-container">
      <h1 className="heading">Upload the course</h1>
      <form method="POST" onSubmit={handleSubmit} className="course-form">
        <div className="form-item-wrapper">
          <div className="form-item">
            <label htmlFor="course-category">Category</label>
            <select
              name="category"
              id="course-category"
              onChange={onChangeHandler}
            >
              <option value={"Basics"}>Basics</option>
              <option value={"Starter"}>Starter</option>
              <option value={"Advance"}>Advance</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="course-topic">Topic</label>
            <select name="topic" id="course-topic" onChange={onChangeHandler}>
              <option value={"Basics of C++"}>Basics of C++</option>
              <option value={"Strings"}>Strings</option>
              <option value={"Arrays"}>Array</option>
              <option value={"Loops"}>Loops</option>
              <option value={"Linked List"}>Linked List</option>
              <option value={"Hashmap"}>Hashmap</option>
              <option value={"Heap"}>Heap</option>
              <option value={"D.P."}>D.P.</option>
              <option value={"Vector"}>Vector</option>
              <option value={"Queue"}>Queue</option>
              <option value={"Stack"}>Stack</option>
            </select>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="course-chapter">Chapter</label>
          <input
            type="text"
            name="chapter"
            placeholder="Chapter"
            onChange={onChangeHandler}
            id="course-chapter"
          />
        </div>
        <div className="form-item">
          <label>Content</label>
          <div className="editor-container">
            <JoditEditor
              ref={editor}
              value={formData.content}
              onChange={(newContent) => {
                setFormData({ ...formData, content: newContent });
              }}
            />
          </div>
        </div>
        <div className="form-item course-quiz-container">
          <h2 className="quiz-title">Quiz</h2>
          <FormQuiz
            formData={formData}
            setFormData={setFormData}
            id={1}
            onChangeHandler={onChangeHandler}
          />
          <FormQuiz
            formData={formData}
            setFormData={setFormData}
            id={2}
            onChangeHandler={onChangeHandler}
          />
          <FormQuiz
            formData={formData}
            setFormData={setFormData}
            id={3}
            onChangeHandler={onChangeHandler}
          />
          <FormQuiz
            formData={formData}
            setFormData={setFormData}
            id={4}
            onChangeHandler={onChangeHandler}
          />
          <FormQuiz
            formData={formData}
            setFormData={setFormData}
            id={5}
            onChangeHandler={onChangeHandler}
          />
        </div>

        <button
          className="btn btn-primary course-submit-btn"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
