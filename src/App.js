import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { portfolioData } from './data/portfolioData';
import './pages/styles.css';

// Auto scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-root-netflix">
        <Navbar />
        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="netflix-global-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-n">N</span>
              <span className="footer-text">SAGAR S • AGENTIC AI ENGINEER</span>
            </div>
            <p className="footer-copy">
              © {new Date().getFullYear()} Sagar S. Built with React & Netflix Design Aesthetics. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="https://github.com/sagarchalat" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sagarchalat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://sagarchalat.github.io/sagarchalat-portfolio/" target="_blank" rel="noopener noreferrer">Personal-Portfolio</a>
              <a href={portfolioData.personal.resumeUrl} download="Sagar_S_AI-Eng.pdf">Download Resume</a>
              <a href="mailto:sagarchalatan@gmail.com">sagarchalatan@gmail.com</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
