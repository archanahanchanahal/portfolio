import '../styles/about.css'

function About() {
  return (
    <section className="about" id="about">

      <div className="about-grid"></div>

      <div className="about-top">

         <h1>About</h1>
      </div>

      <div className="about-wrapper">

        <div className="about-left">

          <div className="about-card large-card">

            <span className="card-label">
              INTRODUCTION
            </span>

            <h2>
              Hi, I’m Jasthi Manaswi.
            </h2>

            <p>
              A Computer Science Engineering student focused on full stack development, elegant user interfaces and solving real-world problems through technology.
            </p>

            <p>
              I enjoy building polished web experiences, learning modern technologies and continuously improving my problem-solving skills through DSA and projects.
            </p>

          </div>

        </div>

        <div className="about-right">

          <div className="about-card small-card active-card">

            <div className="card-icon">
              ✦
            </div>

            <h3>
              Full Stack Development
            </h3>

            <p>
              Building scalable and modern applications using React, Node.js and MongoDB.
            </p>

          </div>

          <div className="about-card small-card">

            <div className="card-icon">
              ◆
            </div>

            <h3>
              Problem Solving
            </h3>

            <p>
              Practicing DSA consistently to strengthen logical and analytical thinking.
            </p>

          </div>

          <div className="about-card small-card">

            <div className="card-icon">
              ✺
            </div>

            <h3>
              UI / UX Focus
            </h3>

            <p>
              Designing minimal, smooth and user-friendly interfaces with premium aesthetics.
            </p>

          </div>

          <div className="about-card small-card">

            <div className="card-icon">
              ✧
            </div>

            <h3>
              Continuous Learning
            </h3>

            <p>
              Exploring modern tools, frameworks and technologies to stay updated.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About