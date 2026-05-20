import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid"></div>

      <div className="footer-content">

        <div className="footer-left">

          <h1>
            Jasthi Manaswi.
          </h1>

          <p>
            Building thoughtful digital experiences with modern technologies and clean design principles.
          </p>

        </div>

        <div className="footer-right">

          <a href="#hero">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Jasthi Manaswi. All rights reserved.
        </p>

        <span>
          Designed & Developed with precision.
        </span>

      </div>

    </footer>
  )
}

export default Footer