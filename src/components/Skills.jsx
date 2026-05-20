import '../styles/skills.css'

function Skills() {

  const skills = [
    {
      title: 'Frontend',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3']
    },

    {
      title: 'Backend',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs']
    },

    {
      title: 'Programming',
      tech: ['Java', 'Python', 'C', 'SQL']
    },

    {
      title: 'Tools',
      tech: ['GitHub', 'VS Code', 'Postman', 'Figma']
    }
  ]

  return (
    <section className="skills" id="skills">

      <div className="skills-grid"></div>

      <div className="skills-top">

        <p className="section-tag">
          — SKILLS
        </p><br>
        </br>

        <h1>
          Technologies I work with
        </h1>

        
      </div>

      <div className="skills-wrapper">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-card-top">

              <h2>{skill.title}</h2>

              <span>0{index + 1}</span>

            </div>

            <div className="tech-wrapper">

              {skill.tech.map((item, i) => (

                <div className="tech-pill" key={i}>
                  {item}
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills