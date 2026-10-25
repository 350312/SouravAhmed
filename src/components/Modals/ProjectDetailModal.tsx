import React from 'react';
import { Project } from '../../types';
import { X, ArrowUpRight, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from '../Icons';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  const hasLiveLink = Boolean(project.link && project.link.trim() !== '');
  const hasGithub = Boolean(project.github && project.github.trim() !== '');

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '760px' }}
      >
        <button
          className="modal-close-icon"
          onClick={onClose}
          aria-label="Close case study modal"
        >
          <X size={20} />
        </button>

        {/* Unboxed Meta */}
        <div className="project-unboxed-meta" style={{ marginBottom: '8px' }}>
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.tag}</span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            color: 'var(--text-0)',
          }}
        >
          {project.title}
        </h2>

        {/* Media Banner if available */}
        {project.image && (
          <div
            style={{
              width: '100%',
              height: '280px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '24px',
              border: '1px solid var(--line)',
              background: 'var(--bg-2)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />
          </div>
        )}

        {/* Overview & Architecture */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--cyan)',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Cpu size={14} />
            <span>Architecture &amp; Problem Scope</span>
          </div>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--text-1)',
              whiteSpace: 'pre-line',
            }}
          >
            {project.detailedOverview || project.desc}
          </p>
        </div>

        {/* Highlights / Features List */}
        {project.highlights && project.highlights.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--violet)',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Layers size={14} />
              <span>Key Technical Highlights</span>
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: 0,
                margin: 0,
              }}
            >
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'var(--text-1)',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="var(--emerald)"
                    style={{ flexShrink: 0, marginTop: '3px' }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Stack */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-2)',
              marginBottom: '10px',
            }}
          >
            Technologies Deployed
          </div>
          <div className="project-stack-strip">
            {project.stack.map((tech, idx) => (
              <span className="stack-item" key={idx}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Visit Live Project</span>
                <ArrowUpRight size={15} />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <GithubIcon size={15} />
                <span>View Repository</span>
              </a>
            )}
          </div>

          <button onClick={onClose} className="btn btn-ghost">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
