import React from "react";
import "./FormQuiz.css";

export default function FormQuiz(props) {
  const { quiz, id } = props;
  let content = quiz;
  let options = quiz[id - 1].options;

  function onChangeHandle(e) {
    const { name, value } = e.target;

    content[id - 1] = { ...content[id - 1], [name]: value };

    props.setFormData({
      ...props.formData,
      quiz: content,
    });
  }

  function handleOptions(e) {
    options[e.target.id] = e.target.value;
    console.log(options);
    content[id - 1] = { ...content[id - 1], options: options };
    props.setFormData({
      ...props.formData,
      quiz: content,
    });
  }

  return (
    <div className="quiz-question-container">
      <div className="form-item">
        <label>Q{props.id}.</label>
        <input
          type="text"
          placeholder="Question"
          name="question"
          onChange={onChangeHandle}
        />
      </div>
      <div className="form-item">
        <label>Options</label>
        <div className="options-container">
          <input
            name="optionA"
            placeholder="Option A"
            id="0"
            type="text"
            onChange={handleOptions}
          />
          <input
            name="optionB"
            placeholder="Option B"
            id="1"
            type="text"
            onChange={handleOptions}
          />
          <input
            name="optionC"
            placeholder="Option C"
            id="2"
            type="text"
            onChange={handleOptions}
          />
          <input
            name="optionD"
            placeholder="Option D"
            id="3"
            type="text"
            onChange={handleOptions}
          />
        </div>
      </div>
      <div className="form-item">
        <label>Correct Index</label>
        <input
          name="correct"
          type="number"
          placeholder="0"
          onChange={onChangeHandle}
        />
      </div>
    </div>
  );
}
