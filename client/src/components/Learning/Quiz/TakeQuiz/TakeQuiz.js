import React, { useState } from "react";
import "./TakeQuiz.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginAuth0 from "../../../Login/LoginAuth0";
import Quiz from "../Quiz";
import GetUser from "../../../../data/GetUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TakeQuiz(props) {
  const [startQuiz, setStartQuiz] = useState(false);

  const user = GetUser();

  const { isAuthenticated } = useAuth0();

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const markAsDone = async () => {
    user.completed_chapters.push({
      category: props.category,
      chapter: props.chapter,
    });
    user.completed_chapters = removeDuplicates(user.completed_chapters);
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
        toast.error(data.error);
        return data.error;
      } else {
        toast.success(data.message);
      }
    } catch (err) {
      console.log("An error occured: " + err);
    }
  };

  return (
    <div className="quiz-container">
      {startQuiz ? (
        <>
          {isAuthenticated && !props.markDone ? (
            <>
              {props.setQuizRendering("quiz")} <Quiz />
            </>
          ) : isAuthenticated && props.markDone ? (
            <button
              className="ans-btn result-btn btn"
              onClick={() => markAsDone}
            >
              Mark As Done
              <img src="/assets/icons/tick.svg" alt="" />
            </button>
          ) : (
            <LoginAuth0 />
          )}
        </>
      ) : props.markDone ? (
        <button
          className="ans-btn result-btn btn"
          onClick={() => {
            isAuthenticated ? markAsDone() : setStartQuiz(true);
          }}
        >
          Mark As Done
          <img src="/assets/icons/tick.svg" alt="" />
        </button>
      ) : (
        <button
          className="ans-btn result-btn btn"
          onClick={() => setStartQuiz(true)}
        >
          Take the quiz <img src="/assets/icons/arrow-right-white.svg" alt="" />
        </button>
      )}
      <ToastContainer />
    </div>
  );
}
