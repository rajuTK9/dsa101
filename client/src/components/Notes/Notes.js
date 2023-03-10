import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import "./Notes.css";
import { useNavigate } from "react-router";
import GetUser from "../../data/GetUser";

export default function EditNotes() {
  const user = GetUser();
  const [notes, setNotes] = useState();
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    if (user) setNotes(user.notes);
  }, [user]);

  const editor = useRef(null);
  const navigate = useNavigate();

  const saveNotes = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/save-notes",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
            notes,
          }),
        }
      );
      const data = await res.json();
      if (data.status === 422 || data.status === 500) {
        alert(data.error);
        return data.error;
      } else {
        alert(data.message);
        setIsChanged(false);
      }
    } catch (err) {
      console.log("An error occured: " + err);
    }
  };

  console.log(isChanged);

  window.onbeforeunload = (e) => {
    if (isChanged) {
      e.preventDefault();
      return "";
    }
  };

  window.close = (e) => {
    if (isChanged) {
      e.preventDefault();
      return "";
    }
  };

  return (
    <div className="edit-notes">
      <div className="save-btn-container">
        <button className="save-btn btn btn-primary" onClick={saveNotes}>
          <img src="/assets/icons/notes-save.svg" alt="" />
        </button>
      </div>
      <div className="go-back-btn btn btn-primary" onClick={() => navigate(-1)}>
        <img src="/assets/icons/arrow-left-black.svg" alt="" />
        Go back
      </div>
      <div className="editor-container">
        <JoditEditor
          ref={editor}
          value={notes}
          onChange={(newText) => {
            setIsChanged(true);
            setNotes(newText);
          }}
        />
      </div>
      {/* <p dangerouslySetInnerHTML={{ __html: text }}></p> */}
    </div>
  );
}
