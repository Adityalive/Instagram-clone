import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Fedd from "./features/post/Pages/Feed";
import CreatePost from "./features/post/Pages/CreatePost";

const AppRoutes = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Fedd />} />
          <Route path="/post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default AppRoutes;