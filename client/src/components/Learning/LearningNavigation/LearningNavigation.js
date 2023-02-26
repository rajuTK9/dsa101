import React from "react";
import "./LearningNavigation.css";

export default function LearningNavigation() {
  return (
    <div className="learning-nav">
      <div className="index-divider"></div>
      <div className="learning-btns-container">
        <div className="learning-btn btn-prev">
          <img src="/assets/icons/arrow-left-black.svg" alt="" />
          <div className="learning-btn-body">
            <div className="learning-btn-subtitle">Previous:</div>
            <div className="learning-btn-title">Chapter 3</div>
          </div>
        </div>
        <div className="learning-btn btn-nxt">
          <div className="learning-btn-body">
            <div className="learning-btn-subtitle">Next:</div>
            <div className="learning-btn-title">Chapter 5</div>
          </div>
          <img src="/assets/icons/arrow-right-white.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
