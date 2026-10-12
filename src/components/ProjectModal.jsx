import { useEffect, useState } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const screenshots = project.screenshots || [{ src: project.image, caption: project.title }];
  const currentScreenshot = screenshots[activeScreenshotIdx] || screenshots[0];

  const handleImageError = (e) => {
    e.currentTarget.src = '/images/fallback-placeholder.svg';
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '4px' }}>
              // ARCHITECTURAL DOSSIER
            </div>
            <h3 id="modal-project-title" style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gold-accent)', fontWeight: 600 }}>
              {project.tagline}
            </p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* Main Screenshot Viewer */}
          <div className="modal-screenshot-frame">
            <img
              src={currentScreenshot.src}
              alt={currentScreenshot.caption || project.imageAlt}
              onError={handleImageError}
            />
          </div>

          {/* Screenshot Switcher (Multi-Screenshot Support) */}
          {screenshots.length > 1 && (
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gold-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                Available Views ({activeScreenshotIdx + 1}/{screenshots.length}):
              </div>
              <div className="screenshot-selector-row">
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    className={`screenshot-tab-btn ${activeScreenshotIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveScreenshotIdx(idx)}
                  >
                    View {idx + 1}: {s.caption || `Screenshot ${idx + 1}`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Motivation */}
          <div>
            <div className="modal-section-title">01 // Problem &amp; Motivation</div>
            <p className="modal-section-content">{project.problem}</p>
            <p className="modal-section-content" style={{ marginTop: '8px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Target Objective:</strong> {project.motivation}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div>
            <div className="modal-section-title">02 // Solution &amp; Technical Approach</div>
            <p className="modal-section-content">{project.solution}</p>
          </div>

          {/* Gowshic's Contribution */}
          <div>
            <div className="modal-section-title">03 // My Role &amp; Contribution</div>
            <p className="modal-section-content">{project.myContribution}</p>
          </div>

          {/* Challenges & Key Learnings */}
          <div>
            <div className="modal-section-title">04 // Challenges &amp; What I Learned</div>
            <p className="modal-section-content">
              <strong style={{ color: 'var(--text-primary)' }}>Engineering Hurdle:</strong> {project.challenges}
            </p>
            <p className="modal-section-content" style={{ marginTop: '8px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Takeaway:</strong> {project.learnings}
            </p>
          </div>

          {/* Technology Stack */}
          <div>
            <div className="modal-section-title">05 // Technologies &amp; Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub Repository <span>↗</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Live Demo <span>↗</span>
              </a>
            )}

            <button onClick={onClose} className="btn-secondary">
              Close Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
