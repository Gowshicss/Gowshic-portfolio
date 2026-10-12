import { useState } from 'react';
import { certificatesData } from '../data/certificates';
import { educationData } from '../data/education';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalCert, setActiveModalCert] = useState(null);

  const categories = certificatesData.categories || [
    'All',
    'Leadership & Honors',
    'Research & Presentations',
    'Hackathons & Competitions',
    'Professional Certifications',
    'Technical Symposia',
  ];

  const handleImageError = (e) => {
    const target = e.currentTarget;
    if (target.dataset.hasFailed) return;
    target.dataset.hasFailed = 'true';
    console.error(`[Certificate Image Error] Failed to load image at: ${target.src}`);
    target.src = '/images/fallback-placeholder.svg';
  };

  // Sort certificates deterministically from earliest date to latest date
  const sortedCertificates = [...certificatesData.certificates].sort((a, b) => {
    const dateA = a.sortDate || '9999-99-99';
    const dateB = b.sortDate || '9999-99-99';
    return dateA.localeCompare(dateB);
  });

  // Filter based on search term and category
  const query = searchTerm.toLowerCase();
  const filteredCertificates = sortedCertificates.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.description.toLowerCase().includes(query) ||
      (cert.subtitle && cert.subtitle.toLowerCase().includes(query)) ||
      (cert.distinction && cert.distinction.toLowerCase().includes(query));

    const matchesCategory =
      selectedCategory === 'All' || cert.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="portfolio-section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-box">
          <div className="section-eyebrow">
            <span>//</span>
            <span>{certificatesData.sectionSubtitle}</span>
          </div>
          <h2 className="section-title">{certificatesData.sectionTitle}</h2>
          <p className="section-intro">{certificatesData.intro}</p>
        </div>

        {/* =========================================================================
            PART A: EDUCATION (Clean Rectangular Spotlight Card)
            ========================================================================= */}
        <div className="education-part-wrapper" style={{ marginBottom: '56px' }}>
          <div className="education-spotlight-card">
            <div className="edu-main-info">
              <div className="section-eyebrow" style={{ marginBottom: '6px' }}>
                // UNDERGRADUATE DEGREE
              </div>
              <h3 className="edu-degree">{educationData.degree}</h3>
              <div className="edu-institution">
                {educationData.institution} · {educationData.location}
              </div>
              <p className="edu-note">{educationData.institutionNote}</p>

              <div
                className="edu-focus-area-title"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px',
                }}
              >
                Core Academic Domains &amp; Coursework:
              </div>
              <div className="edu-focus-list">
                {educationData.focusAreas.map((area) => (
                  <span key={area} className="tech-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="edu-cgpa-box">
              <div className="edu-cgpa-label">Graduation Timeline</div>
              <div className="edu-cgpa-val">{educationData.duration}</div>
              <div className="edu-cgpa-hint" style={{ marginTop: '8px' }}>
                {educationData.cgpa}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART B: VERIFIED CERTIFICATES & CREDENTIALS
            ========================================================================= */}
        <div className="certificates-part-wrapper">
          {/* Section Divider & Eyebrow */}
          <div className="section-header-box" style={{ marginBottom: '24px' }}>
            <div className="section-eyebrow" style={{ marginBottom: '6px' }}>
              // VERIFIED CREDENTIALS COLLECTION
            </div>
            <h3 className="awards-header" style={{ marginBottom: '6px' }}>
              Verified Credentials &amp; Certifications
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
              Chronological collection of verified academic credentials, conference presentations, hackathon awards, and technical symposium honors.
            </p>
          </div>

          {/* Search Input & Category Filter Pills */}
          <div className="cert-controls">
            <input
              type="text"
              className="cert-search-input"
              placeholder="Search certificates by title, issuer, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search certificates"
            />

            <div className="cert-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cert-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Single Main Certificate Collection Grid (Chronologically Ordered, Exactly Once) */}
          <div style={{ marginTop: '20px' }}>
            <div
              className="cert-grid-header-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                Certificates ({filteredCertificates.length})
              </h4>
              <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Earliest to Latest Date · Full Resolution Inspection
              </span>
            </div>

            {filteredCertificates.length > 0 ? (
              <div className="certificates-three-grid">
                {filteredCertificates.map((cert) => (
                  <article key={cert.id} className="certificate-chronological-card">
                    {/* Clean Certificate Thumbnail (No Overlay Text or Button On Top) */}
                    <div
                      className="cert-chrono-img-wrap"
                      onClick={() => setActiveModalCert(cert)}
                      title={`Click to inspect ${cert.title}`}
                    >
                      <img
                        src={cert.image}
                        alt={cert.imageAlt}
                        loading="lazy"
                        onError={handleImageError}
                      />
                    </div>

                    <div className="cert-chrono-body">
                      {/* Category Badge & Date Badge */}
                      <div className="cert-chrono-header">
                        <span className="gallery-tag">{cert.badge || cert.category}</span>
                        <span className="cert-chrono-date">{cert.date || cert.completionDate}</span>
                      </div>

                      {/* Accurate Title & Issuer */}
                      <h4 className="cert-chrono-title">{cert.title}</h4>
                      <div className="cert-chrono-issuer">
                        {cert.issuer}
                        {cert.department ? ` · ${cert.department}` : ''}
                      </div>

                      {/* Distinction Badge */}
                      {cert.distinction && (
                        <div className="cert-chrono-distinction">
                          {cert.distinction}
                        </div>
                      )}

                      {/* Concise 1-Line Description */}
                      <p className="cert-chrono-desc">
                        {cert.description}
                      </p>

                      {/* Clean "Inspect Certificate" Action Button Below Details */}
                      <div className="cert-chrono-actions">
                        <button
                          type="button"
                          className="btn-primary"
                          style={{
                            fontSize: '0.825rem',
                            padding: '9px 16px',
                            width: '100%',
                            justifyContent: 'center',
                          }}
                          onClick={() => setActiveModalCert(cert)}
                        >
                          Inspect Certificate ↗
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div
                style={{
                  padding: '48px',
                  textAlign: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  No verified certificates match your search query: <strong>"{searchTerm}"</strong>
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  style={{ fontSize: '0.85rem', padding: '8px 18px' }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full-Resolution Modal with Keyboard & Backdrop Dismiss */}
      {activeModalCert && (
        <CertificateModal
          certificate={activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />
      )}
    </section>
  );
}
