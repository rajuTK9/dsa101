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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Index />} />
        <Route path="/learning/:id" element={<Learning />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/admin-upload" element={<CourseUpload />} />
      </Routes>
      <NotesIcon />
    </>
  );
}

export default App;
