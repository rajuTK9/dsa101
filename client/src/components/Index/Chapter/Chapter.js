import React from "react";
import "./Chapter.css";
import { Link } from "react-router-dom";

export default function Chapter(props) {
  return (
    <Link to={`/learning/${props.title}`}>
      <div className="chapter-container">
        <div className="chapter-progress">
          {props.status && (
            <img
              src={`./assets/icons/progress-icons/${props.status}.svg`}
              alt=""
            />
          )}
        </div>
        <div className="chapter-main">
          <div className="chapter-content">
            <h3 className="chapter-title">{props.title}</h3>
            <p className="chapter-description">{props.description}</p>
          </div>
          <div className="chapter-arrow">
            <img src="./assets/icons/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// Chapter.defaultProps = {
//   isDone: false,
//   isCurrent: false,
//   isPending: false,
// };
