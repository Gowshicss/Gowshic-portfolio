import { personalData } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">{personalData.name.toUpperCase()}</div>
            <div className="footer-brand-role">
              {personalData.role} · {personalData.education.institution}
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#about">About</a>
            <a href="#achievements">Achievements</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education &amp; Certs</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gowshic. Built with React &amp; Vite.</p>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
