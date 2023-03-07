import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img
        className="not-found-img"
        src="/assets/illustrations/404-error.svg"
        alt=""
      />
      <Link to={"/"} className="btn btn-primary go-home-btn">
        Go to home
      </Link>
    </div>
  );
}
