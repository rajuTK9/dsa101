import React from "react";
import "./Navbar.css";
// import Login from "../Login/Login";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginAuth0 from "../Login/LoginAuth0";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="assets/logo-full.svg" alt="DSA101" className="logo-img" />
        </div>
        <div className="logo-small">
          <img src="assets/logo-chart.svg" alt="DSA101" className="logo-img" />
        </div>
      </Link>
      <Auth0Provider
        domain="dev-ynlvngvzhos0c4m0.us.auth0.com"
        clientId="EX3BsaTmmEAZyZ8MtKObZhncV6fNkHqZ"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <LoginAuth0 />
      </Auth0Provider>
      {/* <GoogleOAuthProvider clientId="484839371598-8359bacl69e86c2oa2hotfbqmug26s74.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider> */}
    </div>
  );
}
