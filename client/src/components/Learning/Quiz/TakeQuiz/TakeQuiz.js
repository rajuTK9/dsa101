import React, { useState } from "react";
import "./TakeQuiz.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginAuth0 from "../../../Login/LoginAuth0";
import Quiz from "../Quiz";

export default function TakeQuiz(props) {
  const [startQuiz, setStartQuiz] = useState(false);

  const { isAuthenticated } = useAuth0();

  return (
    <div className="quiz-container">
      {startQuiz ? (
        <>
          {isAuthenticated ? (
            <>
              {" "}
              {props.setQuizRendering("quiz")} <Quiz />
            </>
          ) : (
            <LoginAuth0 />
          )}
        </>
      ) : (
        <button
          className="ans-btn result-btn btn"
          onClick={() => setStartQuiz(true)}
        >
          Take the quiz <img src="/assets/icons/arrow-right-white.svg" alt="" />
        </button>
      )}
    </div>
  );
}
