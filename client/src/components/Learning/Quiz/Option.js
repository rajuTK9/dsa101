import React from "react";
import "./Option.css";

export default function Option(props) {
  return props.isSubmitted ? (
    <div
      className={
        props.userAnswer === props.correctAnswer &&
        props.correctAnswer === props.id
          ? "option correct"
          : props.userAnswer !== props.correctAnswer &&
            props.userAnswer === props.id
          ? "option wrong"
          : props.userAnswer !== props.correctAnswer &&
            props.correctAnswer === props.id
          ? "option correct"
          : "option"
      }
      id={props.id}
    >
      {props.text}
    </div>
  ) : (
    <div className="option" id={props.id} onClick={props.selectOption}>
      {props.text}
    </div>
  );
}
