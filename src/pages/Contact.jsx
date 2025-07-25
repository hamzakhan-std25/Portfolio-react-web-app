import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const Contact = () => {
  
   const { darkMode} = useDarkMode();

  return (

    // darkMode ? "p-5 px-3 bg-dark text-light dark-mode" : "p-5 px-3 bg-light text-dark"

    <section className={`p-5 px-3 ${darkMode ? "bg-secondary text-white dark-mode" : "bg-light text-dark"}`}    data-bs-theme={darkMode ? 'dark' : ''}  >
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26420.791663158045!2d72.43500686400733!3d34.13101538011453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deef747aaa83bb%3A0x2b89195da1793f3b!2sSwabi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753445039196!5m2!1sen!2s"
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
