import './App.css'
import Navbar from "./components/navbar.jsx";
import React from "react";
import HeroSection from "./components/heroSection.jsx";
import Web3Section from "./components/web3Section.jsx";
import AboutUsSection from "./components/aboutUsSection.jsx";
import OurMission from "./components/ourMission.jsx";
import Impact from "./components/impactSection.jsx";
import JoinMovement from "./components/joinMovement.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Web3Section/>
        <AboutUsSection/>
        <OurMission/>
        <Impact/>
        <JoinMovement/>
    </>
  )
}

export default App
