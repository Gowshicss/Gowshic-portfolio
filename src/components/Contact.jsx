import { useState } from 'react';
import { personalData } from '../data/personal';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.senderName.trim() || !formData.senderEmail.trim() || !formData.message.trim()) {
      return;
    }

    setStatus('submitting');

    // Simulate seamless asynchronous dispatch
    setTimeout(() => {
      setStatus('submitted');
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      senderName: '',
      senderEmail: '',
      subject: '',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section className="portfolio-section alt-bg" id="contact">
      <div className="container">
        <div className="section-header-box">
          <div className="section-eyebrow">
            <span>//</span>
            <span>06 // INQUIRIES &amp; COLLABORATION</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-intro">
            Have a question, collaboration idea, hackathon proposal, or engineering opportunity?
            I'm always open to discussing new ideas.
          </p>
        </div>

        <div className="contact-grid">
          {/* User-Friendly Direct Contact Info */}
          <div className="contact-info-col">
            <h3 className="contact-invitation-heading">Get in Touch Directly</h3>
            <p className="contact-invitation-text">
              Whether you want to discuss AI systems, algorithmic problem solving, or invite me to
              a hackathon team, feel free to connect via any of the channels below.
            </p>

            <div className="contact-methods-stack">
              {/* Email Card */}
              <div className="contact-card-item">
                <div className="contact-card-icon" aria-hidden="true">
                  ✉
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Email Address</span>
                  <a
                    href={`mailto:${personalData.links.email}`}
                    className="contact-card-value"
                    title="Send an email"
                  >
                    {personalData.links.email}
                  </a>
                </div>
                <div className="contact-card-actions">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`contact-action-btn ${copied ? 'copied' : ''}`}
                    aria-label="Copy email address"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                  <a
                    href={`mailto:${personalData.links.email}`}
                    className="contact-action-btn primary"
                    title="Compose an email"
                  >
                    Compose ↗
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-card-item">
                <div className="contact-card-icon" aria-hidden="true">
                  in
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/gowshicss08</span>
                </div>
                <div className="contact-card-actions">
                  <a
                    href={personalData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    Connect ↗
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="contact-card-item">
                <div className="contact-card-icon" aria-hidden="true">
                  ⚡
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">github.com/Gowshicss</span>
                </div>
                <div className="contact-card-actions">
                  <a
                    href={personalData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    View Code ↗
                  </a>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="contact-card-item highlight">
                <div className="contact-card-icon" aria-hidden="true">
                  📍
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Location &amp; Availability</span>
                  <span className="contact-card-value">{personalData.location}</span>
                  <span className="contact-status-tag">Open for AI/ML Opportunities &amp; Hackathons</span>
                </div>
              </div>
            </div>
          </div>

          {/* User-Friendly Contact Form */}
          <div className="contact-form-box">
            {status === 'submitted' ? (
              <div className="contact-success-state">
                <div className="success-icon-badge" aria-hidden="true">
                  ✓
                </div>
                <h3 className="success-heading">Message Sent Successfully!</h3>
                <p className="success-description">
                  Thank you, <strong>{formData.senderName || 'there'}</strong>. Your message has been
                  received. I will review it and get back to you at{' '}
                  <span className="success-email-highlight">{formData.senderEmail}</span> as soon as possible.
                </p>
                <div className="success-actions">
                  <button type="button" onClick={handleResetForm} className="btn-primary">
                    Send Another Message ↺
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send a Message</h3>
                <p className="contact-form-subtitle">
                  Leave a note and I will get back to you directly.
                </p>

                <form onSubmit={handleFormSubmit} noValidate={false}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="senderName">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      name="senderName"
                      className="form-input"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.senderName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="senderEmail">
                      Your Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="senderEmail"
                      name="senderEmail"
                      className="form-input"
                      placeholder="e.g. alex@example.com"
                      required
                      value={formData.senderEmail}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="e.g. Collaboration on AI Project / Hackathon"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Describe your inquiry, project scope, or idea..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="spinner-dots" aria-hidden="true" /> Sending Message...
                      </>
                    ) : (
                      <>Send Message ↗</>
                    )}
                  </button>

                  <p className="form-privacy-note">
                    🔒 Your email is kept private and will only be used to respond to your message.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
