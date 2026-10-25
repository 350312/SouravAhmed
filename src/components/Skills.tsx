import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">Technical Proficiencies</span>
          <h2>Tooling, models &amp; languages.</h2>
          <p className="section-sub">
            A comprehensive inventory of the programming languages, frameworks, AI agent tooling, and data environments I work in daily.
          </p>
        </div>

        <div className="skills-grid-detailed">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div className="skills-category-card" key={idx}>
              <h3 className="skills-cat-title">{category.title}</h3>
              <p className="skills-cat-desc">{category.description}</p>

              <div>
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-row-detailed" key={sIdx}>
                    <div className="skill-label-wrap">
                      <span>{skill.name}</span>
                      <span className="skill-percentage-num">{skill.level}%</span>
                    </div>

                    <div className="skill-track-bg">
                      <div
                        className="skill-track-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: skill.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
