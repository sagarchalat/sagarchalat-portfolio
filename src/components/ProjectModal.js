import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Reset to overview whenever project changes
  useEffect(() => {
    setActiveTab('overview');
  }, [project]);

  if (!project) return null;

  return (
    <div className="netflix-modal-backdrop" onClick={onClose}>
      <div className="netflix-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Modal Banner */}
        <div className="modal-banner">
          {project.poster ? (
            <img src={project.poster} alt={project.title} className="modal-banner-img" />
          ) : (
            <div className="modal-banner-fallback">
              <span className="fallback-badge">SAGAR AI PRODUCTION</span>
              <h2>{project.title}</h2>
            </div>
          )}
          <div className="modal-banner-gradient"></div>
          <div className="modal-banner-info">
            <span className="modal-badge">{project.badge}</span>
            <h1 className="modal-title">{project.title}</h1>
            <div className="modal-meta-row">
              <span className="meta-match">{project.rating || '98% Match'}</span>
              <span className="meta-year">{project.year || '2025'}</span>
              <span className="meta-badge-hd">ULTRA HD 4K</span>
              <span className="meta-category">{project.category}</span>
              {project.docxUrl && (
                <span className="meta-badge-spec">HLD & LLD SPEC READY</span>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="modal-nav-tabs">
          <button
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="tab-icon">📋</span>
            <span>Overview & Highlights</span>
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'hld' ? 'active' : ''}`}
            onClick={() => setActiveTab('hld')}
          >
            <span className="tab-icon">📐</span>
            <span>High-Level Design (HLD)</span>
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'lld' ? 'active' : ''}`}
            onClick={() => setActiveTab('lld')}
          >
            <span className="tab-icon">⚙️</span>
            <span>Low-Level Design (LLD)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-container">
          <div className="modal-main-col">
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="tab-panel-content fade-in">
                <p className="modal-description">{project.summary}</p>

                {/* Highlights from Resume */}
                <div className="modal-section">
                  <h3 className="section-heading">Key Engineering Highlights</h3>
                  <ul className="modal-highlights-list">
                    {project.highlights.map((point, index) => (
                      <li key={index}>
                        <span className="highlight-bullet">▶</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Pipeline */}
                {project.architecture && (
                  <div className="modal-section">
                    <h3 className="section-heading">System Architecture & Pipeline</h3>
                    <div className="architecture-box">
                      <code>{project.architecture}</code>
                    </div>
                  </div>
                )}

                {/* HLD & LLD Teaser Callout */}
                <div className="architecture-callout-box">
                  <div className="callout-text">
                    <h4>Detailed Architecture Specifications (HLD & LLD) Available</h4>
                    <p>
                      Inspect the system topology, sequence dataflows, class hierarchy, REST APIs, and database schemas directly in the tabs above, or download the full specification document.
                    </p>
                  </div>
                  <div className="callout-actions">
                    <button
                      className="tab-switch-action-btn"
                      onClick={() => setActiveTab('hld')}
                    >
                      <span>Explore HLD Topology ▶</span>
                    </button>
                    {project.docxUrl && (
                      <a
                        href={project.docxUrl}
                        download={project.docxName || `${project.id}_architecture.docx`}
                        className="callout-download-btn"
                      >
                        <span>📥 Download .docx</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: HIGH-LEVEL DESIGN (HLD) */}
            {activeTab === 'hld' && (
              <div className="tab-panel-content fade-in">
                <div className="spec-header-row">
                  <div>
                    <h3 className="section-heading">High-Level Architectural Design (HLD)</h3>
                    <p className="spec-subtext">
                      System topology, distributed component boundaries, and end-to-end dataflow sequence.
                    </p>
                  </div>
                  {project.docxUrl && (
                    <a
                      href={project.docxUrl}
                      download={project.docxName || `${project.id}_architecture.docx`}
                      className="spec-header-docx-btn"
                      title="Download full architectural document"
                    >
                      <span>📄 Download DOCX</span>
                    </a>
                  )}
                </div>

                {/* System Topology Grid */}
                {project.hld && project.hld.topology && (
                  <div className="modal-section">
                    <h4 className="subsection-title">1. System Topology & Distributed Components</h4>
                    <div className="topology-grid">
                      {project.hld.topology.map((comp, idx) => (
                        <div key={idx} className="topology-card">
                          <div className="topology-card-header">
                            <span className="topology-idx">0{idx + 1}</span>
                            <span className="topology-tech">{comp.tech}</span>
                          </div>
                          <h5 className="topology-name">{comp.name}</h5>
                          <p className="topology-role">{comp.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dataflow & Sequence */}
                {project.hld && project.hld.dataflow && (
                  <div className="modal-section">
                    <h4 className="subsection-title">2. End-to-End Execution Sequence & Dataflow</h4>
                    <div className="dataflow-timeline">
                      {project.hld.dataflow.map((step, idx) => (
                        <div key={idx} className="dataflow-step">
                          <div className="step-marker">
                            <span className="step-num">{idx + 1}</span>
                            {idx < project.hld.dataflow.length - 1 && <div className="step-line"></div>}
                          </div>
                          <div className="step-content">
                            <p className="step-text">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scalability & Fault Tolerance */}
                {project.hld && project.hld.scalability && (
                  <div className="modal-section">
                    <h4 className="subsection-title">3. High Availability & Scalability Strategy</h4>
                    <div className="scalability-callout">
                      <div className="scalability-icon">⚡</div>
                      <div className="scalability-content">
                        <strong>Production Scalability Model:</strong>
                        <p>{project.hld.scalability}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: LOW-LEVEL DESIGN (LLD) */}
            {activeTab === 'lld' && (
              <div className="tab-panel-content fade-in">
                <div className="spec-header-row">
                  <div>
                    <h3 className="section-heading">Low-Level Technical Design (LLD)</h3>
                    <p className="spec-subtext">
                      Class implementations, REST API payload contracts, and database schema mappings.
                    </p>
                  </div>
                  {project.docxUrl && (
                    <a
                      href={project.docxUrl}
                      download={project.docxName || `${project.id}_architecture.docx`}
                      className="spec-header-docx-btn"
                      title="Download full architectural document"
                    >
                      <span>📄 Download DOCX</span>
                    </a>
                  )}
                </div>

                {/* Class & Component Design */}
                {project.lld && project.lld.classes && (
                  <div className="modal-section">
                    <h4 className="subsection-title">1. Key Classes & Component Responsibilities</h4>
                    <div className="lld-classes-grid">
                      {project.lld.classes.map((cls, idx) => (
                        <div key={idx} className="lld-class-card">
                          <div className="class-header">
                            <span className="class-icon">class</span>
                            <code className="class-name">{cls.name}</code>
                          </div>
                          <p className="class-desc">{cls.responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* REST API Endpoints */}
                {project.lld && project.lld.endpoints && (
                  <div className="modal-section">
                    <h4 className="subsection-title">2. REST API Specifications & Routing Contracts</h4>
                    <div className="api-endpoints-table-wrapper">
                      <table className="api-table">
                        <thead>
                          <tr>
                            <th>Method</th>
                            <th>Endpoint Route</th>
                            <th>Contract & Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.lld.endpoints.map((ep, idx) => (
                            <tr key={idx}>
                              <td>
                                <span className={`method-badge method-${ep.method.toLowerCase()}`}>
                                  {ep.method}
                                </span>
                              </td>
                              <td>
                                <code className="endpoint-path">{ep.path}</code>
                              </td>
                              <td className="endpoint-desc">{ep.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Database & Schema Definitions */}
                {project.lld && project.lld.database && (
                  <div className="modal-section">
                    <h4 className="subsection-title">3. Persistence & Vector Database Schemas</h4>
                    <div className="schemas-grid">
                      {project.lld.database.map((db, idx) => (
                        <div key={idx} className="schema-card">
                          <div className="schema-card-top">
                            <span className="schema-icon">🗄️</span>
                            <code className="schema-table">{db.table}</code>
                          </div>
                          <p className="schema-cols">
                            <strong>Columns & Types:</strong> {db.columns}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column / Sidebar */}
          <div className="modal-side-col">
            {/* DOCX Specification Download Box */}
            {project.docxUrl && (
              <div className="docx-download-card">
                <div className="docx-badge">OFFICIAL ARCHITECTURE SPEC</div>
                <div className="docx-icon-row">
                  <div className="docx-file-badge">
                    <span className="word-icon">W</span>
                    <span className="word-ext">DOCX</span>
                  </div>
                  <div className="docx-meta">
                    <span className="docx-name">{project.docxName}</span>
                    <span className="docx-desc">HLD + LLD Complete Specification</span>
                  </div>
                </div>
                <a
                  href={project.docxUrl}
                  download={project.docxName || `${project.id}_architecture.docx`}
                  className="modal-cta-btn docx-primary-cta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  <span>Download HLD/LLD (.docx)</span>
                </a>
                <span className="docx-note">Includes Topology, Dataflows, API contracts & DB Schemas</span>
              </div>
            )}

            <div className="meta-block">
              <span className="meta-label">Tech Stack:</span>
              <div className="tech-tags-group">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="meta-block">
              <span className="meta-label">Domain:</span>
              <span className="meta-val">{project.category}</span>
            </div>

            <div className="meta-block">
              <span className="meta-label">Architecture Status:</span>
              <span className="meta-val status-streaming">● Production Ready (HLD/LLD)</span>
            </div>

            <div className="modal-cta-group">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-cta-btn primary-cta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
              )}
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-cta-btn secondary-cta"
              >
                <span>Check in Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
