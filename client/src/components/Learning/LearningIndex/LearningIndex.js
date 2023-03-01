import React from "react";
import "./LearningIndex.css";

export default function LearningIndex(props) {
  return (
    <div className="learning-index-box">
      {/* <div className="learning-index-item active">
        Topic 1: Lorem ipsum dolor
      </div> */}
      {props.chapterIndex.map((e, i) => {
        return (
          <>
            <div className="learning-index-item">
              <a href={`#${e.split(" ").join("")}`}>{e}</a>
            </div>
            <div className="index-divider"></div>
          </>
        );
      })}
      {/* <div className="index-divider"></div>
      <div className="learning-index-item">Topic 2: Lorem ipsum dolor</div>
      <div className="index-divider"></div>
      <div className="learning-index-item">Topic 3: Lorem ipsum dolor</div>
      <div className="index-divider"></div> */}
    </div>
  );
}
