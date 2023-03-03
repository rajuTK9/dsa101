import React, { useState } from "react";
import "./NotesIcon.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";

export default function NotesIcon() {
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  function openNotes() {
    if (isAuthenticated) navigate("/notes");
    else setShowLogin(true);
  }
  return (
    <div className="notes-icon-container">
      {showLogin ? (
        <LoginButton />
      ) : (
        // <Link to="/notes">
        <div className="notes-icon" onClick={openNotes}>
          <img src="/assets/icons/notes.svg" alt="" />
        </div>
        // </Link>
      )}
    </div>
  );
}
