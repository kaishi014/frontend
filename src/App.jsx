import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Content from './components/Content'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Internships />
      <Leadership />
      <SoftSkills />
      <Content />
      <Footer />
    </>
  )
}

export default App
