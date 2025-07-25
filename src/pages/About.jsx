import React from 'react';
import { useDarkMode } from "./DarkModeContext";
const AboutPage = () => {

   const { darkMode} = useDarkMode();

  return (   
    //  ${darkMode ? 'bg-secondary text-white' : 'bg-info text-dark'}`
          //  darkMode ? 'p-5 container bg-dark text-white' : 'p-5 container bg-light text-dark'
    <div className={`  ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h2 className=" p-5 text-center fw-bold mb-4">About Me</h2>

      {/* Intro */}
      <p className="lead text-center mb-4">
        I'm Hamza, a passionate Front-End Developer with experience in crafting responsive, accessible, and performance-optimized web applications.
      </p>

      {/* Profile Image */}
      <div className="text-center mb-5">
        <img
          src="/your-profile.jpg"
          alt="Hamza"
          className="img-fluid rounded-circle shadow"
          style={{ width: '180px', height: '180px', objectFit: 'cover' }}
        />
      </div>

      {/* Skills & Education */}
      <div className={` p-5 row mb-5 py-5 ${darkMode ? "text-white": "text-dark"}  bg-gradient text-center`}
      >
        <div className="col-md-6">
          <h4 className="fw-semibold">Skills</h4>
          <ul className="list-unstyled">
            <li>✔ HTML, CSS, JavaScript</li>
            <li>✔ Bootstrap, React</li>
            <li>✔ Git & GitHub</li>
            <li>✔ Firebase</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">Education</h4>
          <p>
            Bachelors in Software Engineering<br />
            University Name – 3rd Year
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className={`mb-5 p-5  ${darkMode ? " " :" bg-info"} `}>
        <h4 className="fw-semibold text-center mb-4">Timeline</h4>
        <ul className="list-unstyled px-3">
          <li className="mb-3">
            <strong>2022 - Present</strong> – Studying Software Engineering
          </li>
          <li className="mb-3">
            <strong>2023</strong> – Started Web Development (HTML, CSS, JavaScript)
          </li>
          <li className="mb-3">
            <strong>2024</strong> – Mastered Bootstrap, React & Firebase
          </li>
          <li>
            <strong>2025</strong> – Working on AI-based Final Year Project
          </li>
        </ul>
      </section>

      {/* Resume Download */}
      <section className="text-center mb-5">
        <h4 className="fw-semibold mb-3">Download My Resume</h4>
        <a
          href="/Hamza_Khan_Resume.pdf"
          className="btn btn-outline-primary"
          download
        >
          Download PDF
        </a>
      </section>

      {/* Certifications */}
      <section className="mb-0 ">
        <h4 className="fw-semibold text-center mb-4">Certifications</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-5">
            <div className={` card shadow ${darkMode ? "bg-secondary text-white" : "bg-info text-dark"}`}>
              <div className="card-body">
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">Issued by Coursera – 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className={` card shadow ${darkMode ? " bg-secondary text-white" : "bg-info text-dark"}`}>
              <div className="card-body">
                <h5 className="card-title">React & Firebase</h5>
                <p className="card-text">Issued by freeCodeCamp – 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
