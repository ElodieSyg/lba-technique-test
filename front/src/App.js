import React from "react";
// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS IMPORTATIONS
import "./App.css";
// VIEWS IMPORTATIONS
import Home from "./view/home";
import Register from "./view/register";
import Login from "./view/login";
import Dashboard from "./view/dashboard";
// COMPONENTS IMPORTATIONS
import Navbar from "./component/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;