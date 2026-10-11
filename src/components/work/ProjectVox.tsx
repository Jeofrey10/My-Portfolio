import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Marks from '../ui/Marks';

const ProjectVox: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative"
      style={{
        backgroundColor: 'var(--paper-warm)',
        padding: 'clamp(48px, 10vh, 128px) 0',
        overflowX: 'clip',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container-site">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-6 relative">
          {/* Giant 01 index */}
          <div className="col-span-4 lg:col-span-12 relative" style={{ height: 'clamp(80px, 16vw, 260px)' }}>
            <span
              className="t-mega absolute top-0 left-0 select-none transition-colors duration-200"
              style={{
                color: hovered ? 'var(--blue)' : 'var(--ink-10)',
                fontWeight: 900,
                lineHeight: 0.82,
                zIndex: 0,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-hidden="true"
            >
              01
            </span>

            {/* Title overlapping the index */}
            <motion.h3
              className="t-display absolute"
              style={{
                top: '40%',
                left: '8px',
                zIndex: 1,
                color: 'var(--ink-black)',
              }}
              animate={{
                x: hovered ? 6 : 0,
              }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              VOX AI
            </motion.h3>
          </div>

          {/* Tagline */}
          <div className="col-span-4 lg:col-span-12">
            <p className="t-h2" style={{ color: 'var(--ink)' }}>
              Just speak. Everything runs.
            </p>
            {/* Blue rule wipe */}
            <motion.div
              style={{
                height: '1px',
                backgroundColor: 'var(--blue)',
                marginTop: '12px',
                transformOrigin: 'left',
              }}
              animate={{ scaleX: hovered ? 1 : 0 }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
          </div>

          {/* Left column — body */}
          <div className="col-span-4 lg:col-span-5">
            <p className="measure" style={{ color: 'var(--ink)' }}>
              A voice-native retail operating system for MSMEs. Shopkeepers run billing, stock and reorders by talking — no forms, no training, no touchscreen literacy required.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* Right — device frame with abstract UI composition */}
          <motion.div
            className="col-span-4 lg:col-span-6 relative overflow-hidden"
            style={{
              aspectRatio: '16/10',
              border: '1px solid var(--ink)',
              backgroundColor: 'var(--silver)',
            }}
            animate={{
              y: hovered ? -6 : 0,
              scale: hovered ? 1.015 : 1,
            }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <Marks />
            {/* Abstract waveform UI composition */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-full relative" style={{ height: '60%' }}>
                {/* Faint grid */}
                <div className="absolute inset-0" style={{ opacity: 0.1 }}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="absolute w-full" style={{ top: `${(i + 1) * 12.5}%`, borderTop: '1px solid var(--ink)' }} />
                  ))}
                </div>
                {/* Waveform bars */}
                <div className="flex items-end justify-center gap-px h-full" style={{ padding: '0 16px' }}>
                  {Array.from({ length: 60 }).map((_, i) => {
                    const h = 15 + Math.sin(i * 0.3) * 30 + Math.cos(i * 0.7) * 20 + Math.random() * 10;
                    const isBlue = i === 28;
                    return (
                      <div
                        key={i}
                        style={{
                          width: '2px',
                          height: `${Math.min(h, 90)}%`,
                          backgroundColor: isBlue ? 'var(--blue)' : 'var(--ink)',
                          flexShrink: 0,
                        }}
                      />
                    );
                  })}
                </div>
                {/* Mono labels */}
                <div className="absolute bottom-0 left-4 font-mono" style={{ fontSize: '9px', color: 'var(--ink-40)', letterSpacing: '0.14em' }}>
                  LISTENING
                </div>
                <div className="absolute top-0 right-4 font-mono" style={{ fontSize: '9px', color: 'var(--ink-40)', letterSpacing: '0.14em' }}>
                  TXN #0417
                </div>
                <div className="absolute bottom-0 right-4 font-mono" style={{ fontSize: '9px', color: 'var(--ink-40)', letterSpacing: '0.14em' }}>
                  STOCK ↓ 12
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hidden metadata on hover */}
          <motion.div
            className="col-span-4 lg:col-span-12 font-mono"
            style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--ink-40)' }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.22 }}
          >
            ROLE / PRODUCT · DESIGN · FRONTEND &nbsp;&nbsp;&nbsp; YEAR / 2026
          </motion.div>

          {/* Tech spec strip */}
          <div className="col-span-4 lg:col-span-12">
            <div
              className="flex flex-wrap gap-0 font-mono"
              style={{
                fontSize: 'var(--t-micro)',
                letterSpacing: '0.14em',
                color: 'var(--ink-40)',
                textTransform: 'uppercase',
                borderTop: '1px solid var(--ink-10)',
                borderBottom: '1px solid var(--ink-10)',
              }}
            >
              {['SYSTEM / VOICE AI', 'SPEECH-TO-TEXT', 'INVENTORY INTELLIGENCE', 'COMPUTER VISION', 'IOT / EDGE', 'RETAIL AUTOMATION'].map((tech, i) => (
                <span
                  key={tech}
                  style={{
                    padding: 'clamp(8px, 1.5vw, 12px) clamp(8px, 2vw, 16px)',
                    borderRight: i < 5 ? '1px solid var(--ink-10)' : 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectVox;
