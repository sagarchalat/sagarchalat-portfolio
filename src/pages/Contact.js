import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../assets/profile.jpg';
import './Contact.css';

function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '73605e24-f35c-4e84-ae35-4ae63286df9f',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Opportunity / Contact from Portfolio',
          message: formData.message,
          from_name: 'Sagar S Portfolio Lead'
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err) {
      setErrorMessage('Unable to send message right now. Please email directly at sagarchalatan@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-netflix-page">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-tag">NETFLIX PORTFOLIO • GET IN TOUCH</span>
          <h1>CONTACT & HIRE</h1>
          <p className="contact-subtitle">
            Looking for a high-impact Machine Learning Engineer specialized in LLMs, RAG, and production MLOps?
            Let's connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Profile Card & Direct Links */}
          <div className="contact-profile-card">
            <div className="profile-banner">
              <div className="avatar-frame">
                <img src={profileImage} alt={personal.name} className="contact-avatar-img" />
                <span className="status-dot-green"></span>
              </div>
              <h2>{personal.name}</h2>
              <span className="profile-title">{personal.title}</span>
              <span className="profile-company">STL Digital • Bangalore, India</span>
            </div>

            <div className="quick-actions-list">
              {/* Email */}
              <div className="contact-action-item">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="action-details">
                  <span className="action-label">Email</span>
                  <a href={`mailto:${personal.email}`} className="action-val">{personal.email}</a>
                </div>
                <button className="copy-btn" onClick={handleCopyEmail}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-action-item">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="action-details">
                  <span className="action-label">Phone</span>
                  <a href={`tel:${personal.phone}`} className="action-val">{personal.phone}</a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-action-item">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="action-details">
                  <span className="action-label">LinkedIn</span>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="action-val">
                    linkedin.com/in/sagarchalat
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-action-item">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="action-details">
                  <span className="action-label">GitHub</span>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="action-val">
                    github.com/sagarchalat
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="contact-action-item">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="action-details">
                  <span className="action-label">Portfolio</span>
                  <a href={personal.website} target="_blank" rel="noopener noreferrer" className="action-val">
                    Personal-Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href={personal.resumeUrl}
              download="Sagar_S_AI-Eng.pdf"
              className="card-download-resume-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>

          {/* Right Column: Message Form */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <p className="form-intro">Reach out regarding AI/ML opportunities, consulting, or project collaborations.</p>

            {formSubmitted ? (
              <div className="form-success-box">
                <div className="success-icon">✓</div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. Your message has been delivered directly to Sagar's inbox at <strong>sagarchalat@gmail.com</strong>.</p>
                <button className="reset-form-btn" onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="netflix-contact-form">
                {errorMessage && (
                  <div className="form-error-alert" style={{ color: '#ff4d4f', background: 'rgba(255, 77, 79, 0.12)', border: '1px solid rgba(255, 77, 79, 0.3)', padding: '12px 16px', borderRadius: '6px', fontSize: '0.9rem' }}>
                    ⚠️ {errorMessage}
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John Doe / Hiring Manager"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject / Opportunity</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="e.g. Machine Learning Engineer Role / RAG Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project, tech stack, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? '▶ Sending Message...' : '▶ Send Message to Sagar'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
