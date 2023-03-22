import React, { useState } from "react";
import GetTopics from "../../../data/GetTopics";
import "../CourseUpload/CourseUpload.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddTopics() {
  const [newTopic, setNewTopic] = useState("");
  const topics = GetTopics();

  function onChangeHandler(e) {
    setNewTopic(e.target.value);
  }
  const addTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/add-topic", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTopic,
        }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        return data.error;
      } else {
        toast(data.message);
      }
    } catch (err) {
      console.log("An error occured: " + err);
    }
  };

  return (
    topics && (
      <div className="course-upload-container">
        <h1 className="heading">Add a new topic</h1>
        <form method="PUT" onSubmit={addTopic} className="course-form">
          <div className="form-item">
            <label htmlFor="topic-list">Topics' List</label>
            <select name="topic" id="topic-list">
              {topics.map((e, i) => {
                return (
                  <option key={i} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="topic-new">Add a new topic</label>
            <input type="text" id="topic-new" onChange={onChangeHandler} />
            <button className="btn btn-primary add-topic-btn" type="submit">
              Add The Topic
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    )
  );
}
