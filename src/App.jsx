// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { useState , useEffect } from "react";
import Home from "./pages/Home";

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
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />



      {/* <Home/> */}


    </>

  );
}
