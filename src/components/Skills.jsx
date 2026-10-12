import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section className="portfolio-section" id="skills">
      <div className="container">
        <div className="section-header-box">
          <div className="section-eyebrow">
            <span>//</span>
            <span>{skillsData.sectionSubtitle}</span>
          </div>
          <h2 className="section-title">{skillsData.sectionTitle}</h2>
          <p className="section-intro">{skillsData.intro}</p>
        </div>

        <div className="skills-grid">
          {skillsData.categories.map((cat) => (
            <div key={cat.name} className="skill-category-card">
              <h3 className="skill-category-name">{cat.name}</h3>
              <p className="skill-category-desc">{cat.description}</p>

              <div className="skill-items-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-item-name">{skill.name}</span>
                      <span className="skill-item-status">{skill.status}</span>
                    </div>
                    <span className="skill-item-note">{skill.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
