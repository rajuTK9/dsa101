import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="/assets/illustrations/404-error.svg"
        alt=""
      />
      <button className="btn btn-primary go-home-btn">Go to home</button>
    </div>
  );
}
