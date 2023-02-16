import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <GoogleOAuthProvider clientId="484839371598-8359bacl69e86c2oa2hotfbqmug26s74.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            var token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
