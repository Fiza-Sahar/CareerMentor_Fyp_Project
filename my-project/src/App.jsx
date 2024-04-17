import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Features from "./components/Features/Features";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import Ourteam from "./components/OurTeam/Ourteam";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const aboutUsRef = useRef(null);
  const ourTeamRef = useRef(null);

  const handleAboutClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOurTeamClick = () => {
    ourTeamRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar handleAboutClick={handleAboutClick} handleOurTeamClick={handleOurTeamClick} />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About ref={aboutUsRef}/>} />
        <Route path="/Ourteam" element={<Ourteam ref={ourTeamRef} />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
