import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LighthouseHighlight from './components/LighthouseHighlight';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationTraining from './components/EducationTraining';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main Application Component (App.jsx)
 * 
 * Architecture overview:
 * - Clean modular component design where each section is an isolated, reusable unit.
 * - Single source of truth for portfolio data in src/data/portfolioData.js.
 * - Global dark mode theme with subtle glowing radial gradients and backdrop blur.
 * - Zero external bloated CSS dependencies — pure modern Tailwind CSS.
 */
function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <LighthouseHighlight />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationTraining />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
