import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginAuth0() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const [alert, setAlert] = useState(false);
  const sendUserData = async () => {
    try {
      const { name, sub } = user;
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          notes: `<p>Hi ${name}. Write your first note here...!</p>`,
          uid: sub,
          completed_chapters: [],
        }),
      });
      const data = await res.json();

      if (data.status === 422 || data.status === 500) {
        toast.error(data.error);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("An error occured: " + err);
    }
  };

  if (isAuthenticated) sendUserData();

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <div className="login-container">
      {isAuthenticated ? (
        <button
          className="btn btn-primary google-login-btn logged-in-btn"
          onClick={() => setAlert(!alert)}
        >
          <img src={user.picture} alt="" className="google-logo" />
          <span className="login-btn-txt">Hi, {user.name.split(" ")[0]}</span>
        </button>
      ) : isLoading ? (
        <Loading />
      ) : (
        <button
          className="btn btn-primary google-login-btn"
          onClick={loginWithRedirect}
        >
          <img
            src="/assets/icons/google-logo.svg"
            alt="G"
            className="google-logo"
          />
          <span className="login-btn-txt">Login</span>
        </button>
      )}
      {alert && (
        <div className="logoutAlert">
          <div className="alert-text">Do you want to logout?</div>
          <div className="alert-btn-container">
            <button className="alert-btn no" onClick={() => setAlert(!alert)}>
              No!
            </button>
            <button className="alert-btn" onClick={handleLogout}>
              Yes
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
