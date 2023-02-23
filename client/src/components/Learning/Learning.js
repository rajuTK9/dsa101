import React, { useState, useEffect } from "react";
import Quiz from "./Quiz/Quiz";
import "./Learning.css";
import Result from "./Quiz/Result/Result";
import TakeQuiz from "./Quiz/TakeQuiz/TakeQuiz";
import LearningIndex from "./LearningIndex/LearningIndex";
import Content from "./Content/Content";

export default function Learning() {
  const [quizRendering, setQuizRendering] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [attempted, setAttempted] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoContent, setDemoContent] = useState("");

  useEffect(() => {
    setDemoContent(`
    <h1>Topic 1: Lorem ipsum dolor</h1>
<iframe
  width="400px"
  height="345px"
  src="https://www.youtube.com/embed/zuLAVVY7SIc"
  frameborder="0"
  allowfullscreen=""
></iframe>
<blockquote>
  <a href="https://leetcode.com">Question name</a>
  <br />
  Lorem ipsum dolor sit amet consectetur. Sagittis scelerisque leo suspendisse
  mauris sed semper dolor malesuada accumsan.
</blockquote>
<br />
<p>
  Lorem ipsum dolor sit amet consectetur. Et in adipiscing condimentum purus
  elit proin tristique. In mattis viverra vivamus quam nunc rhoncus.
  Sollicitudin integer donec venenatis sagittis. Magna tincidunt sed integer
  quis vitae integer mattis arcu quis. Aliquam dolor et tempus nisl neque amet.
  Tempus purus felis amet sed tempus enim.
</p>
<h1>Topic 2: Lorem ipsum dolor</h1>
<iframe
  width="400px"
  height="345px"
  src="https://www.youtube.com/embed/zuLAVVY7SIc"
  frameborder="0"
  allowfullscreen=""
></iframe>
<blockquote>
  <a href="https://leetcode.com">Question name</a>
  <br />
  Lorem ipsum dolor sit amet consectetur. Sagittis scelerisque leo suspendisse
  mauris sed semper dolor malesuada accumsan.
</blockquote>
<br />
<p>
  Lorem ipsum dolor sit amet consectetur. Et in adipiscing condimentum purus
  elit proin tristique. In mattis viverra vivamus quam nunc rhoncus.
  Sollicitudin integer donec venenatis sagittis. Magna tincidunt sed integer
  quis vitae integer mattis arcu quis. Aliquam dolor et tempus nisl neque amet.
  Tempus purus felis amet sed tempus enim.
</p>
<h1>Topic 3: Lorem ipsum dolor</h1>
<iframe
  width="400px"
  height="345px"
  src="https://www.youtube.com/embed/zuLAVVY7SIc"
  frameborder="0"
  allowfullscreen=""
></iframe>
<blockquote>
  <a href="https://leetcode.com">Question name</a> <br />
  Lorem ipsum dolor sit amet consectetur. Sagittis scelerisque leo suspendisse
  mauris sed semper dolor malesuada accumsan.
</blockquote>
<br />
<p>
  Lorem ipsum dolor sit amet consectetur. Et in adipiscing condimentum purus
  elit proin tristique. In mattis viverra vivamus quam nunc rhoncus.
  Sollicitudin integer donec venenatis sagittis. Magna tincidunt sed integer
  quis vitae integer mattis arcu quis. Aliquam dolor et tempus nisl neque amet.
  Tempus purus felis amet sed tempus enim.
</p>

    `);
  }, []);

  return (
    <div className="learning-container">
      <div className="learning-main">
        <div className="learning-index-container">
          <LearningIndex />
        </div>
        <div className="learning-content-container">
          <Content data={demoContent} />
          <div className="learning-quiz">
            {quizRendering === "" ? (
              <TakeQuiz setQuizRendering={setQuizRendering} />
            ) : quizRendering === "quiz" ? (
              <Quiz
                setQuizRendering={setQuizRendering}
                setScore={setScore}
                score={score}
                setUserAnswer={setUserAnswer}
                userAnswer={userAnswer}
                setAttempted={setAttempted}
                attempted={attempted}
                setIsSubmitted={setIsSubmitted}
                isSubmitted={isSubmitted}
              />
            ) : quizRendering === "result" ? (
              <Result
                setQuizRendering={setQuizRendering}
                score={score}
                attempted={attempted}
              />
            ) : quizRendering === "answer" ? (
              // <Answer setQuizRendering={setQuizRendering} />
              <Quiz
                setQuizRendering={setQuizRendering}
                setScore={setScore}
                score={score}
                setUserAnswer={setUserAnswer}
                userAnswer={userAnswer}
                setAttempted={setAttempted}
                attempted={attempted}
                setIsSubmitted={setIsSubmitted}
                isSubmitted={isSubmitted}
              />
            ) : (
              <>OOPS! 404 - NOT FOUND...</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
