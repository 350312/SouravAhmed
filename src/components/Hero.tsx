import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, FileText, Mail, MapPin, Sparkles, Workflow, Database, GraduationCap, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_AVATAR } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  // Dynamic typing animation state for roles
  const roles = [
    'autonomous n8n workflows',
    'RAG vector knowledge systems',
    'resilient Django & Python APIs',
    'conversational speech AI agents',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Tilt & Specular Shine state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Profile image with error fallback
  const [avatarSrc, setAvatarSrc] = useState<string>(PROFILE_AVATAR);

  // Typewriter effect for headline
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // Handle 3D Mouse Parallax on the profile card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setShine({ x: shineX, y: shineY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShine((prev) => ({ ...prev, opacity: 0 }));
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Animated Flow Network */}
      <svg
        className="hero-svg-network"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Dynamic Curved Flow Paths */}
        <path d="M 50 150 C 300 80, 500 280, 750 180 S 1100 260, 1150 120" className="hero-flow-path" />
        <path d="M 100 680 C 350 720, 600 520, 850 620 S 1050 480, 1180 560" className="hero-flow-path fast" />
        <path d="M 200 400 C 450 320, 700 450, 950 340 S 1120 420, 1160 380" className="hero-flow-path" />

        {/* Pulsing Interconnected Nodes */}
        <circle cx="750" cy="180" r="4.5" className="hero-node-dot" />
        <circle cx="850" cy="620" r="4.5" className="hero-node-dot cyan" />
        <circle cx="500" cy="280" r="4" className="hero-node-dot cyan" />
        <circle cx="950" cy="340" r="4" className="hero-node-dot" />
        <circle cx="300" cy="80" r="3.5" className="hero-node-dot" />
        <circle cx="350" cy="720" r="3.5" className="hero-node-dot cyan" />
      </svg>

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left Column: Typographic & Action Hierarchy with Typewriter */}
          <div>
            <div className="availability-badge">
              <span className="status-dot-pulse"></span>
              <span>Available for AI Engineering &amp; Automation Roles</span>
            </div>

            <h1 className="hero-title">
              Building{' '}
              <span className="highlight" style={{ display: 'inline-block', minHeight: '1.15em' }}>
                {displayedText}
                <span className="terminal-cursor"></span>
              </span>
              <br />
              that turn repetitive work into products.
            </h1>

            <p className="hero-subtext">
              I'm <b>Sourav Ahmed</b> &mdash; a Computer Science &amp; Engineering scholar at{' '}
              <b>Bangladesh University of Professionals (BUP)</b> and aspiring <b>AI Engineer</b>. I architect end-to-end AI automation workflows with n8n, ground LLMs using RAG pipelines, and build robust Django/Python backend infrastructures.
            </p>

            <div className="hero-cta-group">
              <button onClick={() => scrollTo('projects')} className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowDown size={15} />
              </button>
              <button onClick={onResumeClick} className="btn btn-secondary">
                <FileText size={15} />
                <span>View Resume / CV</span>
              </button>
            </div>

            <div className="social-strip">
              <span style={{ color: 'var(--text-2)' }}>Connect:</span>
              <a
                href="https://github.com/350312?tab=stars"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub profile"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/sourav-ahmed-a9a300206"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn profile"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <span>·</span>
              <a href="mailto:souravahmed695@gmail.com" title="Email Sourav">
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Animated Photo Showcase Card with 3D Tilt */}
          <div className="profile-showcase-perspective">
            <div
              ref={cardRef}
              className="profile-showcase-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                ['--shine-x' as any]: `${shine.x}%`,
                ['--shine-y' as any]: `${shine.y}%`,
                ['--shine-opacity' as any]: shine.opacity,
              }}
            >
              {/* Dynamic Specular Reflection */}
              <div className="profile-specular-shine" />

              {/* Central Photo Orbit Stage */}
              <div className="profile-avatar-orbit-area">
                {/* Concentric Expanding Pulse Rings */}
                <div className="pulse-wave-ring" />
                <div className="pulse-wave-ring delayed" />

                {/* Rotating Cybernetic Dashed Orbit SVG */}
                <svg className="cyber-orbit-svg" viewBox="0 0 220 220" fill="none">
                  <circle
                    cx="110"
                    cy="110"
                    r="98"
                    stroke="rgba(139, 92, 246, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="8 12"
                  />
                  <circle cx="208" cy="110" r="4" fill="var(--cyan)" />
                  <circle cx="12" cy="110" r="3" fill="var(--violet)" />
                </svg>

                <svg className="cyber-orbit-svg reverse" viewBox="0 0 220 220" fill="none">
                  <circle
                    cx="110"
                    cy="110"
                    r="106"
                    stroke="rgba(34, 211, 238, 0.28)"
                    strokeWidth="1"
                    strokeDasharray="4 16"
                  />
                  <circle cx="110" cy="4" r="3.5" fill="var(--pink)" />
                </svg>

                {/* Floating Orbit Badges */}
                <div className="orbit-badge top-right" title="Autonomous Orchestration Active">
                  <Zap size={13} color="var(--amber)" />
                  <span>n8n Active</span>
                </div>

                <div className="orbit-badge bottom-left" title="Vector Semantic Search">
                  <Database size={13} color="var(--cyan)" />
                  <span>RAG Engine</span>
                </div>

                <div className="orbit-badge top-left" title="B.Sc. in Computer Science & Engineering">
                  <GraduationCap size={13} color="var(--violet)" />
                  <span>BUP CSE</span>
                </div>

                {/* Main Photo with Conic Halo & Scanline */}
                <div className="profile-avatar-wrapper">
                  <div className="avatar-inner-box">
                    <img
                      src={avatarSrc}
                      alt="Sourav Ahmed — AI Engineer"
                      onError={() => {
                        // Fallback gracefully if direct path fails
                        setAvatarSrc('/public/assets/aistudio/image_4b97ffa9.png');
                      }}
                    />
                    {/* Sci-Fi Light Scanline */}
                    <div className="avatar-scanline" />
                  </div>
                </div>
              </div>

              {/* Audio / Neural Waveform Equalizer */}
              <div className="voice-agent-indicator" aria-hidden="true">
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
                <span className="voice-wave-bar" />
              </div>

              <div className="voice-agent-label">
                <span className="live-green-pulse" />
                <span>AI Automation Engine &middot; Real-time</span>
              </div>

              {/* Profile Card Identity */}
              <div className="profile-card-header">
                <div className="profile-card-name">Sourav Ahmed</div>
                <div className="profile-card-title">AI Automation &amp; Backend Engineer</div>
              </div>

              {/* Profile Structured Metadata */}
              <div className="profile-metadata-list">
                <div className="profile-meta-row">
                  <span>University</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-0)' }}>BUP (CSE, B.Sc.)</span>
                </div>
                <div className="profile-meta-row">
                  <span>School</span>
                  <span>St. Joseph Higher Secondary</span>
                </div>
                <div className="profile-meta-row">
                  <span>Core Focus</span>
                  <span style={{ color: 'var(--cyan)' }}>n8n, RAG, Django &amp; Voice</span>
                </div>
                <div className="profile-meta-row">
                  <span>Location</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} color="var(--violet)" />
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="profile-meta-row">
                  <span>Status</span>
                  <span style={{ color: 'var(--emerald)', fontWeight: 600 }}>Active &amp; Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Impact Strip */}
        <div className="stats-strip">
          <div className="stat-item">
            <span className="stat-value">8+</span>
            <span className="stat-label">Full-Stack &amp; AI Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">n8n &amp; RAG</span>
            <span className="stat-label">Autonomous Pipeline Focus</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Django / Py</span>
            <span className="stat-label">Robust Backend Systems</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Documented &amp; Production-Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
