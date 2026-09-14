import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Resume.css';

function Resume() {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' or 'ats'
  const { personal, experience, certifications } = portfolioData;

  return (
    <div className="resume-page-container">
      {/* Resume Top Control Bar */}
      <div className="resume-control-bar">
        <div className="resume-title-group">
          <span className="netflix-tag">NETFLIX PORTFOLIO • OFFICIAL RESUME</span>
          <h1>{personal.name} — Resume</h1>
          <p className="resume-subtitle">
            {personal.title} | {personal.location} | {personal.phone} | {personal.email}
          </p>
        </div>

        <div className="resume-action-buttons">
          <a
            href={personal.resumeUrl}
            download="Sagar_S_AI-Eng.pdf"
            className="action-btn download-btn"
            title="Download PDF"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download PDF</span>
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn preview-btn"
            title="Open in new window"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>Open in Tab</span>
          </a>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="resume-tabs-wrapper">
        <button
          className={`resume-tab-btn ${activeTab === 'pdf' ? 'active' : ''}`}
          onClick={() => setActiveTab('pdf')}
        >
          📄 Live PDF Document
        </button>
        <button
          className={`resume-tab-btn ${activeTab === 'ats' ? 'active' : ''}`}
          onClick={() => setActiveTab('ats')}
        >
          ⚡ Interactive Resume Breakdown
        </button>
      </div>

      {/* Main View Area */}
      {activeTab === 'pdf' ? (
        <div className="pdf-viewer-card">
          <div className="pdf-status-banner">
            <span className="dot-live"></span>
            <span>Displaying Verified Resume: <strong>Sagar_S_AI-Eng.pdf</strong></span>
          </div>

          <div className="pdf-frame-wrapper">
            <object
              data={personal.resumeUrl}
              type="application/pdf"
              className="pdf-object"
            >
              <iframe
                src={`${personal.resumeUrl}#toolbar=1&navpanes=0`}
                title="Sagar S Resume"
                className="pdf-iframe"
              >
                <div className="pdf-fallback-notice">
                  <p>Your browser doesn't support direct PDF embedding.</p>
                  <a
                    href={personal.resumeUrl}
                    download="Sagar_S_AI-Eng.pdf"
                    className="action-btn download-btn"
                  >
                    Download Resume PDF
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      ) : (
        /* Interactive Breakdown */
        <div className="ats-resume-container">
          {/* Header Contact */}
          <header className="ats-header">
            <h2>{personal.name}</h2>
            <div className="ats-title-sub">
              <strong>Agentic AI Engineer | LLM Applications | Multi-Agent AI | RAG | Backend Engineering</strong>
            </div>
            <div className="ats-contact-row">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              <span>•</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/sagarchalat</a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">github.com/sagarchalat</a>
              <span>•</span>
              <a href={personal.website} target="_blank" rel="noopener noreferrer">sagarchalatan.netlify.app</a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="ats-section">
            <h3 className="ats-section-title">PROFESSIONAL SUMMARY</h3>
            <p className="ats-summary-text">{personal.summary}</p>
          </section>

          {/* Technical Skills */}
          <section className="ats-section">
            <h3 className="ats-section-title">TECHNICAL SKILLS</h3>
            <div className="ats-skills-grid">
              <div className="ats-skill-line">
                <strong>Agentic AI & LLM:</strong> Agentic AI, Multi-Agent Systems, LLM Application Development, RAG, Prompt Engineering, Tool Calling, AI Workflow Orchestration, LangChain, HuggingFace, Semantic Search, Embeddings, Model Evaluation
              </div>
              <div className="ats-skill-line">
                <strong>Languages:</strong> Python, Java, SQL, Bash
              </div>
              <div className="ats-skill-line">
                <strong>Backend:</strong> FastAPI, Flask, REST APIs, AsyncIO, Microservices
              </div>
              <div className="ats-skill-line">
                <strong>Databases & Vector Stores:</strong> PostgreSQL, MongoDB, FAISS, ChromaDB
              </div>
              <div className="ats-skill-line">
                <strong>Cloud & DevOps:</strong> Docker, Kubernetes, Google Cloud Platform (GCP), Git, GitHub Actions, CI/CD, Linux
              </div>
              <div className="ats-skill-line">
                <strong>Computer Science:</strong> Data Structures & Algorithms, OOP, Design Patterns, Distributed Systems, Multithreading
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="ats-section">
            <h3 className="ats-section-title">PROFESSIONAL EXPERIENCE</h3>
            {experience.map((exp) => (
              <div key={exp.id} className="ats-exp-block">
                <div className="ats-exp-header">
                  <div>
                    <strong className="ats-exp-role">{exp.role}</strong> | <span className="ats-exp-company">{exp.company}</span>, {exp.location}
                  </div>
                  <span className="ats-exp-period">{exp.period}</span>
                </div>
                <ul className="ats-bullet-list">
                  <li>Design and build scalable FastAPI microservices that power enterprise AI applications and expose REST APIs for LLM-driven workflows.</li>
                  <li>Build production RAG pipelines -- semantic search and vector-based document retrieval -- to ground LLM responses in real enterprise knowledge.</li>
                  <li>Design modular backend services that connect AI components and enterprise applications through reusable, well-defined API contracts.</li>
                  <li>Write Python automation for deployment validation and recurring engineering tasks, cutting down manual effort across the team.</li>
                  <li>Containerize AI services with Docker and deploy them on Kubernetes clusters running on GCP.</li>
                  <li>Work in Linux production environments daily -- debugging, monitoring, and keeping AI services healthy.</li>
                  <li>Collaborate cross-functionally using Agile practices, Git workflows, peer code review, and CI/CD.</li>
                  <li>
                    <strong>Proposed an enterprise AI QA Operating System as an internal innovation initiative and led its technical architecture and implementation with the engineering team</strong> -- a platform that automates requirement analysis, test planning, execution, and reporting through coordinated AI agents working over a shared knowledge base.
                  </li>
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="ats-section">
            <h3 className="ats-section-title">PROJECTS</h3>

            <div className="ats-project-item">
              <div className="ats-project-header">
                <strong>AI QA Operating System (AQOS) — Enterprise Multi-Agent AI Platform</strong>
              </div>
              <div className="ats-tech-sub">Python, FastAPI, LangChain, RAG, PostgreSQL, Vector Database, Docker, Kubernetes, GCP</div>
              <ul className="ats-bullet-list">
                <li>Conceived and designed an enterprise AI quality-engineering platform as a personal project, then presented the concept internally, where it grew into an implementation initiative with active engineering collaboration.</li>
                <li>Played a lead role in designing and implementing a multi-agent AI architecture that automates requirement analysis, test planning, execution, defect triage, root-cause analysis, and release reporting through coordinated AI agents.</li>
                <li>Built RAG pipelines using vector embeddings and semantic search to give the agents reliable access to enterprise knowledge.</li>
                <li>Developed FastAPI microservices exposing REST APIs for requirement ingestion, orchestration, execution tracking, reporting, and AI workflow integration.</li>
                <li>Designed the backend architecture integrating AI agents with enterprise systems through modular, tool-callable APIs that support autonomous workflows.</li>
                <li>Used PostgreSQL and a vector database for structured application data, embeddings, and semantic document retrieval.</li>
                <li>Containerized services with Docker and supported scalable Kubernetes deployments on GCP.</li>
                <li>Contributed across production backend engineering, cloud deployment, and AI orchestration, working closely with cross-functional engineering teams.</li>
              </ul>
            </div>

            <div className="ats-project-item">
              <div className="ats-project-header">
                <strong>Enterprise RAG Chatbot</strong>
              </div>
              <div className="ats-tech-sub">Python, LangChain, FAISS, FastAPI, GCP</div>
              <ul className="ats-bullet-list">
                <li>Built an intelligent document retrieval chatbot using RAG architecture and chunking strategies.</li>
                <li>Implemented semantic search using vector embeddings and dense FAISS index.</li>
                <li>Grounded LLM responses in real enterprise knowledge with fast retrieval latencies.</li>
              </ul>
            </div>

            <div className="ats-project-item">
              <div className="ats-project-header">
                <strong>LLM Fine-Tuning Pipeline</strong>
              </div>
              <div className="ats-tech-sub">PyTorch, Hugging Face, PEFT</div>
              <ul className="ats-bullet-list">
                <li>Fine-tuned open-source LLMs on custom datasets for domain adaptation.</li>
                <li>Built automated evaluation workflows for benchmarking model performance.</li>
              </ul>
            </div>

            <div className="ats-project-item">
              <div className="ats-project-header">
                <strong>MLOps Deployment Pipeline</strong>
              </div>
              <div className="ats-tech-sub">Docker, Kubernetes, GitHub Actions, MLflow</div>
              <ul className="ats-bullet-list">
                <li>Designed CI/CD pipelines for training, testing, and deploying ML models.</li>
                <li>Automated model versioning and deployment rollback.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="ats-section">
            <h3 className="ats-section-title">CERTIFICATIONS</h3>
            <ul className="ats-bullet-list">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="ats-section">
            <h3 className="ats-section-title">EDUCATION</h3>
            <div className="ats-exp-header">
              <div>
                <strong>{personal.education.degree}</strong>
                <div>{personal.education.institution}</div>
              </div>
              <span>{personal.education.year}</span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Resume;
