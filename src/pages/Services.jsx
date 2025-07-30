import React, { useContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import services from '../data/services.json';

import { useDarkMode } from "./DarkModeContext";

const Services = () => {

  
     const { darkMode} = useDarkMode();

  return (
    <div className={`${darkMode ? " text-white" : "text-dark"}`}>
      {/* Section Intro */}
      <section className="py-5 text-center bg-gradient  dark-mode-section">
        <div className="container">
          <h2 className="fw-bold mb-3">What I Offer</h2>
          <p className="lead mb-4">I provide a wide range of web development services to bring your ideas to life. Whether you're a business, individual, or startup—I can build you a stunning, functional site.</p>
          <a href="/contact" className="btn btn-primary">Let’s Work Together</a>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {services.map(service => (
              <div key={service.id} className={`  col-md-4 `}>
                <div className={`card h-100 shadow-sm border-0 ${darkMode ? 'bg-secondary text-white' : 'bg-info text-dark'}`}>
                  <div className="card-body text-center">
                    <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Quote */}
      <section className={`py-5 ${darkMode ? "text-white": "text-dark"}  bg-gradient text-center`}>
        <div className="container">
          <blockquote className="blockquote mb-0">
            <p className="fs-4">"Working with Hamza was an absolute pleasure. He delivered a responsive, clean, and functional web solution faster than expected."</p>
            <footer className={`blockquote-footer  mt-2 ${darkMode ? "text-white":"text-dark"
            }`}>— Satisfied Client</footer>
          </blockquote>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-semibold mb-4">My 3-Step Work Process</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className={`p-4 border rounded ${darkMode ? 'bg-secondary text-white' : 'bg-info text-dark'}`}>
                <h5 className="mb-2">1. Planning</h5>
                <p>Understanding your goals, analyzing project scope, and wireframing ideas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`p-4 border rounded ${darkMode ? 'bg-secondary text-white' : 'bg-info text-dark'}`}>
                <h5 className="mb-2">2. Development</h5>
                <p>Turning designs into code using React, Bootstrap, and custom logic.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`p-4 border rounded ${darkMode ? 'bg-secondary text-white' : 'bg-info text-dark'}`}>
                <h5 className="mb-2">3. Deployment</h5>
                <p>Testing, optimizing, and deploying the final product for real-world use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
