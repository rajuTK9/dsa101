import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Index from "./components/Index/IndexPage";
import Learning from "./components/Learning/Learning";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Notes/Notes";
import CourseUpload from "./components/Admin/CourseUpload/CourseUpload";
import NotesIcon from "./components/NotesIcon/NotesIcon";
import CourseUpdate from "./components/Admin/CourseUpload/CourseUpdate";
import { Auth0Provider } from "@auth0/auth0-react";
import Protected from "./Protected";

function App() {
  return (
    <Auth0Provider
      domain="dev-ynlvngvzhos0c4m0.us.auth0.com"
      clientId="EX3BsaTmmEAZyZ8MtKObZhncV6fNkHqZ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Index />} />
        <Route path="/learning/:id" element={<Learning />} />
        <Route path="/notes" element={<Notes />} />
        <Route element={<Protected />}>
          <Route path="/admin-upload" element={<CourseUpload />} />
          <Route path="/admin-upload/:id" element={<CourseUpdate />} />
        </Route>
      </Routes>
      <NotesIcon />
    </Auth0Provider>
  );
}

export default App;
