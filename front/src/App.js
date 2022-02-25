import React, { useContext, useEffect } from "react";
// DEPENDENCIES
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
// CSS IMPORTATIONS
import "./App.css";
// VIEWS IMPORTATIONS
import Home from "./view/home";
import Register from "./view/register";
import Login from "./view/login";
import Dashboard from "./view/dashboard";
// UTILS IMPORTATIONS
import { server } from "./tool";
// CONTEXT IMPORTATIONS
import UserContext from "./context/logContext.js";

const App = () => {
  const logState = useContext(UserContext);

/*   useEffect(() => {
    axios.get(`${server}/is-logged`, { withCredentials: true })
      .then(res => {
        if (res.data.isLoggedIn === true) {
          console.log(res);
          logState.setLogged(true);
        };
      });
  }, []); */

  return (
    <BrowserRouter>
      <UserContext>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  );
};

export default App;