import '../styles/hero.css'
import resume from '../assets/resume.pdf'

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="grid-bg"></div>

      <div className="hero-left">

        <p className="hero-tag">
          <h2>— Open for Internship & Jobs</h2>
        </p>

        <h1>
          Hi, I'm <span>Jasthi Manaswi</span><br />
        </h1>

        <h2>
          Full Stack Developer & CSE Student crafting clean,
          modern and meaningful digital experiences.
        </h2>

        <p className="hero-description">
          Passionate about development, elegant interfaces,
          problem solving and building impactful web applications.
        </p>

        <div className="hero-buttons">

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn">
              View & Download Resume
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="circle-glow"></div>

        <div className="hero-circle">
          JM
        </div>

        <div className="floating-card card1">
          ⚡ Full Stack
        </div>

        <div className="floating-card card2">
          ◆ DSA
        </div>

        <div className="floating-card card3">
          ✦ UI/UX
        </div>

      </div>

    </section>
  )
}

export default Hero