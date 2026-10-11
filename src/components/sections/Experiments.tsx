import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Label from '../ui/Label';
import Rule from '../ui/Rule';
import Marks from '../ui/Marks';
import { experiments } from '../../data/experiments';

// Abstract CSS compositions for each tile
const TileComposition: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'a':
      // Waveform
      return (
        <div className="flex items-end justify-center gap-px h-full p-4" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: `${20 + Math.sin(i * 0.5) * 35 + Math.cos(i * 0.3) * 15}%`,
                backgroundColor: i === 12 ? 'var(--blue)' : 'var(--text-muted)',
              }}
            />
          ))}
        </div>
      );
    case 'b':
      // Circuit traces
      return (
        <div className="relative h-full p-4" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${15 + i * 14}%`,
                left: `${10 + (i % 3) * 20}%`,
                width: `${40 + (i % 2) * 20}%`,
                height: '1px',
                backgroundColor: 'var(--text-muted)',
              }}
            />
          ))}
          <div className="absolute" style={{ top: '30%', left: '50%', width: '8px', height: '8px', border: '1px solid var(--text-secondary)' }} />
          <div className="absolute" style={{ top: '60%', left: '30%', width: '6px', height: '6px', backgroundColor: 'var(--text-muted)' }} />
        </div>
      );
    case 'c':
      // Large letterform
      return (
        <div className="flex items-center justify-center h-full" aria-hidden="true">
          <span
            className="font-display select-none"
            style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 900, color: 'var(--ink-10)', lineHeight: 1 }}
          >
            P
          </span>
        </div>
      );
    case 'd':
      // Command palette lines
      return (
        <div className="flex flex-col gap-2 h-full p-4 justify-center" aria-hidden="true">
          {['>', '  search...', '  open file', '  run cmd'].map((line, i) => (
            <div
              key={i}
              className="font-mono"
              style={{
                fontSize: '8px',
                color: i === 0 ? 'var(--blue)' : 'var(--text-muted)',
                letterSpacing: '0.1em',
              }}
            >
              {line}
            </div>
          ))}
        </div>
      );
    case 'e':
      // Grid layout pattern
      return (
        <div className="grid grid-cols-6 grid-rows-3 gap-px h-full p-3" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: i === 7 ? 'var(--blue)' : [2, 5, 10, 14].includes(i) ? 'var(--ink-10)' : 'var(--ink-06)',
                opacity: [3, 8, 12, 16].includes(i) ? 0 : 1,
              }}
            />
          ))}
        </div>
      );
    case 'f':
      // Monogram mark
      return (
        <div className="flex items-center justify-center h-full" aria-hidden="true">
          <div className="relative" style={{ width: '48px', height: '48px', border: '1px solid var(--text-muted)' }}>
            <span
              className="font-display absolute inset-0 flex items-center justify-center"
              style={{ fontSize: '20px', fontWeight: 900, color: 'var(--text-secondary)' }}
            >
              JM
            </span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Experiments: React.FC = () => {
  return (
    <section
      id="experiments"
      style={{
        padding: 'clamp(80px, 12vh, 168px) 0 clamp(96px, 14vh, 200px)',
      }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between mb-6">
          <Label index="05">EXPERIMENTS</Label>
        </div>
        <Rule weight="hair" className="mb-4" />

        <p className="t-lead mb-12 lg:mb-16" style={{ maxWidth: '55ch', color: 'var(--text-primary)' }}>
          Some started as experiments. A few became real products. Most didn't, which was the point.
        </p>

        {/* Irregular masonry layout — desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-6">
          {/* Row 1 */}
          {experiments.slice(0, 3).map((exp) => (
            <ExperimentTile
              key={exp.id}
              experiment={exp}
              style={{
                gridColumn: `${exp.colStart} / ${exp.colEnd}`,
                marginTop: exp.offsetY ? `${exp.offsetY}px` : undefined,
              }}
            />
          ))}

          {/* Empty band */}
          <div className="col-span-12" style={{ height: '96px' }} aria-hidden="true" />

          {/* Row 2 */}
          {experiments.slice(3).map((exp) => (
            <ExperimentTile
              key={exp.id}
              experiment={exp}
              style={{
                gridColumn: `${exp.colStart} / ${exp.colEnd}`,
                marginTop: exp.offsetY ? `${exp.offsetY}px` : undefined,
              }}
            />
          ))}
        </div>

        {/* Mobile — 2 columns with alternating offsets */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {experiments.map((exp, i) => (
            <ExperimentTile
              key={exp.id}
              experiment={exp}
              style={{
                marginTop: i % 2 !== 0 ? '20px' : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperimentTile: React.FC<{
  experiment: typeof experiments[0];
  style?: React.CSSProperties;
}> = ({ experiment, style }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      style={{
        aspectRatio: experiment.aspect,
        backgroundColor: hovered ? 'var(--silver-deep)' : 'var(--silver)',
        border: '1px solid var(--border-subtle)',
        transition: 'background-color 200ms',
        overflow: 'hidden',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Marks />

      {/* Abstract composition */}
      <div className="absolute inset-0">
        <TileComposition type={experiment.id} />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0" style={{ padding: 'clamp(10px, 2vw, 16px)', zIndex: 2 }}>
        <span
          className="font-mono block mb-1 transition-colors duration-200"
          style={{
            fontSize: 'var(--t-micro)',
            letterSpacing: '0.18em',
            color: hovered ? 'var(--blue)' : 'var(--text-secondary)',
            textTransform: 'uppercase',
          }}
        >
          {experiment.kicker}
        </span>
        <span
          className="font-display block"
          style={{
            fontSize: 'var(--t-small)',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          {experiment.description}
        </span>
      </div>

      {/* Arrow on hover */}
      <motion.span
        className="absolute top-3 right-3 font-mono"
        style={{
          fontSize: 'var(--t-label)',
          color: 'var(--text-secondary)',
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        ↗
      </motion.span>
    </motion.div>
  );
};

export default Experiments;
