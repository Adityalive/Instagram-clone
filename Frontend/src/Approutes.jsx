import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";

const AppRoutes = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default AppRoutes;