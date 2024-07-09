import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Root from "./pages/layouts/Root";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// const isAuthenticated = true;
// element={isAuthenticated ? <Root /> : <Navigate to="/login" />}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
