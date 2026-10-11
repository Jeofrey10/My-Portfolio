import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Label from '../ui/Label';
import Rule from '../ui/Rule';
import { journey } from '../../data/journey';

const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      style={{
        padding: 'clamp(80px, 12vh, 168px) 0 clamp(96px, 14vh, 200px)',
      }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between mb-6">
          <Label index="06">JOURNEY</Label>
        </div>
        <Rule weight="hair" className="mb-8" />

        {/* Journey ledger */}
        <div>
          {journey.map((entry, i) => (
            <JourneyRow key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

const JourneyRow: React.FC<{ entry: typeof journey[0] }> = ({ entry }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        boxShadow: '0 -1px 0 var(--border-highlight)',
        backgroundColor: hovered ? 'var(--surface-hover)' : 'transparent',
        transition: 'background-color 180ms cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '20px 0',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-baseline">
        {/* Year */}
        <div className="col-span-2">
          <span
            className="font-mono flex items-center gap-2 transition-colors duration-180"
            style={{
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              color: hovered ? 'var(--blue)' : 'var(--text-secondary)',
            }}
          >
            {entry.isCurrent && (
              <span
                className="inline-block w-1.5 h-1.5 flex-shrink-0"
                style={{ backgroundColor: 'var(--blue)' }}
                aria-hidden="true"
              />
            )}
            {entry.year}
          </span>
        </div>

        {/* Entry */}
        <motion.div
          className="col-span-8"
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="t-h2" style={{ color: 'var(--text-primary)' }}>
            {entry.entry}
          </span>
          {entry.sub && (
            <span
              className="block font-mono mt-1"
              style={{
                fontSize: 'var(--t-small)',
                color: 'var(--text-secondary)',
              }}
            >
              {entry.sub}
            </span>
          )}
        </motion.div>

        {/* Tag */}
        <div className="col-span-2 text-right">
          <span
            className="font-mono"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            {entry.tag}
          </span>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <span
          className="font-mono flex items-center gap-2 mb-2 transition-colors duration-180"
          style={{
            fontSize: 'var(--t-label)',
            letterSpacing: '0.14em',
            color: hovered ? 'var(--blue)' : 'var(--text-secondary)',
          }}
        >
          {entry.isCurrent && (
            <span
              className="inline-block w-1.5 h-1.5 flex-shrink-0"
              style={{ backgroundColor: 'var(--blue)' }}
              aria-hidden="true"
            />
          )}
          {entry.year}
        </span>
        <motion.div
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="t-h2 block" style={{ color: 'var(--text-primary)' }}>
            {entry.entry}
          </span>
          {entry.sub && (
            <span className="block font-mono mt-1" style={{ fontSize: 'var(--t-small)', color: 'var(--text-secondary)' }}>
              {entry.sub}
            </span>
          )}
        </motion.div>
        <span
          className="font-mono block mt-2"
          style={{
            fontSize: 'var(--t-micro)',
            letterSpacing: '0.18em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          {entry.tag}
        </span>
      </div>
    </motion.div>
  );
};

export default Journey;
