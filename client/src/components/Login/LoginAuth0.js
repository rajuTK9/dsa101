import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

export default function LoginAuth0() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  return isAuthenticated ? (
    <button
      className="btn btn-primary google-login-btn logged-in-btn"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <img src={user.picture} alt="" className="google-logo" />
      <span className="login-btn-txt">Hi, {user.name.split(" ")[0]}</span>
    </button>
  ) : isLoading ? (
    <div>Loading ...</div>
  ) : (
    <button
      className="btn btn-primary google-login-btn"
      onClick={() => loginWithRedirect()}
    >
      <img
        src="/assets/icons/google-logo.svg"
        alt="G"
        className="google-logo"
      />
      <span className="login-btn-txt">Login</span>
    </button>
  );
}
