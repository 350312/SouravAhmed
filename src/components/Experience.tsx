import React from 'react';
import { TIMELINE_ITEMS } from '../data/portfolioData';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">Trajectory</span>
          <h2>Education &amp; Experience</h2>
          <p className="section-sub">
            The academic foundation and practical project engineering that shape my capabilities.
          </p>
        </div>

        <div className="timeline-container">
          {TIMELINE_ITEMS.map((item) => (
            <div className="timeline-card" key={item.id}>
              {/* Left Column: Period & Organization */}
              <div>
                <div className="timeline-period-badge">{item.period}</div>
                <div className="timeline-org">{item.organization}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-2)', marginTop: '4px' }}>
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Right Column: Title, Description, and Bullet Points */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  {item.type === 'education' ? (
                    <GraduationCap size={18} color="var(--violet)" />
                  ) : (
                    <Briefcase size={18} color="var(--cyan)" />
                  )}
                  <h3 className="timeline-role">{item.title}</h3>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-bullet-list">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
