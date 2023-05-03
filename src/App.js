import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/profile";
import ReportScreen from "./components/dashboard/screens/reportScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
