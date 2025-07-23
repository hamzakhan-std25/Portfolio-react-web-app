
import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { Modal, Button } from 'react-bootstrap';

export default function Projects() {
  const [projects] = useState(projectsData);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

    const handleOpen = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };
let isDarkMode= true;

  return (
    <main className={ isDarkMode ? "p-5 bg-dark text-light" : "p-5 bg-light text-dark" }>
      <div className="container">

        {/* 1. Intro */}
        <section className="text-center mb-5">
          <h1 className="display-5 fw-bold">Projects Portfolio</h1>
          <p className="lead">Explore a selection of projects I've built using modern technologies including React, Bootstrap, APIs, and more.</p>
        </section>

        {/* 2. Featured Projects */}
        <section className="mb-5">
          <h2 className="text-center mb-4">✨ Featured Projects</h2>
          <div className="row">
            {projects.slice(0, 2).map((project) => (
              <div className="col-md-6 mb-4" key={project.id}>
                <div className="card bg-dark text-light shadow-lg border border-2 p-2">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-2">
                      {/* Tech Stack Badges */}
                      {(project.tech || []).map((tech, i) => (
                        <span key={i} className="badge bg-secondary me-1">{tech}</span>
                      ))}
                    </div>
                    <a href={project.liveLink} className="btn btn-primary me-2" target="_blank" rel="noreferrer">Live Demo</a>
                    <a href={project.github} className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
            {/* Grid of Projects */}
             <h2 className="text-center mb-4">All Projects</h2>
        <div className="row">
          {projects.map((project) => (
               <div className="col-md-6 mb-4 " key={project.id}>
                <div className="card shadow-lg bg-dark text-light border border-2 p-2"  onClick={() => handleOpen(project)} style={{ cursor: 'pointer' }}>
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-2">
                      {/* Tech Stack Badges */}
                      {(project.tech || []).map((tech, i) => (
                        <span key={i} className="badge bg-secondary me-1">{tech}</span>
                      ))}
                    </div>
                    <a href={project.liveLink} className="btn btn-primary me-2" target="_blank" rel="noreferrer">Live Demo</a>
                    <a href={project.github} className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid rounded mb-3" />
                <p>{selectedProject.description}</p>
                {selectedProject.tech && (
                  <div className="mb-3">
                    <strong>Technologies:</strong>
                    <div>
                      {selectedProject.tech.map((tech, idx) => (
                        <span key={idx} className="badge bg-info text-dark me-2">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="btn btn-success">Live Demo</a>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-dark">GitHub</a>
              </Modal.Footer>
            </>
          )}
        </Modal>

        {/* 4. Call to Action */}
        <section className="text-center">
          <h3 className="mb-3">Interested in working with me?</h3>
          <a href="/contact" className="btn btn-lg btn-success">Let’s Get in Touch</a>
        </section>

      </div>
    </main>
  );
}


