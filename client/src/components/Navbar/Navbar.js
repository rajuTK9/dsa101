import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Login/LoginButton";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="/assets/logo-full.svg" alt="DSA101" className="logo-img" />
        </div>
        <div className="logo-small">
          <img src="/assets/logo-chart.svg" alt="DSA101" className="logo-img" />
        </div>
      </Link>
      <LoginButton />
    </div>
  );
}
