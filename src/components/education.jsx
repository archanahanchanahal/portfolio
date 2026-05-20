import '../styles/education.css'

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-grid"></div>

      <div className="education-top">

        <p className="section-tag">
          — JOURNEY
        </p>

        <h1>Education</h1>

        <p className="education-subtitle">
          Building foundations in computer science, problem solving and modern development.
        </p>

      </div>

      <div className="education-wrapper">

        <div className="timeline-line"></div>

        <div className="timeline-dot"></div>

        <div className="education-card">

          <div className="education-left">

            <span className="education-year">
              2023 — 2027
            </span>

            <h2>
              B.Tech in Computer Science Engineering
            </h2>

            <h3>
              Malla Reddy Engineering College For Women
            </h3>

            <p>
              Focused on full stack development, DSA, databases and software engineering while building impactful real-world projects.
            </p>

          </div>

          <div className="education-right">

            <div className="cgpa-card">
              <span>CGPA</span>
              <h2>8.8</h2>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education