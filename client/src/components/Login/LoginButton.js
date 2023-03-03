// import Login from "../Login/Login";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import "./Login.css";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginAuth0 from "../Login/LoginAuth0";

// const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const auth0ClientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

export default function LoginButton() {
  return (
    <>
      {/* <Auth0Provider
        domain="dev-ynlvngvzhos0c4m0.us.auth0.com"
        clientId="EX3BsaTmmEAZyZ8MtKObZhncV6fNkHqZ"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      > */}
      <LoginAuth0 />
      {/* </Auth0Provider> */}
      {/* <GoogleOAuthProvider clientId="484839371598-8359bacl69e86c2oa2hotfbqmug26s74.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider> */}
    </>
  );
}
