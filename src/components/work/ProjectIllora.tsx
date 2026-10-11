import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const NODES = [
  { id: 'sales', label: 'SALES', x: 20, y: 15 },
  { id: 'demand', label: 'DEMAND', x: 75, y: 10 },
  { id: 'manufacturing', label: 'MANUFACTURING', x: 15, y: 50 },
  { id: 'marketing', label: 'MARKETING', x: 80, y: 50 },
  { id: 'decision', label: 'DECISION', x: 50, y: 75 },
  { id: 'core', label: 'CORE', x: 50, y: 40, isCore: true },
];

const CONNECTIONS = [
  { from: 'sales', to: 'core' },
  { from: 'demand', to: 'core' },
  { from: 'manufacturing', to: 'core' },
  { from: 'marketing', to: 'core' },
  { from: 'core', to: 'decision' },
  { from: 'sales', to: 'demand' },
];

const ProjectIllora: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(diagramRef, { once: true, margin: '-15%' });

  const getNode = (id: string) => NODES.find((n) => n.id === id)!;

  return (
    <article
      className="relative"
      style={{
        padding: 'clamp(64px, 10vh, 128px) 0',
        overflowX: 'clip',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Debossed AUTONOMOUS background */}
      <div
        className="absolute top-1/3 left-0 w-full pointer-events-none select-none deboss whitespace-nowrap overflow-hidden"
        style={{
          fontSize: 'clamp(5rem, 14vw, 12rem)',
          fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 900,
          lineHeight: 0.82,
          letterSpacing: '-0.045em',
          opacity: 0.5,
        }}
        aria-hidden="true"
      >
        AUTONOMOUS AUTONOMOUS
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-6">
          {/* Title — ILLORA spanning full width */}
          <div className="col-span-4 lg:col-span-12 relative" style={{ marginBottom: '-16px', minWidth: 0 }}>
            <div className="flex items-baseline gap-4 flex-wrap" style={{ overflow: 'hidden' }}>
              <motion.span
                className="t-mega block select-none"
                style={{
                  fontWeight: 900,
                  color: 'var(--ink-black)',
                  lineHeight: 0.82,
                  letterSpacing: '-0.05em',
                }}
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                ILLORA
              </motion.span>
              <span
                className="font-display"
                style={{
                  fontSize: 'calc(var(--t-mega) * 0.33)',
                  fontWeight: 900,
                  color: 'var(--ink-black)',
                  lineHeight: 0.82,
                  letterSpacing: '-0.045em',
                }}
              >
                AI
              </span>
            </div>

            {/* Blue rule wipe */}
            <motion.div
              style={{
                height: '1px',
                backgroundColor: 'var(--blue)',
                marginTop: '16px',
                transformOrigin: 'left',
              }}
              animate={{ scaleX: hovered ? 1 : 0 }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />

            {/* Index hover color */}
            <span
              className="absolute top-0 right-0 t-display select-none transition-colors duration-200 hidden lg:block"
              style={{
                fontWeight: 900,
                color: hovered ? 'var(--blue)' : 'var(--ink-10)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-hidden="true"
            >
              03
            </span>
          </div>

          {/* Tagline */}
          <div className="col-span-4 lg:col-span-8 mt-8">
            <h3 className="t-h1" style={{ color: 'var(--ink)' }}>
              Autonomous Enterprise Intelligence
            </h3>
          </div>

          {/* Body */}
          <div className="col-span-4 lg:col-span-5 mt-4">
            <p className="measure" style={{ color: 'var(--ink)' }}>
              An agent system that reads a company's own signals and decides what to do about them. Sales, demand, manufacturing, marketing — one layer of reasoning across all of it. The long-term question it's chasing: how much of a company can actually run itself?
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" aria-hidden="true" />

          {/* Agent diagram */}
          <div className="col-span-4 lg:col-span-5" ref={diagramRef}>
            <div className="relative" style={{ aspectRatio: '4/3', overflowX: 'auto' }}>
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Connection lines with draw-in animation */}
                {CONNECTIONS.map((conn, i) => {
                  const from = getNode(conn.from);
                  const to = getNode(conn.to);
                  const x1 = from.x * 4;
                  const y1 = from.y * 3;
                  const x2 = to.x * 4;
                  const y2 = to.y * 3;
                  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

                  return (
                    <motion.line
                      key={`${conn.from}-${conn.to}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="var(--ink-20)"
                      strokeWidth="1"
                      strokeDasharray={length}
                      initial={{ strokeDashoffset: length }}
                      animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: length }}
                      transition={{
                        duration: 0.9,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  );
                })}

                {/* Nodes */}
                {NODES.map((node) => {
                  const x = node.x * 4;
                  const y = node.y * 3;
                  const w = node.label.length * 7 + 20;
                  const h = 24;

                  return (
                    <g key={node.id}>
                      <rect
                        x={x - w / 2}
                        y={y - h / 2}
                        width={w}
                        height={h}
                        fill="var(--paper)"
                        stroke={(node as any).isCore ? 'var(--blue)' : 'var(--ink-20)'}
                        strokeWidth="1"
                      />
                      <text
                        x={x}
                        y={y + 4}
                        textAnchor="middle"
                        fill="var(--ink-40)"
                        fontFamily="'Martian Mono', monospace"
                        fontSize="8"
                        letterSpacing="0.14em"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Hidden metadata on hover */}
          <motion.div
            className="col-span-4 lg:col-span-12 font-mono"
            style={{ fontSize: 'var(--t-micro)', letterSpacing: '0.14em', color: 'var(--ink-40)' }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.22 }}
          >
            CONCEPT / IN DEVELOPMENT · SCOPE / AI AGENTS · DECISION SUPPORT · FORECASTING
          </motion.div>

          {/* Mono footer strip */}
          <div className="col-span-4 lg:col-span-12 mt-4">
            <div
              className="font-mono flex flex-wrap gap-4"
              style={{
                fontSize: 'var(--t-micro)',
                letterSpacing: '0.14em',
                color: 'var(--ink-40)',
                textTransform: 'uppercase',
                borderTop: '1px solid var(--ink-10)',
                paddingTop: '12px',
              }}
            >
              <span>CONCEPT / IN DEVELOPMENT</span>
              <span style={{ color: 'var(--ink-10)' }}>·</span>
              <span>SCOPE / AI AGENTS · DECISION SUPPORT · FORECASTING</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectIllora;
