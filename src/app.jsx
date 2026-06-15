import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from "./components/Education"
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import "./styles/navbar.css"
import "./styles/hero.css"
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