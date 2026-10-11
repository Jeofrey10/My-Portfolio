import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Marks from '../ui/Marks';

const SPECS = [
  { label: 'MCU', value: 'ESP32-S3' },
  { label: 'SENSING', value: 'RGB · ENVIRONMENTAL · SHT21' },
  { label: 'DISPLAY', value: 'OLED + RGB STATUS INDICATOR' },
  { label: 'OUTPUT', value: 'COLOUR-CODED EXPOSURE STATE' },
  { label: 'DOMAIN', value: 'EMBEDDED · IOT · SAFETY' },
  { label: 'STATUS', value: 'PROTOTYPE' },
];

const COMPONENTS = [
  { label: 'ESP32-S3', x: 50, y: 30, w: 80, h: 30 },
  { label: 'SHT21', x: 170, y: 15, w: 60, h: 24 },
  { label: 'OLED 128×64', x: 170, y: 55, w: 80, h: 24 },
  { label: 'RGB LED', x: 280, y: 15, w: 60, h: 24 },
  { label: 'H₂S SENSOR', x: 280, y: 55, w: 80, h: 24 },
];

const ProjectH2S: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative"
      style={{ padding: 'clamp(64px, 10vh, 128px) 0' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container-site">
        <div
          className="relative"
          style={{ border: '1px solid var(--ink)' }}
        >
          <Marks />

          {/* Header bar */}
          <div
            className="font-mono flex flex-wrap items-center justify-between gap-4"
            style={{
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              color: 'var(--ink-40)',
              padding: '12px 24px',
              borderBottom: '1px solid var(--ink-10)',
              backgroundColor: 'var(--paper-warm)',
            }}
          >
            <span>04 / H2S EXPOSURE MONITOR</span>
            <span>REV 01</span>
            <span>ESP32-S3</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Cell 1 — Title and description (spans 2 cols) */}
            <div
              className="lg:col-span-2"
              style={{
                padding: 'clamp(24px, 3vw, 32px) clamp(16px, 2vw, 24px)',
                borderBottom: '1px solid var(--ink-10)',
                borderRight: '1px solid var(--ink-10)',
              }}
            >
              <motion.h3
                className="t-display mb-4"
                style={{ color: 'var(--ink-black)' }}
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                H₂S SAFETY
              </motion.h3>

              {/* Blue rule wipe */}
              <motion.div
                style={{
                  height: '1px',
                  backgroundColor: 'var(--blue)',
                  marginBottom: '16px',
                  transformOrigin: 'left',
                }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              />

              <p className="measure" style={{ color: 'var(--ink)' }}>
                A wearable-scale sensor that makes hydrogen sulfide exposure visible before it's dangerous. Reads the environment continuously and warns in colour, not in numbers.
              </p>

              {/* Index */}
              <span
                className="absolute top-16 right-6 t-display select-none transition-colors duration-200 hidden lg:block"
                style={{
                  fontWeight: 900,
                  color: hovered ? 'var(--blue)' : 'var(--ink-10)',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                aria-hidden="true"
              >
                04
              </span>
            </div>

            {/* Cell 2 — Component diagram */}
            <div
              className="lg:col-span-1"
              style={{
                padding: '24px',
                borderBottom: '1px solid var(--ink-10)',
                minHeight: '200px',
              }}
            >
              <svg viewBox="0 0 380 100" className="w-full h-full" aria-hidden="true">
                {/* Leader lines */}
                <line x1="130" y1="45" x2="170" y2="27" stroke="var(--ink-20)" strokeWidth="1" />
                <line x1="130" y1="45" x2="170" y2="67" stroke="var(--ink-20)" strokeWidth="1" />
                <line x1="230" y1="27" x2="280" y2="27" stroke="var(--ink-20)" strokeWidth="1" />
                <line x1="250" y1="67" x2="280" y2="67" stroke="var(--ink-20)" strokeWidth="1" />

                {/* Components */}
                {COMPONENTS.map((comp) => (
                  <g key={comp.label}>
                    <rect
                      x={comp.x}
                      y={comp.y}
                      width={comp.w}
                      height={comp.h}
                      fill="var(--paper)"
                      stroke={comp.label === 'H₂S SENSOR' ? 'var(--blue)' : 'var(--ink-20)'}
                      strokeWidth="1"
                    />
                    <text
                      x={comp.x + comp.w / 2}
                      y={comp.y + comp.h / 2 + 3}
                      textAnchor="middle"
                      fill="var(--ink-40)"
                      fontFamily="'Martian Mono', monospace"
                      fontSize="7"
                      letterSpacing="0.1em"
                    >
                      {comp.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Cells 3-6 — Spec rows */}
            {SPECS.map((spec, i) => (
              <div
                key={spec.label}
                className={i < 3 ? '' : ''}
                style={{
                  padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 2vw, 24px)',
                  borderBottom: i < SPECS.length - 1 ? '1px solid var(--ink-10)' : 'none',
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono flex-shrink-0"
                    style={{
                      fontSize: 'var(--t-micro)',
                      letterSpacing: '0.14em',
                      color: 'var(--ink-40)',
                      minWidth: '80px',
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 'var(--t-small)',
                      color: 'var(--ink)',
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden metadata on hover */}
          <motion.div
            className="font-mono"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.14em',
              color: 'var(--ink-40)',
              padding: '8px 24px',
            }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.22 }}
          >
            HARDWARE · SAFETY · IOT
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default ProjectH2S;
