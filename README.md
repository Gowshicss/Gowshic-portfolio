# Gowshic — Personal Developer Portfolio (Black + White + Gold Edition)

> **Aspiring AI Engineer | B.Tech Information Technology, MCET**

An image-focused developer portfolio built with React + Vite. Features a premium **Black + White + Gold** palette (`#0A0A0A`, `#141414`, `#1C1C1C`, `#FFFFFF`, `#B7B7B7`, `#C9A44C`, `#303030`), Tomasz Gajda split-screen hero, image-led hackathon and leadership galleries, and multi-screenshot project showcases.

---

## 🎨 Design Theme & Colors

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Background** | `#0A0A0A` | Primary page canvas |
| **Secondary Background** | `#141414` | Split hero right panel, alternate sections |
| **Card Background** | `#1C1C1C` | Cards, modals, dashboard frames |
| **Primary Text** | `#FFFFFF` | Headings, titles, high-emphasis text |
| **Secondary Text** | `#B7B7B7` | Body text, descriptions |
| **Gold Accent** | `#C9A44C` | Selected headings, badges, borders, CTA buttons, active tabs |
| **Gold Hover** | `#E0BD69` | Interactive button & link hover states |
| **Borders** | `#303030` | Clean geometric borders and dividers |

---

## 📌 Section Order

The application strictly follows this sequence:
1. **About / Hero** (`#hero` / `#about`) — Split-screen layout with text on the left and a large framed portrait on the right.
2. **Achievements and Leadership** (`#achievements`) — Image-led hackathon awards, IGNITE photo gallery, and project defense presentations.
3. **Skills** (`#skills`) — Transparent technical toolkit with honest proficiency notes.
4. **Projects** (`#projects`) — Prominent screenshot-first project cards with multi-screenshot modal support.
5. **Education and Certificates** (`#education`) — Academic credentials, editable CGPA, search filter, and full-resolution certificate inspection modal.
6. **Contact** (`#contact`) — Direct mailto dispatch, 1-click email copy with gold indicator, and official links.

---

## 🖼️ Exact Image Paths & Asset Replacement Guide

Whenever you add your genuine photograph or screenshot, save it into the folder listed below. If an image is ever missing, a built-in designed placeholder automatically displays to prevent broken-image icons.

### 1. Hero Profile Photo
* **Target File**: `public/images/profile/gowshic.jpg`
* **Current Config**: [`src/data/personal.js`](file:///c:/gowshicss-portfolio/src/data/personal.js)
* **How to update**:
  ```js
  // in src/data/personal.js
  profileImage: "/images/profile/gowshic.jpg",
  ```

### 2. Project Screenshots (Screenshots appear before descriptions)
* **TechNova**:
  * Main Dashboard: `public/images/projects/technova/technova-1.jpg`
  * Student Profile View: `public/images/projects/technova/technova-2.jpg`
* **FactoryMind AI**:
  * Telemetry Stream: `public/images/projects/factorymind-ai/factorymind-1.jpg`
  * Incident Alert Logs: `public/images/projects/factorymind-ai/factorymind-2.jpg`
* **Student Marks Predictor**:
  * Scatter & Regression Plot: `public/images/projects/marks-predictor.jpg`
* **Current Config**: [`src/data/projects.js`](file:///c:/gowshicss-portfolio/src/data/projects.js)

### 3. Achievements & Hackathon Awards
* **TechNova Winning Certificate (₹750, 2nd Place, NEXORA'26)**: `public/images/achievements/technova-winning.jpeg`
* **FactoryMind AI Award Certificate (₹1,000, 3rd Place)**: `public/images/achievements/factorymind-award.jpg`
* **FactoryMind AI Prize Money Photo**: `public/images/achievements/factorymind-awardmoney.jpg`
* **Feature1 AI Award Certificate (₹2,000)**: `public/images/achievements/feature-1-award.jpg`
* **Feature1 AI Prize Money Photo**: `public/images/achievements/feature1-money.jpg`
* **Current Config**: [`src/data/achievements.js`](file:///c:/gowshicss-portfolio/src/data/achievements.js)

### 4. IGNITE Activities & Leadership Gallery
* **Department Symposium**: `public/images/ignite/ignite-symposium.jpg`
* **Coding & DSA Workshop**: `public/images/ignite/ignite-workshop.jpg`
* **Executive Team Photo**: `public/images/ignite/ignite-team.jpg`
* **Current Config**: [`src/data/achievements.js`](file:///c:/gowshicss-portfolio/src/data/achievements.js)

### 5. Project Presentations & Defenses
* **TechNova Presentation**: `public/images/presentations/technova-presentation.jpg`
* **FactoryMind AI Pitch**: `public/images/presentations/factorymind-presentation.jpg`
* **Current Config**: [`src/data/achievements.js`](file:///c:/gowshicss-portfolio/src/data/achievements.js)

### 6. Certificates & Credentials
* **NPTEL IIT Bombay Certificate**: `public/images/certificates/nptel-business-fundamentals.jpg` (or `.png`)
* **Current Config**: [`src/data/certificates.js`](file:///c:/gowshicss-portfolio/src/data/certificates.js)

---

## 💻 Development Commands

- **Start Local Development Server**:
  ```bash
  npm run dev
  ```
- **Run ESLint Checks**:
  ```bash
  npm run lint
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Bundle**:
  ```bash
  npm run preview
  ```
