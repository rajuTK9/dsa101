import React from "react";
import "./LearningNavigation.css";
import GetCourse from "../../../data/GetCourse";
import { Link } from "react-router-dom";

export default function LearningNavigation(props) {
  const { chapterId, category } = props;
  const chapterName = GetCourse(`/chapterId/${category}/${chapterId}`);
  return (
    <div className="learning-nav">
      <div className="index-divider"></div>
      <div className="learning-btns-container">
        {chapterName && chapterName.prevChapter ? (
          <Link to={`/learning/${chapterName.prevChapter.chapter}`}>
            <div className="learning-btn btn-prev">
              <img src="/assets/icons/arrow-left-black.svg" alt="" />
              <div className="learning-btn-body">
                <div className="learning-btn-subtitle">Previous:</div>
                <div className="learning-btn-title">
                  {" "}
                  {chapterName.prevChapter.chapter}
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {chapterName && chapterName.nxtChapter ? (
          <Link to={`/learning/${chapterName.nxtChapter.chapter}`}>
            <div className="learning-btn btn-nxt">
              <div className="learning-btn-body">
                <div className="learning-btn-subtitle">Next:</div>
                <div className="learning-btn-title">
                  {chapterName.nxtChapter.chapter}
                </div>
              </div>
              <img src="/assets/icons/arrow-right-white.svg" alt="" />
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
