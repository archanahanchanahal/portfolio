import '../styles/projects.css'

function Projects() {

  const projects = [

  {
    number: '01',

    title: 'RefusalAI',

    description:
      'AI-powered system designed to intelligently analyze and manage refusal scenarios using Machine Learning and NLP.',

    tech: ['React', 'Node.js', 'MongoDB'],

    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop',

    github:
      'https://github.com/archanahanchanahal/RefusalAI',

    live:
      '#'
  },

  {
    number: '02',

    title: 'Dialysis Scheduler',

    description:
      'Healthcare scheduling platform for managing dialysis appointments, patient allocation and resource optimization.',

    tech: ['React', 'Express', 'MongoDB'],

    image:
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1400&auto=format&fit=crop',

    github:
      'https://github.com/archanahanchanahal/DialysisScheduler',

    live:
      '#'
  },

  {
    number: '03',

    title: 'Credit Card Fraud Detection',

    description:
      'Machine learning project for detecting fraudulent credit card transactions using predictive analytics.',

    tech: ['React', 'JavaScript', 'Education'],

    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',

    github:
      'https://github.com/archanahanchanahal/credit-card-fraud-detection',

    live:
      '#'
  }

]

  return (
    <section className="projects" id="projects">

      <div className="projects-grid"></div>

      <div className="projects-top">

        <p className="section-tag">
          — PROJECTS
        </p>

        <h1>
          Selected work & experiences.
        </h1>

        <p className="projects-subtitle">
          A collection of projects focused on engineering, design and impactful user experiences.
        </p>

      </div>

      <div className="projects-wrapper">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">

              <img src={project.image} alt={project.title} />

              <div className="project-overlay"></div>

              <span className="project-number">
                {project.number}
              </span>

            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="github-btn">
                    GitHub
                  </button>
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects