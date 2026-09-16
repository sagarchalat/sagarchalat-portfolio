import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { personal, skills, skillCategories } = portfolioData;

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [skills, activeCategory, searchQuery]);

  return (
    <div className="skills-page-wrapper">
      {/* Netflix Banner Header */}
      <div className="skills-header-banner">
        <span className="netflix-original-pill">SAGARCHALAT PORTFOLIO • TECH STACK</span>
        <h1 className="skills-main-title">AI & MACHINE LEARNING SKILLS</h1>
        <p className="skills-hero-desc">
          Specialized in scalable AI architectures, Large Language Models, Retrieval-Augmented Generation (RAG),
          fine-tuning, MLOps, and cloud-native model deployment.
        </p>

        {/* Search Bar */}
        <div className="skills-search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search skills (e.g. GCP, ADK, RAG, PyTorch, LoRA, FAISS, Docker)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="skills-search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-scroll">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-display-container">
        <div className="skills-count-bar">
          <span>Showing <strong>{filteredSkills.length}</strong> core technologies verified in Sagar's resume</span>
          <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="verify-resume-link">
            Verify in Resume PDF →
          </a>
        </div>

        <div className="netflix-skills-grid">
          {filteredSkills.map((skill) => (
            <div className="skill-flip-card" key={skill.name}>
              <div className="skill-flip-inner">
                {/* Front Side */}
                <div className="skill-flip-front">
                  <div className="card-top-row">
                    <span className="skill-badge-tag">{skill.badge}</span>
                    <span className="skill-match-percent">{skill.level}</span>
                  </div>

                  <div className="skill-front-main">
                    <div className="skill-icon-circle">
                      <span className="skill-letter">{skill.name.charAt(0)}</span>
                    </div>
                    <h3 className="skill-title-text">{skill.name}</h3>
                  </div>

                  {/* Progress / Confidence bar */}
                  <div className="skill-progress-track">
                    <div className="skill-progress-fill" style={{ width: skill.level }}></div>
                  </div>

                  {/* Tags */}
                  <div className="skill-tags-preview">
                    {skill.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag-micro-pill">{tag}</span>
                    ))}
                  </div>

                  <span className="flip-prompt">Hover for Architecture Details ↻</span>
                </div>

                {/* Back Side */}
                <div className="skill-flip-back">
                  <div className="back-badge-row">
                    <span className="back-netflix-n">S</span>
                    <span className="back-skill-name">{skill.name}</span>
                  </div>

                  <p className="skill-back-description">{skill.description}</p>

                  <div className="back-tags-cloud">
                    {skill.tags.map((tag, idx) => (
                      <span key={idx} className="tag-cloud-item">{tag}</span>
                    ))}
                  </div>

                  <div className="back-action-row">
                    <span className="back-production-label">● Production Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="no-skills-found">
            <p>No skills found matching "{searchQuery}" in this category.</p>
            <button className="reset-filter-btn" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Resume Bottom Promotion Banner */}
      <div className="skills-resume-banner">
        <div className="banner-text">
          <h3>Need Sagar's complete technical skill matrix & credentials?</h3>
          <p>Download the official AI/ML Engineer resume PDF directly.</p>
        </div>
        <div className="banner-buttons">
          <a href={personal.resumeUrl} download="Sagar_S_AI-Eng.pdf" className="banner-download-btn">
            Download Resume PDF (161 KB)
          </a>
          <Link to="/resume" className="banner-view-btn">
            View Live in Browser
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Skills;
