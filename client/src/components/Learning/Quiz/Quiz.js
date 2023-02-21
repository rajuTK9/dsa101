import React, { useState } from "react";
import "./Quiz.css";
import quiz from "./sample_questions";
import Option from "./Option";

export default function Quiz(props) {
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(-1);

  const {
    setQuizRendering,
    setScore,
    score,
    setUserAnswer,
    userAnswer,
    setAttempted,
    setIsSubmitted,
    isSubmitted,
  } = props;

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

  // function prev() {
  //   remove_active();
  //   if (count > 0) setCount((count) => (count -= 1));
  // }

  function next() {
    remove_active();
    if (selectedId >= 0) setAttempted((attempted) => (attempted += 1));
    setUserAnswer([...userAnswer, { option: Number(selectedId) }]);
    evaluate();
    if (count < 4) setCount((count) => (count += 1));
    else {
      setIsSubmitted(true);
      console.log(userAnswer);
      setQuizRendering("result");
    }
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
            {isSubmitted
              ? quiz[count].options.map((e, i) => {
                  return (
                    <Option
                      text={e}
                      id={i}
                      key={i}
                      userAnswer={userAnswer[count].option}
                      correctAnswer={quiz[count].correct}
                      isSubmitted={isSubmitted}
                    />
                  );
                })
              : quiz[count].options.map((e, i) => {
                  return (
                    <Option
                      text={e}
                      id={i}
                      key={i}
                      selectOption={select_option}
                      isSubmitted={isSubmitted}
                    />
                  );
                })}
          </div>
        </div>
        <div className="quiz-nav">
          {/* <div className="quiz-nav-btn quiz-nav-prev" onClick={prev}>
            <img src="/assets/icons/arrow-left-black.svg" alt="" />
            Prev
          </div> */}
          Score: {score}
          <div className="quiz-nav-btn quiz-nav-nxt" onClick={next}>
            Next
            <img src="/assets/icons/arrow-right-white.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
