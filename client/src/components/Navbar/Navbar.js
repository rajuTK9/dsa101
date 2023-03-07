import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Login/LoginButton";

export default function Navbar() {
  // const setDarkMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "dark");
  // };
  // const setLightMode = () => {
  //   document.querySelector("body").setAttribute("data-theme", "light");
  // };
  // const toggleTheme = (e) => {
  //   if (e.target.checked) setDarkMode();
  //   else setLightMode();
  // };
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
      {/* <input type="checkbox" className="dark-mode-btn" onClick={toggleTheme} />
      Dark Mode */}
      <LoginButton />
    </div>
  );
}
