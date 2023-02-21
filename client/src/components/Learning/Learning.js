import React, { useState } from "react";
import Quiz from "./Quiz/Quiz";
import "./Learning.css";
import Result from "./Quiz/Result/Result";
import TakeQuiz from "./Quiz/TakeQuiz/TakeQuiz";

export default function Learning() {
  const [quizRendering, setQuizRendering] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [attempted, setAttempted] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div>
      Learning
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
  );
}
