import React from "react";
import "./Result.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Result(props) {
  const percentage = (100 / 5) * props.score;
  return (
    <div className="quiz-container">
      <div className="result-heading">
        <h1>Your Score:</h1>
      </div>
      <div className="quiz-main">
        <div className="result-content">
          <div className="progress-graph">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Colors
                pathColor: `var(--tropical-indigo)`,
                textColor: "var(--black)",
                trailColor: "var(--periwinkle)",
                backgroundColor: "transparent",
              })}
            />
          </div>
          <div className="report">
            <div className="report-row">
              <div className="legend">Total Questions</div>
              <div className="score">5</div>
            </div>
            <div className="report-row">
              <div className="legend">Correct Answers</div>
              <div className="score">{props.score}</div>
            </div>
            <div className="report-row">
              <div className="legend">Wrong Answers</div>
              <div className="score">{props.attempted - props.score}</div>
            </div>
            <div className="report-row">
              <div className="legend">Questions Attempted</div>
              <div className="score">{props.attempted}</div>
            </div>
          </div>
        </div>
        <button
          className="ans-btn result-btn btn"
          onClick={() => props.setQuizRendering("answer")}
        >
          Check answers <img src="/assets/icons/arrow-right-white.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
