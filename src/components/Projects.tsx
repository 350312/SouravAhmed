import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, BookOpen, Plus, Edit2, Trash2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  projects: Project[];
  editMode: boolean;
  statusMessage: string;
  onAddProject: () => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (project: Project) => void;
  onSelectProjectDetails: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  editMode,
  statusMessage,
  onAddProject,
  onEditProject,
  onDeleteProject,
  onSelectProjectDetails,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Automation', 'Full-Stack & Web', 'Games & Tools'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
      <div className="wrap">
        <div
          className="section-head"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span className="tag">Selected Works</span>
            <h2>Production-grade projects &amp; pipelines.</h2>
            <p className="section-sub">
              Case studies in AI automation, clinical consultation, scalable web systems, and natural conversational agents.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {editMode && <span className="admin-badge">Admin Mode Active</span>}
            {statusMessage && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: 'var(--emerald)',
                }}
              >
                {statusMessage}
              </span>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span style={{ opacity: 0.65, fontSize: '11px', marginLeft: '6px' }}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Bento Showcase Grid */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              background: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--line)',
            }}
          >
            <p style={{ color: 'var(--text-1)', marginBottom: '16px' }}>
              No projects found in this category.
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => setActiveCategory('All')}
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          <div className="projects-bento">
            {filteredProjects.map((p) => {
              const hasLink = Boolean(p.link && p.link.trim() !== '');
              const hasGithub = Boolean(p.github && p.github.trim() !== '');

              return (
                <div className="project-card-featured" key={p.id}>
                  {/* Media Container */}
                  <div className="project-media-wrap">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Fallback gracefully to icon if image fails
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div
                      className="project-media-fallback"
                      style={{ display: p.image ? 'none' : 'flex' }}
                    >
                      <span>{p.icon || '💠'}</span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="project-content-body">
                    <div className="project-unboxed-meta">
                      <span>{p.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.tag}</span>
                    </div>

                    <h3 className="project-title-link">{p.title}</h3>

                    <p className="project-overview-text">{p.desc}</p>

                    <div className="project-stack-strip">
                      {p.stack.map((tech, idx) => (
                        <span className="stack-item" key={idx}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions-row">
                      <div className="project-primary-links">
                        {hasLink ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-cta"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          <span style={{ fontSize: '13px', color: 'var(--text-2)', fontFamily: "'JetBrains Mono', monospace" }}>
                            Internal / Private
                          </span>
                        )}

                        <button
                          className="project-details-btn"
                          onClick={() => onSelectProjectDetails(p)}
                        >
                          <BookOpen size={14} />
                          <span>Case Study</span>
                        </button>

                        {hasGithub && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-details-btn"
                            title="View GitHub Repository"
                            aria-label={`View GitHub repository for ${p.title}`}
                          >
                            <GithubIcon size={14} />
                            <span>Code</span>
                          </a>
                        )}
                      </div>

                      {editMode && (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            className="mini-btn"
                            onClick={() => onEditProject(p)}
                            title="Edit project"
                          >
                            <Edit2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            Edit
                          </button>
                          <button
                            className="mini-btn mini-btn-del"
                            onClick={() => onDeleteProject(p)}
                            title="Delete project"
                          >
                            <Trash2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {editMode && (
          <button
            className="btn btn-secondary"
            id="add-project-btn"
            style={{ marginTop: '36px' }}
            onClick={onAddProject}
          >
            <Plus size={15} />
            <span>Add New Project</span>
          </button>
        )}
      </div>
    </section>
  );
};
