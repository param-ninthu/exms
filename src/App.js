import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
