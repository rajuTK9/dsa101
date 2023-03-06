import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div>
      <button className="btn btn-primary google-login-btn" onClick={login}>
        <img
          src="./assets/icons/google-logo.svg"
          alt="G"
          className="google-logo"
        />
        Login
      </button>
    </div>
  );
}
