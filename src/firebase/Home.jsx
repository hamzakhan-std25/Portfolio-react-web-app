// src/pages/Home.jsx
import testimonials from "../data/testimonials.json";
import Counter from "../components/ui/Counter";
import projects from "../data/projects.json"
export default function Home() {

  let isDarkMode=true;

  return (
    <div className={isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <section className="text-center py-5 px-3 bg-gradient  dark-mode-section">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Hi, I'm Hamza</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: '600px' }}>
            A Front-End Developer crafting beautiful and interactive web experiences.
          </p>
          <a
            href="/projects"
            className="btn btn-dark px-4 py-2 rounded-pill text-white fw-semibold"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* === Counters Section === */}
      <section className="py-5  dark-section text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-sm-4">
              <Counter end={10} label="Completed Projects" />
            </div>
            <div className="col-12 col-sm-4">
              <Counter end={3} label="Ongoing Projects" />
            </div>
            <div className="col-12 col-sm-4">
              <Counter end={5} label="Happy Clients" />
            </div>
          </div>
        </div>
      </section>

      {/* === Featured Projects Section === */}
      <section className="py-5 px-3  dark-section">
        <div className="container">
          <h2 className="h4 fw-semibold text-center mb-5">Featured Projects</h2>
          <div className="row g-4">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="col-md-4">
                <div className="card h-100 shadow border-0 project-card bg-dark">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="card-img-top object-fit-cover"
                    style={{ height: '200px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{proj.title}</h5>
                    <p className="card-text small">{proj.description}</p>
                    <a href={proj.liveLink} className="text-primary text-decoration-underline">
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* === Testimonials Section === */}
<section className="py-5  dark-section">
  <div className="container">
    <h2 className="h4 fw-semibold text-center mb-5">What Clients Say</h2>
    <div className="row justify-content-center g-4">
      {testimonials.slice(0, 2).map((t) => (
        <div key={t.id} className="col-md-6">
          <div className=" border border-2 p-4 rounded shadow testimonial-card h-100 dark-card bg-dark ">
            <p className="fst-italic mb-3">“{t.feedback}”</p>
            <div className="d-flex align-items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle"
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
              <span>{t.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Call to Action Section === */}
<section className="py-5 text-center ">
  <div className="container">
    <h3 className="h5 fw-semibold mb-4">Want to work together?</h3>
    <a
      href="/contact"
      className="btn btn-primary px-4 py-2"
    >
      Contact Me
    </a>
  </div>
</section>

</div>
  );
}
