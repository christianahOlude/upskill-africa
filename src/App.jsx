import './App.css'
import Navbar from "./components/navbar.jsx";
import React from "react";
import HeroSection from "./components/heroSection.jsx";
import Web3Section from "./components/web3Section.jsx";
import AboutUsSection from "./components/aboutUsSection.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Web3Section/>
        <AboutUsSection/>
    </>
  )
}

export default App
