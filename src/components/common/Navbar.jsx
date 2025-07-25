import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../../pages/DarkModeContext';





function Navbar() {

    const { darkMode, setDarkMode } = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg shadow sticky-top ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold text-primary">
          Hamza's Portfolio
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className={`form-check form-switch ms-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
                console.log('dark mode change = ', darkMode)
              }
              }
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
