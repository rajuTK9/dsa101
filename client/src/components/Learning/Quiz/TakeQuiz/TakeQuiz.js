import React, { useState } from "react";
import "./TakeQuiz.css";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginAuth0 from "../../../Login/LoginAuth0";
// import { Auth0Provider } from "@auth0/auth0-react";

export default function TakeQuiz(props) {
  const [startQuiz, setStartQuiz] = useState(false);

  // const { isAuthenticated } = useAuth0();

  return (
    <div className="quiz-container">
      {startQuiz ? (
        <>
          {/* {isAuthenticated ? (
            <Quiz />
          ) : (
            <Auth0Provider
              domain="dev-ynlvngvzhos0c4m0.us.auth0.com"
              clientId="EX3BsaTmmEAZyZ8MtKObZhncV6fNkHqZ"
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <LoginAuth0 />
            </Auth0Provider>
          )} */}
          {props.setQuizRendering("quiz")}
        </>
      ) : (
        <button
          className="ans-btn result-btn btn"
          onClick={() => setStartQuiz(true)}
        >
          Take the quiz <img src="/assets/icons/arrow-right-white.svg" alt="" />
        </button>
      )}
    </div>
  );
}
