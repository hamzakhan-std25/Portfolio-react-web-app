import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  let isDarkMode =true;

  return (


    <section className={ isDarkMode ? "p-5 px-3 bg-dark text-light dark-mode" : "p-5 px-3 bg-light text-dark" }>
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>

        <div className="row">
          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <div className="mb-3 d-flex align-items-center">
              <FaEnvelope className="me-2 text-primary" />
              <span>your.email@example.com</span>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <FaPhone className="me-2 text-primary" />
              <span>+92 300 0000000</span>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <FaMapMarkerAlt className="me-2 text-primary" />
              <span>Wah Cantt, Pakistan</span>
            </div>
            {/* Optional: Google Map */}
            <div className="mt-4">
              <iframe
                title="map"
                className="w-100 rounded"
                height="200"
                loading="lazy"
                src="https://maps.google.com/maps?q=wah%20cantt&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
