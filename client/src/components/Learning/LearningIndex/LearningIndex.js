import React from "react";
import "./LearningIndex.css";

export default function LearningIndex() {
  return (
    <div className="learning-index-box">
      <div className="learning-index-item active">
        Topic 1: Lorem ipsum dolor
      </div>
      <div className="index-divider"></div>
      <div className="learning-index-item">Topic 2: Lorem ipsum dolor</div>
      <div className="index-divider"></div>
      <div className="learning-index-item">Topic 3: Lorem ipsum dolor</div>
      <div className="index-divider"></div>
    </div>
  );
}
