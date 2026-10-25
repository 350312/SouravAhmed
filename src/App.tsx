import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/Modals/ProjectModal';
import { AdminLoginModal } from './components/Modals/AdminLoginModal';
import { ConfirmDeleteModal } from './components/Modals/ConfirmDeleteModal';
import { ProjectDetailModal } from './components/Modals/ProjectDetailModal';
import { ResumeModal } from './components/Modals/ResumeModal';
import { Project } from './types';
import { DEFAULT_PROJECTS, getStoredProjects, setStoredProjects } from './data/portfolioData';

export const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState<boolean>(false);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);

  const [selectedDetailProject, setSelectedDetailProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Load stored projects on mount
  useEffect(() => {
    async function initProjects() {
      const stored = await getStoredProjects();
      if (stored && stored.length > 0) {
        setProjects(stored);
      }
    }
    initProjects();
  }, []);

  // Intersection observer for scroll reveal effects
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .skill-cat, .pillar-card, .timeline-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [projects]);

  // Handle saving project (create or edit)
  const handleSaveProject = async (projectData: Omit<Project, 'id'> & { id?: string }) => {
    let updatedProjects: Project[];

    if (projectData.id) {
      // Edit existing
      updatedProjects = projects.map((p) =>
        p.id === projectData.id ? { ...p, ...projectData, id: projectData.id! } : p
      );
    } else {
      // Create new
      const newProject: Project = {
        ...projectData,
        id: 'p' + Date.now(),
        category: (projectData as any).category || 'AI & Automation',
      };
      updatedProjects = [newProject, ...projects];
    }

    setProjects(updatedProjects);
    setIsProjectModalOpen(false);
    setEditingProject(null);

    const success = await setStoredProjects(updatedProjects);
    if (success) {
      setStatusMessage('Project saved successfully');
      setTimeout(() => setStatusMessage(''), 2500);
    } else {
      setStatusMessage('Save failed — try again');
    }
  };

  // Handle deleting project
  const handleConfirmDelete = async () => {
    if (!deletingProject) return;

    const updatedProjects = projects.filter((p) => p.id !== deletingProject.id);
    setProjects(updatedProjects);
    setDeletingProject(null);

    const success = await setStoredProjects(updatedProjects);
    if (success) {
      setStatusMessage('Project deleted');
      setTimeout(() => setStatusMessage(''), 2500);
    }
  };

  // Handle lock icon click in footer
  const handleLockClick = () => {
    if (editMode) {
      setEditMode(false);
      setStatusMessage('');
    } else {
      setIsAdminLoginOpen(true);
    }
  };

  return (
    <div className={`app-container ${editMode ? 'edit-mode' : ''}`}>
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />
      <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
      <About />
      <Expertise />
      <Projects
        projects={projects}
        editMode={editMode}
        statusMessage={statusMessage}
        onAddProject={() => {
          setEditingProject(null);
          setIsProjectModalOpen(true);
        }}
        onEditProject={(project) => {
          setEditingProject(project);
          setIsProjectModalOpen(true);
        }}
        onDeleteProject={(project) => {
          setDeletingProject(project);
        }}
        onSelectProjectDetails={(project) => {
          setSelectedDetailProject(project);
        }}
      />
      <Experience />
      <Skills />
      <Contact />
      <Footer editMode={editMode} onLockClick={handleLockClick} />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedDetailProject}
        isOpen={Boolean(selectedDetailProject)}
        onClose={() => setSelectedDetailProject(null)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Admin Project Add/Edit Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        editingProject={editingProject}
        onClose={() => {
          setIsProjectModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
      />

      {/* Admin Password Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onSuccess={() => {
          setEditMode(true);
          setStatusMessage('Admin unlocked');
          setTimeout(() => setStatusMessage(''), 2500);
        }}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={Boolean(deletingProject)}
        projectTitle={deletingProject?.title || ''}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletingProject(null)}
      />
    </div>
  );
};

export default App;
