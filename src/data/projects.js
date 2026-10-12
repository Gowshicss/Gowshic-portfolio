/**
 * Projects Data
 * Image-focused portfolio entries with multiple screenshot support.
 * Screenshots are displayed before descriptions, with full modal inspect view.
 */
export const projectsData = {
  sectionTitle: "Featured Projects",
  sectionSubtitle: "04 // APPLIED ENGINEERING & AI PLATFORMS",
  intro:
    "Engineering software platforms and industrial AI intelligence to solve real-world problems.",

  projects: [
    {
      id: "technova",
      title: "TechNova",
      tagline: "Centralized Student Career & Placement Intelligence Platform",
      category: "Full-Stack Web & Intelligence",
      awardBadge: "2nd Place Winner (₹750 Prize)",
      problem:
        "Students frequently juggle fragmented records of their academic history, technical projects, verified skill badges, and campus placement eligibility across multiple disconnected portals.",
      motivation:
        "To provide students and career advisors with a unified, transparent command center that tracks readiness, highlights skill gaps, and prepares candidates systematically for placement drives.",
      myContribution:
        "Led core architecture and frontend development. Built responsive career dashboard modules, structured student data models, and implemented user flows for career readiness tracking.",
      solution:
        "Engineered a centralized web platform that aggregates academic performance, skill benchmarks, and portfolio submissions, generating structured readiness profiles for prospective campus recruiters.",
      techStack: ["React", "JavaScript", "FastAPI", "MongoDB", "Modern UI"],
      challenges:
        "Designing an intuitive dashboard layout that summarizes multifaceted student profiles without overwhelming users with excessive visual clutter.",
      learnings:
        "Mastered component reusability in React, state management across multi-step student data forms, and RESTful API integration using FastAPI.",
      image: "/images/projects/technova/technova-1.svg",
      imageAlt: "TechNova - Placement Intelligence Main Interface",
      screenshots: [
        {
          src: "/images/projects/technova/technova-1.svg",
          caption: "Primary Placement Intelligence & Readiness Dashboard",
        },
        {
          src: "/images/projects/technova/technova-2.svg",
          caption: "Candidate Metrics & Technical Benchmark Audit View",
        },
      ],
      githubUrl: "https://github.com/Gowshicss",
      liveDemoUrl: null, // Hidden until verified deployment URL is provided
      isFeatured: true,
      status: "Prototype & Hackathon Finalist",
    },
    {
      id: "factorymind-ai",
      title: "FactoryMind AI",
      tagline: "Industrial Operations Intelligence & Anomaly Monitoring",
      category: "Industrial AI & Analytics",
      awardBadge: "3rd Place Winner (₹1,000 Prize)",
      problem:
        "Industrial factory floors face unexpected machinery downtime and operational inefficiencies when telemetry parameters (temperature, vibration, pressure) deviate unnoticed.",
      motivation:
        "To design an intelligent monitoring framework that assists factory operators in tracking machine vitals and surfacing early operational anomalies before catastrophic failures occur.",
      myContribution:
        "Collaborated on telemetry pipeline architecture and developed the operator dashboard interface to visualize machine telemetry streams and alert statuses.",
      solution:
        "Constructed an industrial intelligence prototype tracking machine sensor thresholds and flagging telemetry drifts with prioritized status indicators.",
      techStack: ["Python", "FastAPI", "Machine Telemetry", "React", "Data Pipelines"],
      challenges:
        "Simulating realistic machine sensor timeseries data and keeping UI updates responsive under rapid telemetry stream events.",
      learnings:
        "Understood real-world industrial constraints, sensor drift patterns, and how software interfaces bridge complex machine telemetry to frontline operators.",
      image: "/images/projects/factorymind-ai/factorymind-1.svg",
      imageAlt: "FactoryMind AI - Industrial Operations Interface",
      screenshots: [
        {
          src: "/images/projects/factorymind-ai/factorymind-1.svg",
          caption: "Industrial Sensor Stream & Real-Time Node Network",
        },
        {
          src: "/images/projects/factorymind-ai/factorymind-2.svg",
          caption: "Predictive Incident Alert Console & Sensor Logs",
        },
      ],
      githubUrl: "https://github.com/Gowshicss",
      liveDemoUrl: null,
      isFeatured: true,
      status: "Hackathon Award Winning Prototype",
    },
    {
      id: "marks-predictor-ai",
      title: "Student Marks Predictor",
      tagline: "Linear Regression Study Hours & Grade Modeling",
      category: "AI/ML Learning Experiment",
      awardBadge: "ML Experiment",
      problem:
        "Examining how mathematical regression models predict academic scores based on student study habits while recognizing the boundaries of univariate linear modeling.",
      motivation:
        "To build an end-to-end regression experiment from scratch: formulating hypothesis functions, calculating coefficients, evaluating residuals, and interpreting metrics.",
      myContribution:
        "Sole creator. Formulated dataset, wrote data cleaning scripts, fitted the Ordinary Least Squares regression model, plotted the regression line, and computed MSE / R².",
      solution:
        "Developed a clean Python script and interactive notebook computing the linear relationship between hours spent studying and test score percentages.",
      techStack: ["Python", "NumPy", "Matplotlib", "Scikit-Learn"],
      challenges:
        "Handling edge cases where high study hours yield diminishing returns that a strictly linear assumption cannot capture.",
      learnings:
        "Gained deep appreciation for why linear regression is a foundational model, how to evaluate model assumptions, and the crucial distinction between correlation and causation.",
      image: "/images/projects/marks-predictor.svg",
      imageAlt: "Student Marks Predictor - Linear Regression Analysis",
      screenshots: [
        {
          src: "/images/projects/marks-predictor.svg",
          caption: "Ordinary Least Squares Best-Fit Line & Residuals Plot",
        },
      ],
      githubUrl: "https://github.com/Gowshicss",
      liveDemoUrl: null,
      isFeatured: false,
      status: "Exploratory ML Experiment",
    },
  ],
};
