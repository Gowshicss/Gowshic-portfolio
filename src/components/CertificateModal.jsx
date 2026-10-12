import { useEffect } from 'react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  const handleImageError = (e) => {
    e.currentTarget.src = '/images/fallback-placeholder.svg';
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '4px' }}>
              // VERIFIED CREDENTIAL
            </div>
            <h3 id="modal-cert-title" style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              {certificate.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gold-accent)', fontWeight: 600 }}>
              {certificate.issuer} · {certificate.distinction}
            </p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close certificate dialog"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* Certificate Image Frame */}
          <div
            style={{
              background: '#0A0A0A',
              padding: '16px',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={certificate.image}
              alt={certificate.imageAlt}
              style={{ maxHeight: '60vh', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
              onError={handleImageError}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '12px 16px', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                Term / Date
              </span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{certificate.completionDate}</strong>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '12px 16px', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                Recognition / Score
              </span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--gold-accent)' }}>{certificate.score}</strong>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '12px 16px', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                Status
              </span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--gold-accent)' }}>{certificate.status}</strong>
            </div>
          </div>

          <div>
            <div className="modal-section-title">Credential Scope &amp; Details</div>
            <p className="modal-section-content">{certificate.description}</p>
          </div>

          <div>
            <div className="modal-section-title">Skills &amp; Competencies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {certificate.skillsHighlighted.map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Verify on NPTEL <span>↗</span>
              </a>
            )}

            <button onClick={onClose} className="btn-secondary">
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
