import React, { useState, useEffect, useCallback } from 'react';
import { X, RotateCcw, Sparkles, ArrowRight } from 'lucide-react';

interface PandaGreetingProps {
  onExploreProjects?: () => void;
  onResumeClick?: () => void;
}

type AnimationStage = 'entering' | 'greeting' | 'exiting' | 'corner' | 'minimized';

export const PandaGreeting: React.FC<PandaGreetingProps> = ({
  onExploreProjects,
  onResumeClick,
}) => {
  const [stage, setStage] = useState<AnimationStage>('corner');
  const [isCornerOpen, setIsCornerOpen] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check prefers-reduced-motion and session storage on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const hasGreetedInSession = sessionStorage.getItem('sourav_panda_greeted_v1');

    if (!hasGreetedInSession) {
      // First visit in session: trigger entry sequence
      setStage('entering');
      sessionStorage.setItem('sourav_panda_greeted_v1', 'true');

      if (mediaQuery.matches) {
        // Reduced motion: jump straight to greeting then dismiss quickly
        const t1 = setTimeout(() => setStage('greeting'), 100);
        const t2 = setTimeout(() => setStage('corner'), 2500);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }

      // Normal animation choreography
      const timer1 = setTimeout(() => {
        setStage('greeting');
      }, 700);

      const timer2 = setTimeout(() => {
        setStage('exiting');
      }, 4200);

      const timer3 = setTimeout(() => {
        setStage('corner');
      }, 5000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      // Already greeted this session: start directly in corner
      setStage('corner');
    }
  }, []);

  // Handle keyboard ESC to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (stage === 'entering' || stage === 'greeting' || stage === 'exiting') {
          setStage('corner');
        } else if (isCornerOpen) {
          setIsCornerOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, isCornerOpen]);

  // Replay the full-screen greeting
  const handleReplay = useCallback(() => {
    setIsCornerOpen(false);
    setStage('entering');

    if (reducedMotion) {
      setTimeout(() => setStage('greeting'), 100);
      setTimeout(() => setStage('corner'), 2500);
      return;
    }

    setTimeout(() => {
      setStage('greeting');
    }, 600);

    setTimeout(() => {
      setStage('exiting');
    }, 4200);

    setTimeout(() => {
      setStage('corner');
    }, 5000);
  }, [reducedMotion]);

  const handleSkip = () => {
    setStage('corner');
  };

  const isFullScreenActive = stage === 'entering' || stage === 'greeting' || stage === 'exiting';

  return (
    <>
      {/* 1. Fullscreen Dimmed Overlay during Greeting */}
      {isFullScreenActive && (
        <div
          className={`panda-overlay ${stage === 'exiting' ? 'fade-out' : 'fade-in'}`}
          onClick={handleSkip}
          aria-hidden="true"
        />
      )}

      {/* 2. Central Animated Panda Stage */}
      {isFullScreenActive && (
        <div
          className={`panda-stage-center ${stage}`}
          role="dialog"
          aria-label="Welcome greeting from Panda mascot"
          aria-modal="true"
        >
          {/* Skip / Close Button */}
          <button
            className="panda-skip-btn"
            onClick={handleSkip}
            aria-label="Skip welcome animation (Press Escape)"
            title="Skip (Esc)"
          >
            <X size={16} />
            <span>Skip</span>
          </button>

          {/* Speech Bubble */}
          <div className={`panda-speech-bubble ${stage === 'greeting' ? 'pop-in' : ''}`}>
            <div className="panda-speech-main">
              Hello! 👋 Welcome!
            </div>
            <p className="panda-speech-sub">
              I&apos;m your guide to Sourav&apos;s AI systems, automation pipelines, and live projects!
            </p>
            <div className="panda-speech-actions">
              <button
                className="panda-btn-primary"
                onClick={() => {
                  handleSkip();
                  if (onExploreProjects) {
                    onExploreProjects();
                  } else {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </button>
              {onResumeClick && (
                <button
                  className="panda-btn-ghost"
                  onClick={() => {
                    handleSkip();
                    onResumeClick();
                  }}
                >
                  Inspect Resume
                </button>
              )}
            </div>
            <div className="panda-speech-tail" />
          </div>

          {/* Animated Panda Mascot Character */}
          <div className="panda-character-wrap">
            <PandaVectorIllustration isWaving={stage === 'greeting'} isBlinking={true} />
          </div>
        </div>
      )}

      {/* 3. Floating Persistent Corner Assistant */}
      <div className="panda-corner-anchor" style={{ zIndex: 95 }}>
        {/* Floating Menu Popover when clicked */}
        {isCornerOpen && (
          <div className="panda-corner-menu">
            <div className="panda-corner-menu-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="panda-mini-avatar">🐼</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--text-0)' }}>
                    Panda Assistant
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--cyan)', fontFamily: "'JetBrains Mono', monospace" }}>
                    Online &amp; Ready
                  </div>
                </div>
              </div>
              <button
                className="mini-icon-btn"
                onClick={() => setIsCornerOpen(false)}
                aria-label="Close panda assistant menu"
              >
                <X size={14} />
              </button>
            </div>

            <div className="panda-corner-greeting-text">
              &quot;Hello! 👋 Welcome! Feel free to browse through live projects, verified screenshots, and case studies.&quot;
            </div>

            <div className="panda-corner-actions">
              <button
                className="panda-corner-action-btn"
                onClick={() => {
                  setIsCornerOpen(false);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sparkles size={14} color="var(--cyan)" />
                <span>Explore Live Projects</span>
              </button>

              {onResumeClick && (
                <button
                  className="panda-corner-action-btn"
                  onClick={() => {
                    setIsCornerOpen(false);
                    onResumeClick();
                  }}
                >
                  <span>Interactive Resume</span>
                </button>
              )}

              <button
                className="panda-corner-action-btn"
                onClick={() => {
                  setIsCornerOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Get in Touch</span>
              </button>

              <button
                className="panda-corner-action-btn secondary"
                onClick={handleReplay}
                title="Replay center greeting"
              >
                <RotateCcw size={13} />
                <span>Replay Greeting</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          className="panda-corner-btn"
          onClick={() => setIsCornerOpen(!isCornerOpen)}
          aria-label="Open Panda Assistant or Replay Welcome Greeting"
          title="Panda Assistant · Click for options or replay greeting"
        >
          <div className="panda-corner-icon-wrap">
            <PandaVectorIllustration size={44} isWaving={isCornerOpen} isBlinking={true} />
          </div>
          <span className="panda-corner-badge">👋</span>
        </button>
      </div>
    </>
  );
};

// Reusable SVG Illustration of the Panda Mascot with blinking eyes & waving paw
interface PandaVectorIllustrationProps {
  size?: number;
  isWaving?: boolean;
  isBlinking?: boolean;
}

export const PandaVectorIllustration: React.FC<PandaVectorIllustrationProps> = ({
  size = 180,
  isWaving = true,
  isBlinking = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="panda-svg"
      aria-hidden="true"
    >
      <defs>
        {/* Soft shadow for depth */}
        <radialGradient id="pandaGroundShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0, 0, 0, 0.45)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </radialGradient>

        <linearGradient id="pandaWhiteBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="85%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        <linearGradient id="pandaDarkBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A2C38" />
          <stop offset="50%" stopColor="#1E202B" />
          <stop offset="100%" stopColor="#13141C" />
        </linearGradient>

        <linearGradient id="pandaEarInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4E63" />
          <stop offset="100%" stopColor="#252733" />
        </linearGradient>

        <linearGradient id="bambooGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Ground subtle shadow */}
      <ellipse cx="100" cy="188" rx="60" ry="9" fill="url(#pandaGroundShadow)" />

      {/* --- EARS --- */}
      {/* Left Ear */}
      <circle cx="56" cy="56" r="24" fill="url(#pandaDarkBody)" />
      <circle cx="56" cy="56" r="14" fill="url(#pandaEarInner)" opacity="0.6" />

      {/* Right Ear */}
      <circle cx="144" cy="56" r="24" fill="url(#pandaDarkBody)" />
      <circle cx="144" cy="56" r="14" fill="url(#pandaEarInner)" opacity="0.6" />

      {/* --- BODY & LEGS --- */}
      {/* Body Core */}
      <ellipse cx="100" cy="142" rx="54" ry="46" fill="url(#pandaDarkBody)" />
      {/* White Tummy */}
      <ellipse cx="100" cy="144" rx="38" ry="34" fill="url(#pandaWhiteBody)" />

      {/* Cute Bamboo Sprig in Left Paw */}
      <g className="panda-bamboo" transform="rotate(-15, 60, 150)">
        <path d="M 60 120 Q 56 145 52 170" stroke="url(#bambooGreen)" strokeWidth="4" strokeLinecap="round" />
        {/* Bamboo Leaves */}
        <path d="M 58 132 C 48 126 44 116 46 114 C 52 118 56 124 58 132 Z" fill="#34D399" />
        <path d="M 56 146 C 42 144 38 134 40 132 C 48 134 54 138 56 146 Z" fill="#10B981" />
        <path d="M 60 136 C 68 130 76 130 78 132 C 72 136 66 138 60 136 Z" fill="#059669" />
      </g>

      {/* Left Paw resting on belly/bamboo */}
      <circle cx="62" cy="150" r="16" fill="url(#pandaDarkBody)" />
      {/* Paw pads (pinkish grey) */}
      <circle cx="62" cy="150" r="8" fill="#4B5162" opacity="0.5" />

      {/* --- HEAD --- */}
      <ellipse cx="100" cy="98" rx="54" ry="48" fill="url(#pandaWhiteBody)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />

      {/* Cute Rosy Cheeks */}
      <ellipse cx="62" cy="112" rx="10" ry="6" fill="#F472B6" opacity="0.32" />
      <ellipse cx="138" cy="112" rx="10" ry="6" fill="#F472B6" opacity="0.32" />

      {/* --- PANDA EYE PATCHES --- */}
      {/* Left Patch */}
      <ellipse cx="76" cy="94" rx="15" ry="18" fill="url(#pandaDarkBody)" transform="rotate(-18, 76, 94)" />
      {/* Right Patch */}
      <ellipse cx="124" cy="94" rx="15" ry="18" fill="url(#pandaDarkBody)" transform="rotate(18, 124, 94)" />

      {/* --- EYES WITH BLINK ANIMATION --- */}
      <g className={isBlinking ? 'panda-eyes-blink' : ''}>
        {/* Left Eye */}
        <circle cx="76" cy="94" r="7.5" fill="#FFFFFF" />
        <circle cx="77" cy="94" r="5.5" fill="#0F172A" />
        {/* Sparkle reflections */}
        <circle cx="75" cy="91.5" r="2.2" fill="#FFFFFF" />
        <circle cx="78.5" cy="95.5" r="1.1" fill="#FFFFFF" />

        {/* Right Eye */}
        <circle cx="124" cy="94" r="7.5" fill="#FFFFFF" />
        <circle cx="123" cy="94" r="5.5" fill="#0F172A" />
        {/* Sparkle reflections */}
        <circle cx="121" cy="91.5" r="2.2" fill="#FFFFFF" />
        <circle cx="124.5" cy="95.5" r="1.1" fill="#FFFFFF" />
      </g>

      {/* --- NOSE & MOUTH --- */}
      {/* Cute rounded heart/triangle nose */}
      <path
        d="M 94 105 C 94 101, 106 101, 106 105 C 106 109, 100 113, 100 113 C 100 113, 94 109, 94 105 Z"
        fill="#1E202B"
      />
      {/* Nose highlight */}
      <ellipse cx="98" cy="104" rx="2" ry="1" fill="#94A3B8" opacity="0.6" />

      {/* Sweet Smile */}
      <path
        d="M 92 114 Q 100 120 100 115 Q 100 120 108 114"
        stroke="#1E202B"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* --- WAVING RIGHT PAW --- */}
      <g
        className={isWaving ? 'panda-right-paw-waving' : 'panda-right-paw'}
        style={{ transformOrigin: '142px 144px' }}
      >
        <ellipse cx="146" cy="136" rx="16" ry="20" fill="url(#pandaDarkBody)" transform="rotate(25, 146, 136)" />
        {/* Paw pads */}
        <ellipse cx="146" cy="134" rx="9" ry="11" fill="#4B5162" opacity="0.5" transform="rotate(25, 146, 134)" />
        <circle cx="138" cy="122" r="2.8" fill="#4B5162" opacity="0.4" />
        <circle cx="146" cy="119" r="2.8" fill="#4B5162" opacity="0.4" />
        <circle cx="154" cy="123" r="2.8" fill="#4B5162" opacity="0.4" />
      </g>
    </svg>
  );
};
