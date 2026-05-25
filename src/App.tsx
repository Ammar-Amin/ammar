import {
  CustomCursor,
  StatusBar,
  Hero,
  Ticker,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
  KonamiOverlay,
  HireMe,
} from "./components";

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <StatusBar />
      <Hero />
      <Ticker />
      <About />
      <HireMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <KonamiOverlay />
    </>
  );
}
