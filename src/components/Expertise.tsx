import React, { useState, useEffect } from 'react';
import { CORE_PILLARS } from '../data/portfolioData';
import { Network, Database, Mic, Server, Play, RotateCcw, CheckCircle, ArrowRight } from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const simulationSteps = [
    {
      step: '01 / INGEST',
      title: 'Webhook Ingestion',
      desc: 'Incoming event payload from Gmail, CRM, or client API is captured, authenticated, and normalized.',
      status: 'Payload: Verified & Parsed (200 OK)'
    },
    {
      step: '02 / RETRIEVAL',
      title: 'Vector Knowledge Query',
      desc: 'Contextual semantic search executes against vectorized knowledge base embeddings with strict source citation.',
      status: 'Top 3 Chunks Retrieved (Cosine: 0.94)'
    },
    {
      step: '03 / SYNTHESIS',
      title: 'LLM Agent Classification',
      desc: 'Grounded model analyzes intent, verifies safety guardrails, and synthesizes action directives without hallucination.',
      status: 'Intent: High Priority Clinical Inquiry'
    },
    {
      step: '04 / DISPATCH',
      title: 'Autonomous Action Execution',
      desc: 'Formatted email draft dispatched to executive review queue and status logged to relational database.',
      status: 'Draft Created & DB Transaction Committed'
    }
  ];

  const handleStartSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          return 4;
        }
        return prev + 1;
      });
    }, 1100);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setActiveStep(0);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return <Network size={22} />;
      case 'Database':
        return <Database size={22} />;
      case 'Mic':
        return <Mic size={22} />;
      case 'Server':
      default:
        return <Server size={22} />;
    }
  };

  return (
    <section id="expertise">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">Architectural Pillars</span>
          <h2>How I build autonomous systems.</h2>
          <p className="section-sub">
            A concrete look into the engineering disciplines I deploy across AI agent orchestration, vector retrieval, and reliable full-stack backends.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="pillars-grid">
          {CORE_PILLARS.map((pillar, idx) => (
            <div className="pillar-card" key={idx}>
              <div className="pillar-icon-box">{renderIcon(pillar.icon)}</div>
              <span className="pillar-tag">{pillar.tag}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>

              <ul className="pillar-points">
                {pillar.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Live Workflow Simulation Box */}
        <div className="simulator-box">
          <div className="simulator-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="tag" style={{ margin: 0 }}>Interactive Architecture Demo</span>
                <span className="admin-badge" style={{ fontSize: '11px' }}>n8n + RAG Pipeline</span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700 }}>
                Autonomous Execution Flow Simulation
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-1)', marginTop: '4px' }}>
                Click below to observe how an event moves through my autonomous agent architecture in real time.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleStartSimulation}
                disabled={isSimulating}
                className="btn btn-primary btn-sm"
                style={{ opacity: isSimulating ? 0.6 : 1 }}
              >
                <Play size={14} />
                <span>{isSimulating ? 'Processing...' : 'Run Pipeline'}</span>
              </button>
              <button
                onClick={handleResetSimulation}
                disabled={isSimulating && activeStep > 0}
                className="btn btn-ghost btn-sm"
                title="Reset simulation"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="pipeline-nodes-row">
            {simulationSteps.map((s, idx) => {
              const stepNumber = idx + 1;
              const isCurrent = activeStep === stepNumber;
              const isDone = activeStep > stepNumber || activeStep === 4;

              return (
                <div
                  key={idx}
                  className={`pipeline-node ${isCurrent ? 'active' : ''} ${isDone ? 'completed' : ''}`}
                >
                  <div className="node-step-indicator">
                    <span>{s.step}</span>
                    {isDone && <CheckCircle size={14} color="var(--emerald)" />}
                  </div>
                  <div className="node-title">{s.title}</div>
                  <div className="node-desc">{s.desc}</div>

                  {activeStep >= stepNumber && (
                    <div
                      style={{
                        marginTop: '12px',
                        paddingTop: '8px',
                        borderTop: '1px solid var(--line)',
                        fontSize: '11px',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: isCurrent ? 'var(--cyan)' : 'var(--emerald)',
                      }}
                    >
                      {s.status}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
