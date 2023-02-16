import React from "react";
import Login from "../Login/Login";
import "./Navbar.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="assets/logo-full.svg" alt="DSA101" className="logo-img" />
      </div>
      <GoogleOAuthProvider clientId="484839371598-8359bacl69e86c2oa2hotfbqmug26s74.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}
