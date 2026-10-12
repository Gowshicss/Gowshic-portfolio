import './App.css';
import Navbar from './components/Navbar';
import HorizonHero from './components/HorizonHero';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        {/* 1. Horizon Three.js Hero */}
        <HorizonHero />

        {/* 2. Editorial About Me */}
        <About />

        {/* 3. Verified Achievements & IGNITE Leadership (Image-led) */}
        <Achievements />

        {/* 4. Technical Skills */}
        <Skills />

        {/* 5. Applied Engineering Projects */}
        <Projects />

        {/* 6. Education & Verified Credentials */}
        <Certificates />

        {/* 7. Direct Contact & Collaboration */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
