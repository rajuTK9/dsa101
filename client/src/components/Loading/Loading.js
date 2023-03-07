import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <img
        src="/assets/animations/loading.gif"
        alt=""
        className="loading-img"
      />
    </div>
  );
}
