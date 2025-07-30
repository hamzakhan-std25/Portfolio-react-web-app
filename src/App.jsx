// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ParticlesFountain from "./components/ParticalsFountain";

export default function App() {


  //  const getInitialMode = () => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved) return saved === "dark";
  //   return window.matchMedia("(prefers-color-scheme: dark)").matches;
  // };

  // const [darkMode, setDarkMode] = useState(getInitialMode);

  // useEffect(() => {
  //   localStorage.setItem("theme", darkMode ? "dark" : "light");
  //   document.body.className = darkMode ? "bg-dark text-white" : "bg-light text-dark";
  // }, [darkMode]);











  return (
    //   <Particles
    //   options={{
    //     fullScreen: { enable: true },
    //     background: { color: "#77e6b2ff" },
    //     particles: {
    //       number: { value: 80 },
    //       size: { value: 3 },
    //       move: { enable: true, speed: 1 },
    //       links: { enable: true, color: "#7487eaff", distance: 150 },
    //     },
    //   }}
    // />



    <>
      <ParticlesFountain />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />




    </>

  );
}
