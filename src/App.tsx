import CustomCursor from './components/CustomCursor'
import StatusBar from './components/StatusBar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import KonamiOverlay from './components/KonamiOverlay'

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <StatusBar />
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <KonamiOverlay />
    </>
  )
}
