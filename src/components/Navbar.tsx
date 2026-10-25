import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PROFILE_AVATAR } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="wrap">
        {/* Zone 1: Wordmark Brand */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={PROFILE_AVATAR}
            alt="Sourav Ahmed"
            className="logo-avatar-mini"
            onError={(e) => {
              e.currentTarget.src = '/public/assets/aistudio/image_4b97ffa9.png';
            }}
          />
          <span className="gradient">Sourav Ahmed</span>
          <span className="logo-dot" title="Available for opportunities"></span>
        </div>

        {/* Zone 2: Navigation Links */}
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
            About
          </a>
          <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollTo('expertise'); }}>
            Expertise
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            Projects
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>
            Experience
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>
            Skills
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Contact
          </a>
        </div>

        {/* Zone 3: Actions */}
        <div className="nav-actions">
          <button
            onClick={onResumeClick}
            className="btn btn-ghost btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
