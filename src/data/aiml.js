/**
 * AI & Machine Learning Journey Data
 */
export const aimlData = {
  sectionTitle: "AI & Machine Learning Journey",
  sectionSubtitle: "07 // DATA, MODELS & EXPERIMENTATION",
  intro:
    "My focus is on understanding the core mathematics and logic behind machine learning. Rather than using libraries as black boxes, I study how models extract patterns from data, where assumptions hold, and where limitations arise.",

  learningAreas: [
    {
      id: "python-data",
      title: "Python for Data Analysis & ML",
      status: "Active Exploration",
      description: "Working with NumPy and pandas for tabular data manipulation, vectorization, and data summaries.",
    },
    {
      id: "supervised-learning",
      title: "Supervised Learning Fundamentals",
      status: "Active Learning",
      description: "Understanding labeled data, target variables, hypothesis functions, and loss minimization.",
    },
    {
      id: "regression-classification",
      title: "Regression & Classification",
      status: "Hands-on Practice",
      description: "Implementing continuous value predictions and studying classification decision boundaries.",
    },
    {
      id: "training-evaluation",
      title: "Model Training & Evaluation",
      status: "In Progress",
      description: "Splitting data (train/test), measuring Mean Squared Error (MSE), R² score, and evaluating fit.",
    },
    {
      id: "feature-preprocessing",
      title: "Feature Selection & Preprocessing",
      status: "Active Practice",
      description: "Scaling numeric attributes, removing uninformative features, and handling outliers responsibly.",
    },
    {
      id: "model-limitations",
      title: "Predictions & Model Limitations",
      status: "Core Focus",
      description: "Analyzing why simple models fail on non-linear phenomena and recognizing bias-variance tradeoffs.",
    },
    {
      id: "practical-usecases",
      title: "Applying AI/ML to Practical Problems",
      status: "Exploratory",
      description: "Connecting basic predictive outputs with frontend applications and REST APIs for real utility.",
    },
  ],

  featuredExperiment: {
    title: "Student Marks Prediction Experiment",
    type: "Introductory Machine Learning Experiment",
    problem:
      "Investigating the mathematical correlation between daily study hours and academic examination scores.",
    methodology:
      "Implemented using Ordinary Least Squares linear regression via Python and Scikit-Learn. Examined the linear coefficient (m) and intercept (c) to predict marks from study inputs.",
    keyTakeaway:
      "This is an educational exploratory model rather than a production-grade predictor. It taught me how outliers skew the best-fit line, the importance of residual analysis, and the danger of extrapolating beyond observed data ranges.",
    toolsUsed: ["Python", "NumPy", "Matplotlib", "Scikit-Learn"],
    image: "/images/projects/marks-predictor.svg",
    scopeNotice:
      "Academic learning experiment — focused on foundational mathematical concepts and regression metrics.",
  },
};
