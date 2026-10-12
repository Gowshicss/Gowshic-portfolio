import { personalData } from '../data/personal';

export default function Hero() {
  const handleImageError = (e) => {
    e.currentTarget.src = '/images/fallback-placeholder.svg';
  };

  return (
    <section className="hero-split-container" id="hero">
      {/* LEFT PANEL - Text, Identity & Direction */}
      <div className="hero-panel-left">
        <div className="hero-eyebrow">
          <span>//</span>
          <span>{personalData.education.degree.toUpperCase()}</span>
        </div>

        <h1 className="hero-title">
          {personalData.headline.greeting}{' '}
          <span className="accent-name">{personalData.headline.name}</span>
          <span className="role-title">{personalData.headline.title}</span>
        </h1>

        <p className="hero-intro">{personalData.intro}</p>

        {/* Focus Tags */}
        <div className="hero-focus-tags" aria-label="Key Focus Areas">
          <span className="hero-focus-tag">AI &amp; Machine Learning</span>
          <span className="hero-focus-tag">Data Structures &amp; Algorithms</span>
          <span className="hero-focus-tag">Python &amp; Problem Solving</span>
          <span className="hero-focus-tag">Full-Stack Web</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Explore Projects <span>↓</span>
          </a>

          <a
            href={personalData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View GitHub <span>↗</span>
          </a>

          <a
            href={personalData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tertiary"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>

        {/* Hero Footer Meta */}
        <div className="hero-footer-bar">
          <span>MCET // INFORMATION TECHNOLOGY</span>
          <span>ASPIRING AI ENGINEER</span>
          <span>{personalData.location.toUpperCase()}</span>
        </div>
      </div>

      {/* RIGHT PANEL - Large Portrait Area (Split Screen) */}
      <div className="hero-panel-right">
        <div className="hero-photo-wrapper">
          {/* Gold Geometric Corner Accents */}
          <div className="hero-photo-corners" aria-hidden="true" />

          {/* Photo Frame */}
          <div className="hero-photo-frame" title="Portrait of Gowshic">
            <img
              src={personalData.profileImage}
              alt={personalData.profileAlt}
              loading="eager"
              onError={handleImageError}
            />
          </div>

          {/* Status Badge */}
          <div className="hero-status-card">
            <div className="hero-status-info">
              <span className="hero-status-title">Academic &amp; Learning Status</span>
              <span className="hero-status-subtitle">{personalData.statusBadge}</span>
            </div>
            <span
              className="status-indicator-dot"
              title="Active student & AI engineer in training"
              aria-label="Active Status Indicator"
            />
          </div>

          <p className="photo-replace-note">
            Gowshic S. S. // Dr. MCET Information Technology
          </p>
        </div>
      </div>
    </section>
  );
}
