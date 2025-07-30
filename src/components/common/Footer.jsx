// src/components/Footer.jsx
import React from "react";
import { useDarkMode } from "../../pages/DarkModeContext";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {

  const {darkMode }= useDarkMode();

  return (

    <footer className={`${ darkMode ? "":"" }  pt-4 border-top`}>
      <div className="container text-center text-md-start">
        <div className="row py-4">

          {/* Brand or Logo */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Hamza Khan</h5>
            <p>Your trusted front-end web developer.</p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-dark dark:text-light">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-dark dark:text-light">About</Link></li>
              <li><Link to="/services" className="text-decoration-none text-dark dark:text-light">Services</Link></li>
              <li><Link to="/projects" className="text-decoration-none text-dark dark:text-light">Projects</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-dark dark:text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Me</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light fs-5"><FaFacebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light fs-5"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-light fs-5"><FaGithub /></a>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center py-3 border-top mt-2">
          &copy; {new Date().getFullYear()} Hamza Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
