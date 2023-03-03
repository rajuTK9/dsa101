import React, { useState } from "react";
import Quiz from "./Quiz/Quiz";
import "./Learning.css";
import Result from "./Quiz/Result/Result";
import TakeQuiz from "./Quiz/TakeQuiz/TakeQuiz";
import LearningIndex from "./LearningIndex/LearningIndex";
import Content from "./Content/Content";
import LearningNavigation from "./LearningNavigation/LearningNavigation";
import GetCourse from "../../data/GetCourse";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Learning() {
  const [quizRendering, setQuizRendering] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [attempted, setAttempted] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chapterIndex, setChapterIndex] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const courseData = GetCourse(`/chapters/${params.id}`);

  const deleteChapter = async () => {
    try {
      const res = await fetch(`/delete/${courseData._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.status === 422 || data.status === 500) {
        alert(data.error);
        return data.error;
      } else {
        alert(data.message);
      }
    } catch (err) {
      return "An erros occured: " + err;
    }
  };

  function handleDelete() {
    const concent = prompt(`Type 'y' to delte "${courseData.chapter}" chapter`);
    if (concent === "y") {
      deleteChapter();
      navigate(`/${courseData.category}`);
    }
  }
  return (
    <>
      <div className="learning-container">
        {courseData && (
          <div className="learning-main">
            <div className="learning-index-container">
              <LearningIndex chapterIndex={chapterIndex} />
            </div>
            <div className="learning-content-container">
              <div className="admin-btns">
                <Link to={`/admin-upload/${courseData.chapter}`}>
                  <button className="chapter-edit-btn">
                    <img src="/assets/icons/notes-edit.svg" alt="" />
                  </button>
                </Link>
                <button className="chapter-delete-btn" onClick={handleDelete}>
                  <img src="/assets/icons/chapter-delete.svg" alt="" />
                </button>
              </div>
              <Content
                setChapterIndex={setChapterIndex}
                data={courseData.content}
                title={courseData.chapter}
              />
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
                    courseData={courseData}
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
                    courseData={courseData}
                  />
                ) : (
                  <>OOPS! 404 - NOT FOUND...</>
                )}
              </div>

              <LearningNavigation
                category={courseData.category}
                chapterId={courseData.chapterId}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
