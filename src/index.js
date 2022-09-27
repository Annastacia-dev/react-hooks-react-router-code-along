import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import About from "./About";
import Login from "./Login";

function App() {
  return <>
  <Home />
  </>
  
}

ReactDOM.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/signupform" element={<SignUpForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<App />} />
      </Routes> 
  </BrowserRouter>,
  document.getElementById("root")
);
