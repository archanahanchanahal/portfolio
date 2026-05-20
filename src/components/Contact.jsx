import '../styles/contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-grid"></div>

      <div className="contact-top">

        <p className="section-tag">
          — CONTACT
        </p>

        <h1>
          Let’s build something meaningful
        </h1>

        <p className="contact-subtitle">
          Open to internships, collaborations and exciting opportunities
        </p>

      </div>

      <div className="contact-wrapper">

        <div className="contact-left">

          <div className="contact-card">

            <span className="contact-label">
              EMAIL
            </span>

            <h2>
              jasthimanaswi@gmail.com
            </h2>

          </div>

          <div className="contact-card">

            <span className="contact-label">
              LOCATION
            </span>

            <h2>
              Hyderabad, India
            </h2>

          </div>

          <div className="contact-card">

            <span className="contact-label">
              SOCIALS
            </span>

            <div className="social-links">

              <a href="/">
                GitHub
              </a>

              <a href="/">
                LinkedIn
              </a>

              <a href="/">
                Portfolio
              </a>

            </div>

          </div>

        </div>

        <div className="contact-right">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact