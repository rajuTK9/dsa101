import React from "react";
import "./FormQuiz.css";

export default function FormQuiz(props) {
  const { onChangeHandler } = props;
  //   function onChangeHandler(e) {
  //     const { name, value } = e.target;
  //     props.setFormData({ ...props.formData, [name]: value });
  //   }
  return (
    <div className="quiz-question-container">
      <div className="form-item">
        <label>Q{props.id}.</label>
        <input
          type="text"
          placeholder="Question"
          name={`question${props.id}`}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-item">
        <label>Options</label>
        <textarea
          name={`options${props.id}`}
          id="options"
          cols="30"
          rows="5"
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div className="form-item">
        <label>Correct Index</label>
        <input
          name={`correct${props.id}`}
          type="text"
          placeholder="0"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
