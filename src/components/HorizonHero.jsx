import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData } from '../data/personal';

gsap.registerPlugin(ScrollTrigger);

function checkWebGLSupport() {
  try {
    const testCanvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function HorizonHero() {
  const mountRef = useRef(null);
  const canvasRef = useRef(null);
  const [webglSupported] = useState(checkWebGLSupport);

  const handleImageError = (e) => {
    e.currentTarget.src = '/images/fallback-placeholder.svg';
  };

  useEffect(() => {
    if (!webglSupported) return;
    const canvas = canvasRef.current;
    const container = mountRef.current;
    if (!canvas || !container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Initialize WebGL renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (err) {
      console.warn('[HorizonHero] WebGL initialization failed:', err);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x080808, 1);

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.0018);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1500);
    camera.position.set(0, 0, 180);

    // Star Field Configuration (adapted to screen size)
    const isMobile = width < 768;
    const starCount = isMobile ? 1200 : 2800;

    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const colorGold = new THREE.Color(0xd6ad4d);
    const colorWhite = new THREE.Color(0xf5f5f5);
    const colorSoftBlue = new THREE.Color(0xa5c4d4);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Cylinder / Space tunnel distribution
      const radius = 40 + Math.random() * 420;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 1100;

      starPositions[i3] = Math.cos(angle) * radius;
      starPositions[i3 + 1] = Math.sin(angle) * radius * 0.65; // Slightly flattened for horizon feel
      starPositions[i3 + 2] = z;

      // Color variation: 45% gold, 45% crisp white, 10% soft cosmic tint
      const colorChoice = Math.random();
      let chosenColor = colorWhite;
      if (colorChoice < 0.45) {
        chosenColor = colorGold;
      } else if (colorChoice < 0.55) {
        chosenColor = colorSoftBlue;
      }

      starColors[i3] = chosenColor.r;
      starColors[i3 + 1] = chosenColor.g;
      starColors[i3 + 2] = chosenColor.b;

      starSizes[i] = Math.random() * 2.2 + 0.8;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    // Star point texture for smooth glowing circular stars
    const createStarTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      const ctx = pCanvas.getContext('2d');
      if (!ctx) return null;

      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(214, 173, 77, 0.8)');
      grad.addColorStop(0.8, 'rgba(214, 173, 77, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.CanvasTexture(pCanvas);
      texture.needsUpdate = true;
      return texture;
    };

    const starTexture = createStarTexture();

    const starMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: starTexture || undefined,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Horizon Curvature Arc (Subtle Glowing Planetary Ring)
    const horizonCurveCount = isMobile ? 600 : 1200;
    const ringPositions = new Float32Array(horizonCurveCount * 3);
    const ringColors = new Float32Array(horizonCurveCount * 3);

    for (let i = 0; i < horizonCurveCount; i++) {
      const i3 = i * 3;
      const u = (i / horizonCurveCount) * Math.PI - Math.PI / 2; // arc
      const ringRadius = 260 + (Math.random() - 0.5) * 25;
      ringPositions[i3] = Math.sin(u) * ringRadius;
      ringPositions[i3 + 1] = -120 + Math.cos(u) * 60 + (Math.random() - 0.5) * 8;
      ringPositions[i3 + 2] = -100 + (Math.random() - 0.5) * 60;

      const c = Math.random() > 0.4 ? colorGold : colorWhite;
      ringColors[i3] = c.r;
      ringColors[i3 + 1] = c.g;
      ringColors[i3 + 2] = c.b;
    }

    const ringGeometry = new THREE.BufferGeometry();
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    ringGeometry.setAttribute('color', new THREE.BufferAttribute(ringColors, 3));

    const ringMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: starTexture || undefined,
    });

    const horizonRing = new THREE.Points(ringGeometry, ringMaterial);
    scene.add(horizonRing);

    // Ambient Nebula Glow (Subtle directional light)
    const ambientLight = new THREE.AmbientLight(0x221c10, 1.2);
    scene.add(ambientLight);

    const goldLight = new THREE.DirectionalLight(0xd6ad4d, 0.8);
    goldLight.position.set(0, 100, 100);
    scene.add(goldLight);

    // Post-Processing: Bloom
    let composer = null;
    let bloomPass = null;
    if (!isMobile) {
      try {
        composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        bloomPass = new UnrealBloomPass(
          new THREE.Vector2(width, height),
          0.55, // Strength (balanced, not blinding)
          0.4,  // Radius
          0.2   // Threshold
        );
        composer.addPass(bloomPass);
      } catch (e) {
        console.warn('[HorizonHero] Bloom pass initialization skipped:', e);
        composer = null;
      }
    }

    // Interactive Mouse Tracking with smooth lerp
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // GSAP ScrollTrigger Camera Flight
    let scrollTriggerInstance = null;
    try {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          // Smoothly advance camera through cosmic horizon
          camera.position.z = 180 - progress * 160;
          camera.position.y = progress * 40;
          camera.rotation.x = -progress * 0.22;
          starField.rotation.z = progress * 0.4;
          horizonRing.position.y = -progress * 30;
        },
      });
    } catch (e) {
      console.warn('[HorizonHero] ScrollTrigger error:', e);
    }

    // Animation Loop
    let animId = null;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = performance.now() * 0.001;

      // Smooth mouse lerping
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX * 18;
      camera.position.y += (currentMouseY * -12 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      // Starfield slow cosmic rotation
      starField.rotation.y = elapsedTime * 0.025;
      starField.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05;

      horizonRing.rotation.z = elapsedTime * 0.018;

      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    if (prefersReducedMotion) {
      // Just render once statically
      renderer.render(scene, camera);
    } else {
      animate();
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      if (composer) {
        composer.setSize(newWidth, newHeight);
        if (bloomPass) {
          bloomPass.resolution.set(newWidth, newHeight);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Comprehensive Cleanup on unmount / React Strict Mode re-mount
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      // Dispose Three.js resources
      starGeometry.dispose();
      starMaterial.dispose();
      if (starTexture) starTexture.dispose();

      ringGeometry.dispose();
      ringMaterial.dispose();

      if (composer) {
        composer.dispose();
      }
      renderer.dispose();
    };
  }, [webglSupported]);

  return (
    <section className="horizon-hero-section" id="hero" ref={mountRef}>
      {/* Three.js Background Canvas Layer */}
      <div className="horizon-canvas-wrapper" aria-hidden="true">
        {webglSupported ? (
          <canvas ref={canvasRef} className="horizon-webgl-canvas" />
        ) : (
          <div className="horizon-css-fallback" />
        )}
        <div className="horizon-vignette-overlay" />
      </div>

      {/* Hero Content Layer */}
      <div className="container horizon-content-container">
        <div className="horizon-grid">
          {/* LEFT: Identity, Statement, Metrics, Action Buttons */}
          <div className="horizon-info-col">
            {/* Primary Name & Title */}
            <h1 className="horizon-main-heading">
              <span className="horizon-greeting">Hello, I'm</span>
              <span className="horizon-name">GOWSHIC S. S.</span>
              <span className="horizon-role-subtitle">
                Aspiring AI Engineer <span className="gold-divider">|</span> IT Undergraduate{' '}
                <span className="gold-divider">|</span> Problem Solver
              </span>
            </h1>

            {/* Concise Supporting Description */}
            <p className="horizon-description">
              Passionate about Artificial Intelligence, Machine Learning, Data Structures &amp;
              Algorithms, and constructing practical, robust software platforms. Dedicated to
              understanding core engineering fundamentals and solving real-world challenges through
              intelligent systems.
            </p>

            {/* Quick Metrics Bar */}
            <div className="horizon-metrics-strip" aria-label="Quick Highlights">
              <a
                href="#education"
                className="horizon-metric-pill"
                title="View Academic Records (CGPA 8.89)"
              >
                <span className="metric-val">{personalData.education.cgpa}</span>
                <span className="metric-lbl">Academic CGPA</span>
              </a>

              <a
                href="#achievements"
                className="horizon-metric-pill horizon-metric-pill-clickable"
                title="View TechNova & Hackathon Prize Achievements"
              >
                <span className="metric-val">₹3,750+</span>
                <span className="metric-lbl">
                  Hackathon Prizes <span className="metric-jump-icon">↗</span>
                </span>
              </a>

              <a
                href="#about"
                className="horizon-metric-pill"
                title="View IGNITE Leadership in About Me"
              >
                <span className="metric-val">Vice President</span>
                <span className="metric-lbl">IGNITE Association</span>
              </a>

              <a
                href="#achievements"
                className="horizon-metric-pill"
                title="View 2nd Place NEXORA '26 in Achievements"
              >
                <span className="metric-val">2nd Place</span>
                <span className="metric-lbl">NEXORA '26</span>
              </a>
            </div>

            {/* Action Buttons - Unified, Neatly Aligned, Cohesive Color Palette */}
            <div className="horizon-actions-group">
              <a href="#projects" className="horizon-action-box">
                <span>Explore Projects</span>
                <span className="box-icon">↓</span>
              </a>

              <a href="#achievements" className="horizon-action-box">
                <span>Achievements</span>
                <span className="box-icon">🏆</span>
              </a>

              <a href="#contact" className="horizon-action-box">
                <span>Contact Me</span>
                <span className="box-icon">✉</span>
              </a>

              <a
                href={personalData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="horizon-action-box"
                aria-label="LinkedIn Profile"
                title="Connect with Gowshic on LinkedIn"
              >
                <svg className="box-svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
                <span>LinkedIn</span>
                <span className="box-icon">↗</span>
              </a>

              <a
                href={personalData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="horizon-action-box"
                aria-label="GitHub Profile"
                title="Visit Gowshic on GitHub"
              >
                <svg className="box-svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GitHub</span>
                <span className="box-icon">↗</span>
              </a>
            </div>

            {/* Sub-bar Meta */}
            <div className="horizon-meta-strip">
              <span>DR. MCET // AFFILIATED WITH ANNA UNIVERSITY</span>
              <span className="meta-sep">•</span>
              <span>POLLACHI, TAMIL NADU, INDIA</span>
            </div>
          </div>

          {/* RIGHT: Profile HUD Card / Portrait Frame */}
          <div className="horizon-portrait-col">
            <div className="horizon-hud-card">
              {/* Corner Bracket Accents */}
              <div className="hud-corner top-left" aria-hidden="true" />
              <div className="hud-corner top-right" aria-hidden="true" />
              <div className="hud-corner bottom-left" aria-hidden="true" />
              <div className="hud-corner bottom-right" aria-hidden="true" />



              {/* Portrait Image Frame */}
              <div className="hud-image-viewport">
                <img
                  src={personalData.profileImage}
                  alt={personalData.profileAlt}
                  loading="eager"
                  onError={handleImageError}
                />
              </div>

              {/* HUD Details Footer */}
              <div className="hud-card-footer">
                <div className="hud-details-title">GOWSHIC S. S.</div>
                <div className="hud-details-desc">{personalData.statusBadge}</div>
                <div className="hud-file-tag">
                  <span>Dr. MCET // INFORMATION TECHNOLOGY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="horizon-scroll-indicator" aria-hidden="true">
          <a href="#about" className="scroll-indicator-link">
            <span className="scroll-text">SCROLL TO EXPLORE COSMOS</span>
            <span className="scroll-chevron">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
