import React from "react";
import "./Chapter.css";

export default function Chapter(props) {
  return (
    <div className="chapter-container">
      <h3 className="chapter-title">{props.title}</h3>
      <p className="chapter-description">{props.description}</p>
    </div>
  );
}
