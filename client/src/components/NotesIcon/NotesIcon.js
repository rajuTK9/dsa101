import React from "react";
import "./NotesIcon.css";

export default function NotesIcon() {
  function openNotes() {}
  return (
    <div className="notes-icon" onClick={openNotes}>
      <img src="/assets/icons/notes.svg" alt="" />
    </div>
  );
}
