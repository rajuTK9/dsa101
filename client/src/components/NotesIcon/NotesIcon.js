import React from "react";
import "./NotesIcon.css";
import { Link } from "react-router-dom";

export default function NotesIcon() {
  function openNotes() {}
  return (
    <Link to="/notes">
      <div className="notes-icon" onClick={openNotes}>
        <img src="/assets/icons/notes.svg" alt="" />
      </div>
    </Link>
  );
}
