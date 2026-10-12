import { useState } from 'react';
import { aboutData } from '../data/about';

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="portfolio-section" id="about">
      <div className="container">
        <div className="section-header-box">
          <div className="section-eyebrow">
            <span>//</span>
            <span>{aboutData.sectionSubtitle}</span>
          </div>
          <h2 className="section-title">{aboutData.sectionTitle}</h2>
        </div>

        {/* Editorial Profile & Lead Intro */}
        <div className="about-editorial-block">
          <div className="about-editorial-text">
            <p className="about-lead-paragraph">{aboutData.leadParagraph}</p>
            <p className="about-sub-paragraph">
              Combining algorithmic discipline with hands-on software development. I prioritize
              understanding foundational mechanics over shallow familiarity, taking complex systems
              apart into methodical, reproducible components.
            </p>
            <div className="about-badges-strip">
              <span className="about-pill">B.Tech IT • CGPA 8.89</span>
              <span className="about-pill">Vice President // IGNITE</span>
              <span className="about-pill">AI/ML &amp; DSA Focused</span>
              <span className="about-pill">Dr. MCET, Pollachi</span>
            </div>
          </div>

          <div className="about-portrait-card">
            <div className="about-portrait-frame">
              {!imageFailed ? (
                <img
                  src={aboutData.profileImage}
                  alt={aboutData.profileAlt || 'Portrait of Gowshic S. S.'}
                  loading="lazy"
                  onError={() => setImageFailed(true)}
                  className="about-portrait-img"
                />
              ) : (
                <div className="about-portrait-fallback" role="img" aria-label="Portrait fallback">
                  <div className="fallback-avatar-icon">✦</div>
                  <div className="fallback-name">Gowshic S. S.</div>
                  <div className="fallback-role">Aspiring AI Engineer</div>
                </div>
              )}
            </div>
            <div className="about-portrait-meta">
              <span className="about-portrait-name">Gowshic S. S.</span>
              <span className="about-portrait-title">Undergraduate • Dr. MCET</span>
            </div>
          </div>
        </div>

        {/* Journey Highlights Box - Academic & Collaborative Trajectory */}
        <div className="about-highlights-box">
          <h3 className="about-highlights-title">Academic &amp; Collaborative Trajectory</h3>
          <div className="highlights-list">
            {aboutData.journeyHighlights.map((hl) => (
              <div key={hl.title} className="highlight-item">
                <div className="highlight-period">{hl.period}</div>
                <h4 className="highlight-name">{hl.title}</h4>
                <p className="highlight-detail">{hl.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
