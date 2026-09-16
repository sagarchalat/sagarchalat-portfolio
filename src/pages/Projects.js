import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import aqosPoster from '../assets/aqos_project.jpg';
import ragPoster from '../assets/rag_chatbot.jpg';
import llmPoster from '../assets/llm_finetune.jpg';
import mlopsPoster from '../assets/mlops_pipeline.jpg';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const { projects, masterDocxUrl } = portfolioData;

  // Map local posters to ensure bundler embeds them cleanly
  const posterMap = {
    'ai-qa-operating-system': aqosPoster,
    'enterprise-rag-chatbot': ragPoster,
    'llm-fine-tuning-pipeline': llmPoster,
    'mlops-deployment-pipeline': mlopsPoster
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'agentic') return p.category.includes('Agentic') || p.category.includes('Multi-Agent');
    if (filter === 'genai') return p.category.includes('Generative') || p.category.includes('Language');
    if (filter === 'mlops') return p.category.includes('Cloud') || p.category.includes('DevOps') || p.category.includes('MLOps');
    if (filter === 'cv_audio') return p.category.includes('Computer Vision') || p.category.includes('Voice');
    return true;
  });

  return (
    <div className="projects-page-container">
      {/* Netflix Series Header */}
      <div className="projects-header-banner">
        <span className="netflix-tagline">SAGARCHALAT ORIGINAL PRODUCTIONS</span>
        <h1 className="projects-title">FEATURED AI/ML PROJECTS</h1>
        <p className="projects-subtitle">
          Engineered for production scale. Inspect interactive High-Level Design (HLD) & Low-Level Design (LLD) architectures, or download the complete specification as Microsoft Word (.docx) documents.
        </p>

        {/* Master Architecture Compendium Download Hero Card */}
        {masterDocxUrl && (
          <div className="master-doc-banner">
            <div className="master-doc-badge">ENTERPRISE SPECIFICATIONS ARCHIVE</div>
            <div className="master-doc-content">
              <div className="master-doc-icon-wrap">
                <div className="master-doc-word-icon">W</div>
              </div>
              <div className="master-doc-info">
                <h3 className="master-doc-title">Master Projects HLD & LLD Compendium (.docx)</h3>
                <p className="master-doc-desc">
                  Download all 6 project specifications compiled into a comprehensive Microsoft Word document, covering distributed system topologies, end-to-end dataflows, class hierarchy, REST APIs, and database schemas.
                </p>
              </div>
              <a
                href={masterDocxUrl}
                download="Sagar_S_Master_Projects_HLD_LLD_Specifications.docx"
                className="master-download-cta"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <span>Download Master DOCX</span>
              </a>
            </div>
          </div>
        )}

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'agentic' ? 'active' : ''}`}
            onClick={() => setFilter('agentic')}
          >
            Agentic AI & Multi-Agent
          </button>
          <button
            className={`filter-btn ${filter === 'genai' ? 'active' : ''}`}
            onClick={() => setFilter('genai')}
          >
            Generative AI & LLMs
          </button>
          <button
            className={`filter-btn ${filter === 'mlops' ? 'active' : ''}`}
            onClick={() => setFilter('mlops')}
          >
            MLOps & Cloud Infrastructure
          </button>
          <button
            className={`filter-btn ${filter === 'cv_audio' ? 'active' : ''}`}
            onClick={() => setFilter('cv_audio')}
          >
            Computer Vision & Voice AI
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="netflix-projects-grid">
        {filteredProjects.map((project) => {
          const posterSrc = posterMap[project.id] || project.poster;

          return (
            <div
              key={project.id}
              className="netflix-project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-media-wrapper">
                {posterSrc ? (
                  <img src={posterSrc} alt={project.title} className="card-poster-img" />
                ) : (
                  <div className="card-fallback-poster">
                    <span className="fallback-n">S</span>
                    <span className="fallback-title">{project.title}</span>
                  </div>
                )}
                <div className="card-media-overlay"></div>
                <span className="card-top-badge">{project.badge}</span>
                {project.docxUrl && (
                  <span className="card-spec-tag">HLD & LLD READY</span>
                )}
              </div>

              <div className="card-body">
                <div className="card-meta-line">
                  <span className="card-rating">{project.rating}</span>
                  <span className="card-year">{project.year}</span>
                  <span className="card-tag-hd">4K</span>
                  <span className="card-tag-docx">.DOCX</span>
                </div>

                <h3 className="card-project-title">{project.title}</h3>
                <p className="card-snippet">{project.summary}</p>

                <div className="card-tech-chips">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="card-tech-pill">{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="card-tech-pill more">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className="card-actions">
                  <button
                    className="card-play-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>▶ Architecture</span>
                  </button>

                  {project.docxUrl && (
                    <a
                      href={project.docxUrl}
                      download={project.docxName || `${project.id}_architecture.docx`}
                      className="card-docx-btn"
                      onClick={(e) => e.stopPropagation()}
                      title={`Download ${project.title} HLD & LLD (.docx)`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                      </svg>
                      <span>DOCX</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-icon-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="GitHub Repository"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
