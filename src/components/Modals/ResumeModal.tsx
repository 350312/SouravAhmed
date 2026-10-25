import React from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { TIMELINE_ITEMS, SKILL_CATEGORIES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px', padding: '36px' }}
      >
        <button
          className="modal-close-icon"
          onClick={onClose}
          aria-label="Close resume modal"
        >
          <X size={20} />
        </button>

        {/* Printable Resume Container */}
        <div className="resume-modal-body">
          {/* Header */}
          <div className="resume-header">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '4px',
                    color: 'var(--text-0)',
                  }}
                >
                  SOURAV AHMED
                </h1>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '14px',
                    color: 'var(--cyan)',
                    marginBottom: '10px',
                  }}
                >
                  AI Automation &amp; Backend Engineer &middot; BUP CSE Scholar
                </div>
              </div>

              <button
                onClick={handlePrint}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>
            </div>

            {/* Contact Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                fontSize: '13px',
                color: 'var(--text-1)',
                marginTop: '8px',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} color="var(--cyan)" />
                Dhaka, Bangladesh
              </span>
              <span>&middot;</span>
              <a
                href="mailto:souravahmed695@gmail.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-0)' }}
              >
                <Mail size={13} color="var(--violet)" />
                souravahmed695@gmail.com
              </a>
              <span>&middot;</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Phone size={13} color="var(--emerald)" />
                +880 1917-384051
              </span>
              <span>&middot;</span>
              <a
                href="https://github.com/350312"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--cyan)' }}
              >
                <GithubIcon size={13} />
                github.com/350312
              </a>
              <span>&middot;</span>
              <a
                href="https://www.linkedin.com/in/sourav-ahmed-a9a300206"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--violet)' }}
              >
                <LinkedinIcon size={13} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: '24px' }}>
            <div className="resume-section-title">Executive Summary</div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-1)' }}>
              Undergraduate Computer Science &amp; Engineering scholar at Bangladesh University of Professionals (BUP) and St. Joseph Higher Secondary School alumnus. Dedicated to engineering autonomous AI workflows with n8n, grounding generative LLMs with RAG retrieval pipelines, and architecting scalable backend APIs in Python and Django. Passionate about eliminating repetitive business workflows and creating resilient, production-grade applications.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <div className="resume-section-title">Education</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '15px', color: 'var(--text-0)' }}>
                    B.Sc. in Computer Science &amp; Engineering
                  </strong>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--cyan)' }}>
                    2023 — Present
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)', marginBottom: '6px' }}>
                  Bangladesh University of Professionals (BUP) &middot; Dhaka, Bangladesh
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-1)' }}>
                  Intensive coursework in Data Structures &amp; Algorithms, Database Management Systems, Object-Oriented Software Engineering, Operating Systems, Machine Learning Foundations, and Web Engineering.
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '15px', color: 'var(--text-0)' }}>
                    Higher Secondary Certificate (Science)
                  </strong>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--text-2)' }}>
                    Graduated
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)', marginBottom: '4px' }}>
                  St. Joseph Higher Secondary School &middot; Dhaka, Bangladesh
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-1)' }}>
                  Rigorous foundation in analytical mathematics, physics, and early computer programming principles.
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Major Works */}
          <div style={{ marginBottom: '24px' }}>
            <div className="resume-section-title">Experience &amp; Key Projects</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '15px', color: 'var(--text-0)' }}>
                    Independent AI Automation &amp; Backend Developer
                  </strong>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--cyan)' }}>
                    2023 — Present
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)', marginBottom: '6px' }}>
                  Autonomous Workflows &amp; Custom Software Engineering
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-1)', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Architected multi-step n8n automation graphs integrating webhooks, Gmail parsing, CRM databases, and LLM text extraction.</li>
                  <li>Engineered Doc-Doc, an AI clinical triage consultant conducting conversational symptom analysis and doctor preparation.</li>
                  <li>Constructed semantic RAG retrieval pipelines using vector embeddings, cosine similarity scoring, and source citations.</li>
                  <li>Developed responsive full-stack applications with Django REST APIs, PostgreSQL data layers, and React frontends.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div style={{ marginBottom: '24px' }}>
            <div className="resume-section-title">Technical Competencies</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-0)', marginBottom: '4px' }}>
                  AI &amp; Automation
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-1)', lineHeight: 1.6 }}>
                  n8n Workflows, RAG Knowledge Retrieval, Vector Databases (Pinecone/Chroma), Speech AI (TTS/STT), Prompt Engineering, Multi-agent Chaining
                </div>
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-0)', marginBottom: '4px' }}>
                  Backend &amp; Languages
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-1)', lineHeight: 1.6 }}>
                  Python, Django, Django REST Framework, C/C++, JavaScript, TypeScript, RESTful API Design, JWT Auth
                </div>
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-0)', marginBottom: '4px' }}>
                  Databases &amp; Systems
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-1)', lineHeight: 1.6 }}>
                  PostgreSQL, SQLite, Redis, Celery Async Workers, Webhook Ingestion, JSON Schema Validation
                </div>
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-0)', marginBottom: '4px' }}>
                  Frontend &amp; Delivery
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-1)', lineHeight: 1.6 }}>
                  React, HTML5/CSS3, Tailwind CSS, Git/GitHub, Docker, Linux, Postman, Vercel
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '20px',
              borderTop: '1px solid var(--line)',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>
              Open to AI Engineering, Backend Development, and Automation roles.
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handlePrint} className="btn btn-secondary btn-sm">
                <Printer size={13} style={{ display: 'inline', marginRight: '4px' }} />
                Print / Save
              </button>
              <button onClick={onClose} className="btn btn-ghost btn-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
