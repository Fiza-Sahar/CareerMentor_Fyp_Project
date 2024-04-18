import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Features from "./components/Features/Features";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import ResumeChecker from "./components/Features/ResumeChecker/ResumeChecker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";

const App = () => {
  const aboutUsRef = useRef(null);

  const handleAboutClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar handleAboutClick={handleAboutClick} />
      <Routes>
        <Route path="/" element={<Home aboutUsRef={aboutUsRef} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/resume-checker" element={<ResumeChecker />} /> {/* Add this route for ResumeChecker */}
      </Routes>
    </Router>
  );
};

export default App;
