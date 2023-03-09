import React, { useState } from "react";
import "./Quiz.css";
import Option from "./Option/Option";
import GetUser from "../../../data/GetUser";

export default function Quiz(props) {
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(-1);
  const [warning, setWarning] = useState("");

  const user = GetUser();

  const {
    setQuizRendering,
    setScore,
    score,
    setUserAnswer,
    userAnswer,
    setAttempted,
    setIsSubmitted,
    isSubmitted,
    courseData,
  } = props;

  const markAsDone = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/update-chapter",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
            completed_chapters: user.completed_chapters,
          }),
        }
      );
      const data = await res.json();
      if (data.status === 422 || data.status === 500) {
        alert(data.error);
        return data.error;
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("An error occured: " + err);
    }
  };

  function remove_active() {
    document.querySelectorAll(".option").forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  }

  function evaluate() {
    if (selectedId === courseData.quiz[count].correct.toString())
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

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  function next() {
    if (selectedId === -1 && !isSubmitted) {
      setWarning("Please select an option to go next");
      return;
    }
    setWarning("");
    remove_active();
    if (selectedId >= 0) setAttempted((attempted) => (attempted += 1));
    setUserAnswer([...userAnswer, { option: Number(selectedId) }]);
    evaluate();
    setSelectedId(-1);
    if (count < 4) setCount((count) => (count += 1));
    else {
      setIsSubmitted(true);
      user.completed_chapters.push(courseData.chapter);
      user.completed_chapters = removeDuplicates(user.completed_chapters);
      markAsDone();
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
            {/* <h3>{quiz[count].question}</h3> */}
            <h3>{courseData.quiz[count].question}</h3>
          </div>
          <div className="quiz-options">
            {isSubmitted
              ? courseData.quiz[count].options.map((e, i) => {
                  return (
                    <Option
                      text={e}
                      id={i}
                      key={i}
                      userAnswer={userAnswer[count].option}
                      correctAnswer={Number(courseData.quiz[count].correct)}
                      isSubmitted={isSubmitted}
                    />
                  );
                })
              : courseData.quiz[count].options.map((e, i) => {
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
          {warning ? (
            <p className="quiz-warning">{warning}</p>
          ) : (
            <p className="quiz-score">Score: {score}</p>
          )}
          <button className="quiz-nav-btn quiz-nav-nxt" onClick={next}>
            Next
            <img src="/assets/icons/arrow-right-white.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
