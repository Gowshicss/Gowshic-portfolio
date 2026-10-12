import { useState, useRef } from 'react';
import { achievementsData } from '../data/achievements';
import ImageLightboxModal from './ImageLightboxModal';

export default function Achievements() {
  const { leadership, awards, igniteGallery } = achievementsData;
  const [activeLightbox, setActiveLightbox] = useState(null);
  const galleryScrollRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      galleryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (src, title, caption) => {
    setActiveLightbox({ src, title, caption });
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  const handleImageError = (e) => {
    const target = e.currentTarget;
    if (target.dataset.hasFailed) return;
    target.dataset.hasFailed = 'true';
    console.error(`[Achievements Image Error] Failed to load image at: ${target.src}`);
    target.src = '/images/fallback-placeholder.svg';
  };

  return (
    <section className="portfolio-section alt-bg" id="achievements">
      <div className="container">
        <div className="section-header-box">
          <div className="section-eyebrow">
            <span>//</span>
            <span>{achievementsData.sectionSubtitle}</span>
          </div>
          <h2 className="section-title">{achievementsData.sectionTitle}</h2>
          <p className="section-intro">{achievementsData.intro}</p>
        </div>

        {/* 1. Verified Competitive Hackathon Awards (IMAGE-LED CARDS) */}
        <h3 className="awards-header">Verified Competition Awards</h3>
        <div className="awards-grid">
          {awards.map((award) => (
            <article key={award.id} id={award.id} className="award-card">
              {/* Primary Award Image */}
              <div
                className="award-card-img"
                onClick={() =>
                  openLightbox(
                    award.image,
                    award.title,
                    `${award.placement} • Award Presentation`
                  )
                }
                title={`Click to view ${award.title} photo at full size`}
              >
                <img
                  src={award.image}
                  alt={award.imageAlt || `${award.title} award photograph`}
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>

              <div className="award-card-body">
                <div className="award-prize-badge">{award.prize}</div>
                <h4 className="award-placement">{award.placement}</h4>
                <div className="award-event-name">{award.title}</div>
                <p className="award-desc">{award.description}</p>

                {/* Additional Prize-Money / Certificate Photographs */}
                {award.additionalImages && award.additionalImages.length > 0 && (
                  <div className="award-additional-gallery">
                    <div className="award-additional-strip">
                      {award.additionalImages.map((addImg, idx) => (
                        <div
                          key={idx}
                          className="award-additional-thumb-wrap"
                          onClick={() =>
                            openLightbox(
                              addImg.src,
                              addImg.title || `${award.title} — Verified Photo`,
                              addImg.alt || `${award.title} award presentation`
                            )
                          }
                          title={`Click to view ${addImg.title || 'photo'} at full size`}
                        >
                          <img
                            src={addImg.src}
                            alt={addImg.alt || `${award.title} photo`}
                            loading="lazy"
                            onError={handleImageError}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '14px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {award.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 2. Elected Student Leadership Spotlight */}
        <div className="leadership-spotlight" style={{ marginTop: '48px' }}>
          <div className="leadership-content">
            <div className="section-eyebrow" style={{ marginBottom: '8px' }}>
              // ELECTED STUDENT LEADERSHIP
            </div>
            <h3 className="leadership-role-title">
              {leadership.role} — {leadership.organization}
            </h3>
            <div className="leadership-org">
              {leadership.department} · {leadership.institution}
            </div>
            <p className="leadership-desc">{leadership.description}</p>
            {leadership.impactStatement && (
              <p className="leadership-desc" style={{ marginTop: '-8px', marginBottom: '20px' }}>
                {leadership.impactStatement}
              </p>
            )}

            <ul className="leadership-resp-list">
              {leadership.keyResponsibilities.map((resp, idx) => (
                <li key={idx} className="leadership-resp-item">
                  <span className="resp-bullet">›</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="leadership-image-wrap"
            onClick={() =>
              openLightbox(
                leadership.image,
                `${leadership.role} — ${leadership.organization}`,
                `${leadership.department} • ${leadership.institution}`
              )
            }
            title="Click to enlarge collaborative photo"
          >
            <img
              src={leadership.image}
              alt={leadership.imageAlt}
              loading="lazy"
              onError={handleImageError}
            />
            <span className="img-click-hint">View Photo ↗</span>
          </div>
        </div>

        {/* 3. Leadership Photo Gallery (IGNITE Gallery - Left-to-Right Horizontal Scroll) */}
        <div className="gallery-section-box" style={{ marginTop: '48px' }}>
          <div className="gallery-header-row">
            <div>
              <h3 className="awards-header" style={{ marginBottom: '6px' }}>IGNITE Gallery</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                Scroll horizontally from left to right to explore campus initiatives, student leadership, and event celebrations.
              </p>
            </div>
            <div className="gallery-scroll-nav">
              <button
                type="button"
                className="gallery-nav-btn"
                onClick={() => scrollGallery('left')}
                aria-label="Scroll left"
                title="Scroll gallery left"
              >
                ←
              </button>
              <button
                type="button"
                className="gallery-nav-btn"
                onClick={() => scrollGallery('right')}
                aria-label="Scroll right"
                title="Scroll gallery right"
              >
                →
              </button>
            </div>
          </div>

          <div className="gallery-scroll-container" ref={galleryScrollRef}>
            {igniteGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-scroll-item"
                onClick={() => openLightbox(item.image, item.title, item.caption)}
              >
                <div className="gallery-scroll-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <span className="img-click-hint">Enlarge ↗</span>
                </div>
                <div className="gallery-caption-box">
                  <span className="gallery-tag">{item.tag}</span>
                  <div className="gallery-title">{item.title}</div>
                  <div className="gallery-caption">{item.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(activeLightbox)}
        imageSrc={activeLightbox?.src}
        title={activeLightbox?.title}
        caption={activeLightbox?.caption}
        onClose={closeLightbox}
      />
    </section>
  );
}
