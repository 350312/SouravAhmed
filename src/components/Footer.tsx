import React from 'react';
import { ArrowUp, Mail, Lock, Unlock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_AVATAR } from '../data/portfolioData';

interface FooterProps {
  editMode: boolean;
  onLockClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ editMode, onLockClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="wrap">
        {/* Left Column: Brand & Academic Affiliation */}
        <div className="footer-left">
          <img
            src={PROFILE_AVATAR}
            alt="Sourav Ahmed"
            onError={(e) => {
              e.currentTarget.src = '/public/assets/aistudio/image_4b97ffa9.png';
            }}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid var(--line)',
            }}
          />
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-0)', fontSize: '14px' }}>
              Sourav Ahmed
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-2)', fontFamily: "'JetBrains Mono', monospace" }}>
              BUP CSE &middot; AI Engineer
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="https://github.com/350312"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ color: 'var(--text-1)', transition: 'color 0.2s' }}
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-ahmed-a9a300206"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ color: 'var(--text-1)', transition: 'color 0.2s' }}
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:souravahmed695@gmail.com"
            title="Email"
            style={{ color: 'var(--text-1)', transition: 'color 0.2s' }}
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right: Back to Top & Admin Lock */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={scrollToTop}
            className="btn btn-ghost btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>

          <button
            onClick={onLockClick}
            className={`lock-toggle-btn ${editMode ? 'unlocked' : ''}`}
            title={editMode ? 'Lock Admin Mode' : 'Admin Login'}
            aria-label={editMode ? 'Lock Admin Mode' : 'Admin Login'}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              {editMode ? <Unlock size={12} color="var(--cyan)" /> : <Lock size={12} />}
              <span>{editMode ? 'Admin Active' : 'Admin'}</span>
            </span>
          </button>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          fontSize: '12px',
          color: 'var(--text-2)',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        Designed &amp; engineered by Sourav Ahmed &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};
