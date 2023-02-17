import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
// import { GoogleOAuthProvider } from "@react-oauth/google";
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
      {/* <GoogleOAuthProvider clientId="484839371598-8359bacl69e86c2oa2hotfbqmug26s74.apps.googleusercontent.com"> */}
      <button className="btn btn-primary google-login-btn" onClick={login}>
        <img
          src="./assets/icons/google-logo.svg"
          alt="G"
          className="google-logo"
        />
        Login
      </button>
      {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            var token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
      {/* </GoogleOAuthProvider> */}
    </div>
  );
}
