import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome-section">
      <img
        src="/assets/illustrations/welcome.svg"
        alt=""
        className="welcome-img"
      />
      <h3 className="welcome-txt">
        Pick a topic from the sidebar to get started!
      </h3>
    </div>
  );
}
