import React, { useContext, useEffect } from "react";
// UTILS IMPORTATIONS
import { server } from "./tool";
// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// CSS IMPORTATIONS
import "./App.css";
// VIEWS IMPORTATIONS
import Home from "./view/home";
import Register from "./view/register";
import Login from "./view/login";
import Dashboard from "./view/dashboard";
// COMPONENTS IMPORTATIONS
import Navbar from "./component/navbar";
// CONTEXT IMPORTATIONS
import UserContext from "./context/userContext";

const App = () => {
  const logState = useContext(UserContext);

  console.log("logstate", logState)
  useEffect(() => {
    axios.get(`${server}/is-logged`, { withCredentials: true })
      .then(res => {
        if (res.data.isLoggedIn === true) {
          console.log(res);
          logState.setLogged(true);
        };
      });
  }, [logState]);

  return (
    <BrowserRouter>
      <UserContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  );
};

export default App;