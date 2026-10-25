import React from 'react';
import { INFO_ROWS } from '../data/portfolioData';
import { CheckCircle2, Cpu, FileSpreadsheet, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">About &amp; Philosophy</span>
          <h2>Bridging theoretical computer science with self-executing automation.</h2>
          <p className="section-sub">
            Engineering software systems that don't just wait for human clicks &mdash; but observe, process, and execute workflows autonomously.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'start' }}>
          {/* Narrative bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-1)', fontSize: '15px', lineHeight: 1.75 }}>
            <p>
              I'm <b style={{ color: 'var(--text-0)' }}>Sourav Ahmed</b> &mdash; a developer, mentor, and lifelong learner based in Dhaka, Bangladesh. After graduating from the prestigious <b style={{ color: 'var(--text-0)' }}>St. Joseph Higher Secondary School</b>, I immersed myself in Computer Science &amp; Engineering at <b style={{ color: 'var(--text-0)' }}>Bangladesh University of Professionals (BUP)</b>, dedicated to becoming an <b style={{ color: 'var(--text-0)' }}>AI Engineer</b>.
            </p>
            <p>
              My engineering philosophy focuses on <b style={{ color: 'var(--text-0)' }}>AI integration in production</b>. Too many AI projects remain fragile chat demos that cannot survive in actual corporate environments. My work combines standard full-stack discipline (Python, Django, Node.js, relational database modeling) with multi-agent orchestration (n8n workflows, RAG document embeddings, speech transcription pipelines).
            </p>
            <p>
              Beyond raw algorithms, I believe high-leverage software requires <b style={{ color: 'var(--text-0)' }}>transparent systems architecture</b>. I design clear workflow schemas in Canva and model structured financial/data tables in Excel, ensuring that every automation pipeline I deliver is completely understandable, maintainable, and audit-ready for stakeholders.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--line)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan)', fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>
                  <Cpu size={16} />
                  <span>AI Engineering</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>
                  Active research in RAG architectures, model grounding, and autonomous webhook automation.
                </div>
              </div>

              <div style={{ background: 'var(--card)', border: '1px solid var(--line)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--violet)', fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>
                  <FileSpreadsheet size={16} />
                  <span>Delivery &amp; Specs</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>
                  Rigorous data modeling, Canva system architecture blueprints, and modular codebases.
                </div>
              </div>
            </div>
          </div>

          {/* Structured Info Card */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="var(--cyan)" />
              <span>Developer Profile Highlights</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {INFO_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '10px',
                    borderBottom: idx === INFO_ROWS.length - 1 ? 'none' : '1px solid var(--line)',
                    fontSize: '13px',
                  }}
                >
                  <span style={{ color: 'var(--text-2)', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
                    {row.label}
                  </span>
                  <span style={{ color: 'var(--text-0)', fontWeight: 500, textAlign: 'right' }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
