/**
 * Technical Skills Data
 * Categorized skills with honest proficiency notes.
 */
export const skillsData = {
  sectionTitle: "Technical Skills",
  sectionSubtitle: "03 // CAPABILITIES & TOOLS",
  intro:
    "A transparent overview of the programming languages, frameworks, and engineering tools I use to build projects and develop algorithmic fluency.",

  categories: [
    {
      name: "Programming Languages",
      description: "Primary languages used for algorithms, modeling, and application logic.",
      skills: [
        { name: "Python", status: "Primary / Active", note: "Algorithms, data analysis & ML workflows" },
        { name: "JavaScript (ES6+)", status: "Active", note: "Web application development & UI logic" },
        { name: "C / C++", status: "Academic Fundamentals", note: "Memory concepts & core programming fundamentals" },
      ],
    },
    {
      name: "Artificial Intelligence & ML",
      description: "Foundational machine learning techniques and practical experiments.",
      skills: [
        { name: "Supervised Learning", status: "Active Learning", note: "Regression & classification concepts" },
        { name: "Linear Regression", status: "Hands-on Practice", note: "Residuals, slope/intercept, predictive modeling" },
        { name: "Data Preprocessing", status: "Hands-on Practice", note: "Handling missing data, encoding & feature scaling" },
        { name: "Model Evaluation", status: "Active Learning", note: "MSE, RMSE, R-squared & metric interpretation" },
        { name: "Scikit-Learn Basics", status: "Learning & Exploring", note: "Model pipelines and baseline fitting" },
      ],
    },
    {
      name: "Frontend Development",
      description: "Crafting structured, accessible, and responsive user interfaces.",
      skills: [
        { name: "React", status: "Active Practice", note: "Component architecture, hooks, and state flow" },
        { name: "HTML5 & Semantic Markup", status: "Proficient", note: "Accessible layout structure & SEO" },
        { name: "CSS3 & Responsive Design", status: "Proficient", note: "Flexbox, Grid, custom styling & media queries" },
      ],
    },
    {
      name: "Backend & APIs",
      description: "Developing services to connect data and models to user applications.",
      skills: [
        { name: "FastAPI", status: "Active Practice", note: "High-performance Python REST endpoints" },
        { name: "REST API Design", status: "Active Practice", note: "HTTP methods, payload validation, status codes" },
      ],
    },
    {
      name: "Databases & Storage",
      description: "Managing persistent data for applications.",
      skills: [
        { name: "MongoDB", status: "Hands-on Practice", note: "Document collections & schema design" },
        { name: "SQL Fundamentals", status: "Academic Knowledge", note: "Relational queries, joins, and indexing concepts" },
      ],
    },
    {
      name: "Developer Tools & Workflow",
      description: "Tools for version control, debugging, and software lifecycle.",
      skills: [
        { name: "Git & GitHub", status: "Daily Workflow", note: "Branching, commits, pull requests & repositories" },
        { name: "VS Code", status: "Primary Editor", note: "Configured extensions, linting & debugging" },
        { name: "Postman", status: "Familiar", note: "API testing and endpoint inspection" },
      ],
    },
  ],
};
