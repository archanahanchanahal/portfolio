import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from "./components/education"
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import "./styles/Navbar.css"
import "./styles/Hero.css"
import './styles/about.css'
import './styles/education.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
