import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Label from '../ui/Label';
import Rule from '../ui/Rule';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative"
      style={{
        padding: 'clamp(96px, 14vh, 200px) 0 clamp(80px, 12vh, 168px)',
      }}
    >
      {/* Rotated INDEX label on left edge */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <span
          className="font-mono block"
          style={{
            fontSize: 'var(--t-micro)',
            letterSpacing: '0.18em',
            color: 'var(--text-muted)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textTransform: 'uppercase',
          }}
        >
          INDEX
        </span>
      </div>

      <div className="container-site">
        <div className="flex items-center justify-between mb-6">
          <Label index="04">TECHNICAL INDEX</Label>
        </div>
        <Rule weight="hair" className="mb-8" />

        {/* Skill rows */}
        {skills.map((category, catIndex) => (
          <div key={category.label}>
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6" style={{ padding: '24px 0' }}>
              {/* Left column — category label */}
              <div className="col-span-4 lg:col-span-2 lg:sticky lg:top-24">
                <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {category.index}
                </div>
                <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {category.label}
                </div>
                <div className="font-mono" style={{ fontSize: 'var(--t-micro)', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>
                  {String(category.items.length).padStart(2, '0')} ITEMS
                </div>
              </div>

              {/* Right column — skill items */}
              <div className="col-span-4 lg:col-span-10">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1" style={{ overflowWrap: 'break-word', minWidth: 0 }}>
                  {category.items.map((item, i) => (
                    <React.Fragment key={item}>
                      <SkillItem name={item} />
                      {i < category.items.length - 1 && (
                        <span className="font-mono" style={{ fontSize: 'var(--t-small)', color: 'var(--text-muted)' }}>
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            {catIndex < skills.length - 1 && <Rule weight="hair" />}
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ name: string }> = ({ name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative t-h2-responsive cursor-default inline-block"
      style={{
        color: hovered ? 'var(--blue)' : 'var(--text-primary)',
        transition: 'color 180ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
      <motion.span
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: '1px',
          backgroundColor: 'var(--blue)',
          transformOrigin: 'left',
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
        aria-hidden="true"
      />
    </span>
  );
};

export default Skills;
