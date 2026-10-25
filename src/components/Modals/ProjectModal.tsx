import React, { useState, useEffect } from 'react';
import { Project } from '../../types';

interface ProjectModalProps {
  isOpen: boolean;
  editingProject: Project | null;
  onClose: () => void;
  onSave: (projectData: Omit<Project, 'id'> & { id?: string }) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  editingProject,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [category, setCategory] = useState<'AI & Automation' | 'Full-Stack & Web' | 'Games & Tools'>('AI & Automation');
  const [desc, setDesc] = useState('');
  const [detailedOverview, setDetailedOverview] = useState('');
  const [stack, setStack] = useState('');
  const [link, setLink] = useState('');
  const [github, setGithub] = useState('');
  const [icon, setIcon] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setTag(editingProject.tag);
      setCategory(editingProject.category || 'AI & Automation');
      setDesc(editingProject.desc);
      setDetailedOverview(editingProject.detailedOverview || '');
      setStack(editingProject.stack.join(', '));
      setLink(editingProject.link || '');
      setGithub(editingProject.github || '');
      setIcon(editingProject.icon || '');
    } else {
      setTitle('');
      setTag('');
      setCategory('AI & Automation');
      setDesc('');
      setDetailedOverview('');
      setStack('');
      setLink('');
      setGithub('');
      setIcon('');
    }
    setError('');
  }, [editingProject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }

    const stackArray = stack
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    onSave({
      id: editingProject ? editingProject.id : undefined,
      title: title.trim(),
      tag: tag.trim() || 'Software Engineering',
      category: category,
      desc: desc.trim(),
      detailedOverview: detailedOverview.trim() || desc.trim(),
      stack: stackArray.length > 0 ? stackArray : ['Python', 'Automation'],
      link: link.trim(),
      github: github.trim(),
      icon: icon.trim() || '💠',
    });
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <h3>{editingProject ? 'Edit Project' : 'Add Project'}</h3>

        {error && (
          <div style={{ color: '#f87171', fontSize: '13px', marginBottom: '10px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="f-title">Title</label>
          <input
            id="f-title"
            type="text"
            placeholder="Project name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <label htmlFor="f-category">Category</label>
          <select
            id="f-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--line)',
              borderRadius: '8px',
              padding: '10px 14px',
              color: 'var(--text-0)',
              marginBottom: '14px',
              outline: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <option value="AI & Automation" style={{ background: '#120726', color: '#fff' }}>
              AI &amp; Automation
            </option>
            <option value="Full-Stack & Web" style={{ background: '#120726', color: '#fff' }}>
              Full-Stack &amp; Web
            </option>
            <option value="Games & Tools" style={{ background: '#120726', color: '#fff' }}>
              Games &amp; Tools
            </option>
          </select>

          <label htmlFor="f-tag">Tag / Badge</label>
          <input
            id="f-tag"
            type="text"
            placeholder="e.g. AI Workflow / Clinical Consultant"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <label htmlFor="f-desc">Short Overview</label>
          <textarea
            id="f-desc"
            placeholder="What does it do?"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={2}
          />

          <label htmlFor="f-detailed">Detailed Architecture (Optional)</label>
          <textarea
            id="f-detailed"
            placeholder="Problem scope, technical design, and results..."
            value={detailedOverview}
            onChange={(e) => setDetailedOverview(e.target.value)}
            rows={3}
          />

          <label htmlFor="f-stack">Tech Stack (comma separated)</label>
          <input
            id="f-stack"
            type="text"
            placeholder="Python, Django, n8n, React"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label htmlFor="f-link">Live Link (optional)</label>
              <input
                id="f-link"
                type="text"
                placeholder="https://..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="f-github">GitHub Repo (optional)</label>
              <input
                id="f-github"
                type="text"
                placeholder="https://github.com/..."
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>

          <label htmlFor="f-icon">Icon (emoji)</label>
          <input
            id="f-icon"
            type="text"
            placeholder="e.g. 🩺, ⚙️, 🐍"
            maxLength={6}
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />

          <div className="modal-actions" style={{ marginTop: '20px' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
