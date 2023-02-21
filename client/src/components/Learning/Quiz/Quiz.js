import React, { useState, useRef } from "react";
import "./Quiz.css";
import quiz from "./sample_questions";

export default function Quiz() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState(-1);
  // const [attempted, setAttempted] = useState(0);

  const option = useRef();

  function remove_active() {
    document.querySelectorAll(".option").forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  }

  function evaluate() {
    if (selectedId === quiz[count].correct.toString())
      setScore((score) => (score += 1));
  }

  function select_option(e) {
    remove_active();
    setSelectedId(e.target.id);
    e.target.classList.add("active");
  }

  function prev() {
    remove_active();
    if (count > 0) setCount((count) => (count -= 1));
  }

  function next() {
    remove_active();
    console.log(score);
    evaluate();
    if (count < 4) setCount((count) => (count += 1));
  }

  return (
    <div className="quiz-container">
      <div className="quiz-count">
        <h1>Q{count + 1}.</h1>
      </div>
      <p className="quiz-question-count">Total: 5</p>
      <div className="quiz-main">
        <div className="quiz-content">
          <div className="quiz-question">
            <h3>{quiz[count].question}</h3>
          </div>
          <div className="quiz-options">
            <div className="option" id="0" onClick={select_option} ref={option}>
              {quiz[count].options[0]}
            </div>
            <div className="option" id="1" onClick={select_option} ref={option}>
              {quiz[count].options[1]}
            </div>
            <div className="option" id="2" onClick={select_option} ref={option}>
              {quiz[count].options[2]}
            </div>
            <div className="option" id="3" onClick={select_option} ref={option}>
              {quiz[count].options[3]}
            </div>
          </div>
        </div>
        <div className="quiz-nav">
          <div className="quiz-nav-btn quiz-nav-prev" onClick={prev}>
            <img src="./assets/icons/arrow-left-black.svg" alt="" />
            Prev
          </div>
          Score: {score}
          <div className="quiz-nav-btn quiz-nav-nxt" onClick={next}>
            Next
            <img src="./assets/icons/arrow-right-white.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
