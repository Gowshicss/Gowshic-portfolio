import { projectsData } from '../data/projects';

export default function Projects() {
  const handleImageError = (e) => {
    e.currentTarget.src = '/images/fallback-placeholder.svg';
  };

  return (
    <section className="portfolio-section" id="projects">
      <div className="container">
        <div className="section-header-box">
          <div className="section-eyebrow">
            <span>//</span>
            <span>{projectsData.sectionSubtitle}</span>
          </div>
          <h2 className="section-title">{projectsData.sectionTitle}</h2>
          <p className="section-intro">{projectsData.intro}</p>
        </div>

        <div className="projects-grid">
          {projectsData.projects.map((proj) => (
            <article key={proj.id} className="project-card">
              {/* Clean project image display */}
              <div className="project-card-image-wrap">
                <img
                  src={proj.image}
                  alt={proj.imageAlt}
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-badge-row">
                  <span className="project-category-tag">{proj.category}</span>
                  {proj.awardBadge && (
                    <span className="project-award-tag">{proj.awardBadge}</span>
                  )}
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <h4 className="project-tagline">{proj.tagline}</h4>
                <p className="project-problem-text">{proj.problem}</p>

                {/* Tech Stack Tags */}
                <div className="project-tech-tags">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
