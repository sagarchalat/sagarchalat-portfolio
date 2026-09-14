import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import heroBg from '../assets/hero_ml.jpg';
import aqosPoster from '../assets/aqos_project.jpg';
import ragPoster from '../assets/rag_chatbot.jpg';
import llmPoster from '../assets/llm_finetune.jpg';
import mlopsPoster from '../assets/mlops_pipeline.jpg';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const { personal, experience, skills, projects, certifications } = portfolioData;

  const posterMap = {
    'ai-qa-operating-system': aqosPoster,
    'enterprise-rag-chatbot': ragPoster,
    'llm-fine-tuning-pipeline': llmPoster,
    'mlops-deployment-pipeline': mlopsPoster
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-netflix-wrapper">
      {/* Hero Cinematic Section */}
      <section className="netflix-hero-section">
        <div className="hero-backdrop-container">
          <img src={heroBg} alt="Sagar S - Machine Learning Engineer" className="hero-backdrop-img" />
          <div className="hero-vignette-bottom"></div>
          <div className="hero-vignette-left"></div>
          <div className="hero-vignette-top"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-series-tag">
            <span className="hero-n-badge">N</span>
            <span className="hero-tag-text">ORIGINAL • MACHINE LEARNING ENGINEER</span>
          </div>

          <h1 className="hero-main-title">{personal.name}</h1>
          <h2 className="hero-subtitle">{personal.roleSubtitle}</h2>

          <div className="hero-badges-row">
            <span className="match-pill">{personal.matchScore}</span>
            <span className="year-pill">2025</span>
            <span className="age-pill">1.8 YRS EXP</span>
            <span className="quality-pill">{personal.quality}</span>
            <span className="sound-pill">STL DIGITAL</span>
          </div>

          <p className="hero-synopsis">{personal.summary}</p>

          <div className="hero-cta-buttons">
            <Link to="/resume" className="hero-btn play-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>View Resume</span>
            </Link>

            <a
              href={personal.resumeUrl}
              download="Sagar_S_AI-Eng.pdf"
              className="hero-btn download-cv-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </a>

            <button
              className="hero-btn more-info-btn"
              onClick={() => scrollToSection('experience-row')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Experience</span>
            </button>

            <Link to="/projects" className="hero-btn docx-hero-btn" title="Inspect HLD & LLD Architectural Specs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              </svg>
              <span>HLD & LLD (.docx)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights / Top 10 Metrics Bar */}
      <section className="top-metrics-section">
        <div className="metrics-container">
          <div className="metrics-header">
            <span className="metrics-rank-pill">TOP ACHIEVEMENTS</span>
            <h3>Key Performance Metrics from Production Work</h3>
          </div>

          <div className="metrics-grid">
            {personal.highlights.map((item, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-rank">#{idx + 1}</div>
                <div className="metric-details">
                  <div className="metric-stat">{item.value}</div>
                  <div className="metric-label">{item.label}</div>
                  <div className="metric-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Netflix Row: Original Series Projects */}
      <section className="netflix-content-row" id="projects-row">
        <div className="row-header">
          <h2 className="row-title">
            <span className="row-prefix">Original Series:</span> Featured AI & ML Projects
            <span className="hld-spec-header-pill">HLD & LLD (.docx) READY</span>
          </h2>
          <Link to="/projects" className="row-view-all">
            Explore All Projects ({projects.length}) →
          </Link>
        </div>

        <div className="netflix-slider-track">
          {projects.slice(0, 4).map((proj) => {
            const poster = posterMap[proj.id] || proj.poster;

            return (
              <div
                key={proj.id}
                className="netflix-slide-card"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="slide-media">
                  {poster ? (
                    <img src={poster} alt={proj.title} className="slide-poster" />
                  ) : (
                    <div className="slide-fallback">
                      <span className="fallback-tag">NETFLIX ORIGINAL</span>
                      <h4>{proj.title}</h4>
                    </div>
                  )}
                  <span className="slide-badge">{proj.badge}</span>
                </div>

                <div className="slide-info-overlay">
                  <div className="slide-meta">
                    <span className="match-green">{proj.rating}</span>
                    <span className="year-gray">{proj.year}</span>
                    <span className="duration-tag">{proj.duration}</span>
                  </div>
                  <h3 className="slide-title">{proj.title}</h3>
                  <p className="slide-desc">{proj.summary}</p>
                  <div className="slide-tech-list">
                    {proj.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="slide-chip">{t}</span>
                    ))}
                  </div>
                  <button className="slide-play-action">
                    ▶ Inspect Pipeline
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Netflix Row: Technical Skills */}
      <section className="netflix-content-row" id="skills-row">
        <div className="row-header">
          <h2 className="row-title">
            <span className="row-prefix">Trending Now:</span> Technical Skills & Stack
          </h2>
          <Link to="/skills" className="row-view-all">
            View All 24+ Skills in Matrix →
          </Link>
        </div>

        <div className="skills-horizontal-track">
          {skills.slice(0, 8).map((skill) => (
            <div
              key={skill.name}
              className="skill-netflix-pill-card"
              onClick={() => navigate('/skills')}
            >
              <div className="pill-top">
                <span className="pill-badge">{skill.badge}</span>
                <span className="pill-level">{skill.level}</span>
              </div>
              <h4 className="pill-name">{skill.name}</h4>
              <p className="pill-snippet">{skill.description.substring(0, 75)}...</p>
              <div className="pill-tags">
                {skill.tags.slice(0, 2).map((t, i) => (
                  <span key={i} className="mini-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Netflix Row: Experience (STL Digital) */}
      <section className="netflix-content-row" id="experience-row">
        <div className="row-header">
          <h2 className="row-title">
            <span className="row-prefix">Season 1:</span> Professional Experience
          </h2>
          <span className="row-tagline">Currently Streaming • STL Digital</span>
        </div>

        {experience.map((exp) => (
          <div key={exp.id} className="experience-netflix-card">
            <div className="exp-banner-header">
              <div className="exp-badge-group">
                <span className="exp-netflix-n">N</span>
                <span className="exp-status-pill">{exp.status}</span>
                <span className="exp-match-pill">{exp.match}</span>
              </div>
              <h3 className="exp-role-title">{exp.role}</h3>
              <div className="exp-meta-sub">
                <span className="exp-company-text">{exp.company}</span>
                <span>•</span>
                <span className="exp-loc-text">{exp.location}</span>
                <span>•</span>
                <span className="exp-period-text">{exp.period}</span>
              </div>
              <p className="exp-overview-text">{exp.overview}</p>
            </div>

            <div className="exp-episodes-grid">
              <h4 className="episodes-header">Episodes & Key Responsibilities</h4>
              <div className="episodes-list">
                {exp.episodes.map((ep, idx) => (
                  <div key={idx} className="episode-item">
                    <div className="episode-num">E{idx + 1}</div>
                    <div className="episode-body">
                      <div className="episode-title-row">
                        <strong className="episode-title">{ep.title}</strong>
                        <span className="episode-metric">{ep.metric}</span>
                      </div>
                      <p className="episode-desc">{ep.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="exp-achievements-box">
              <h4 className="achievements-title">🏆 Key Achievements Verified in Production:</h4>
              <ul className="achievements-bullets">
                {exp.keyAchievements.map((ach, idx) => (
                  <li key={idx}>
                    <span className="ach-check">✓</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Netflix Row: Certifications & Education */}
      <section className="netflix-content-row" id="certs-row">
        <div className="row-header">
          <h2 className="row-title">
            <span className="row-prefix">Certifications:</span> Professional Credentials
          </h2>
          <span className="row-tagline">Wolfram • Microsoft • GitHub • Anaconda • OpenEDG</span>
        </div>

        <div className="certs-netflix-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-netflix-card">
              <div className="cert-top-bar" style={{ borderTopColor: cert.color }}>
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-badge-tag">{cert.badge}</span>
              </div>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-desc">{cert.description}</p>
            </div>
          ))}

          {/* Education Card */}
          <div className="cert-netflix-card education-card">
            <div className="cert-top-bar" style={{ borderTopColor: '#E50914' }}>
              <span className="cert-issuer">Sri Siddhartha Institute of Technology</span>
              <span className="cert-badge-tag">Degree • 2024</span>
            </div>
            <h4 className="cert-title">{personal.education.degree}</h4>
            <p className="cert-desc">
              Comprehensive undergraduate program in Information Science & Engineering with focus on machine learning, database management, and computer science foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Stream / Hire Banner */}
      <section className="hire-netflix-banner">
        <div className="hire-content">
          <span className="hire-pill">START STREAMING</span>
          <h2>Ready to Build Production AI Systems Together?</h2>
          <p>
            Let's discuss how my expertise in Agentic AI, multi-agent workflows, production RAG pipelines, and cloud-native FastAPI microservices
            can accelerate your engineering team's goals.
          </p>
          <div className="hire-cta-row">
            <Link to="/contact" className="hire-cta-primary">
              Contact & Hire Sagar
            </Link>
            <Link to="/resume" className="hire-cta-secondary">
              Inspect Full Resume
            </Link>
            <a
              href={personal.resumeUrl}
              download="Sagar_S_AI-Eng.pdf"
              className="hire-cta-secondary"
            >
              Direct Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Home;
