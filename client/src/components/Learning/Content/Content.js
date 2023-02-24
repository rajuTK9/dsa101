import React from "react";
import "./Content.css";

export default function Content(props) {
  const { data } = props;
  return (
    <>
      <h1 className="chapter-title">
        Chapter 4: Lorem ipsum dolor sit amet consectetur.
      </h1>
      <div className="index-divider"></div>
      <div
        className="learning-content"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </>
  );
}
