import { useEffect } from 'react';

export default function ImageLightboxModal({ isOpen, imageSrc, title, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="modal-card"
        style={{ maxWidth: '920px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '4px' }}>
              // HIGH-RESOLUTION PREVIEW
            </div>
            <h3 id="lightbox-title" style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
              {title || 'Image Preview'}
            </h3>
            {caption && (
              <p style={{ fontSize: '0.875rem', color: 'var(--gold-accent)', marginTop: '2px' }}>
                {caption}
              </p>
            )}
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close image preview"
          >
            ✕
          </button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          <div
            style={{
              background: '#0A0A0A',
              borderRadius: 'var(--border-radius-sm)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={imageSrc}
              alt={title || 'Enlarged Preview'}
              style={{ maxHeight: '72vh', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.dataset.hasFailed) return;
                target.dataset.hasFailed = 'true';
                console.error(`[Lightbox Image Error] Failed to load image at: ${target.src}`);
                target.src = '/images/fallback-placeholder.svg';
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
            <button onClick={onClose} className="btn-secondary">
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
