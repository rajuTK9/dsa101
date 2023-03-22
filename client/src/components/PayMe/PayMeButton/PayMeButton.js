import React from "react";
import "./PayMeButton.css";
import { Link } from "react-router-dom";

export default function PayMeButton() {
  return (
    <button className="pay-me-btn">
      <Link to="/payme">
        <img
          src="/assets/icons/buy-me-a-coffee.svg"
          alt="Buy Me a Coffee ☕️"
        />
      </Link>
    </button>
  );
}
