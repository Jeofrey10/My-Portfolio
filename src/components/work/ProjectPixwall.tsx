import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Rule from '../ui/Rule';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const TILE_STYLES = [
  { bg: 'var(--silver)', color: 'var(--ink)' },
  { bg: 'var(--ink)', color: 'var(--paper)' },
  { bg: 'var(--paper)', color: 'var(--ink)' },
  { bg: 'var(--silver-deep)', color: 'var(--ink-black)' },
  { bg: 'var(--blue)', color: 'var(--paper)' },
  { bg: 'var(--paper-warm)', color: 'var(--ink)' },
  { bg: 'var(--ink-black)', color: 'var(--silver)' },
  { bg: 'var(--silver)', color: 'var(--ink-black)' },
  { bg: 'var(--paper)', color: 'var(--ink-40)' },
];

const ProjectPixwall: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative"
      style={{ padding: 'clamp(64px, 10vh, 128px) 0' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container-site">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-6">
          {/* Left — poster grid (cols 1-7) */}
          <div className="col-span-4 lg:col-span-7 order-2 lg:order-1">
            <div
              className="grid grid-cols-3 gap-1 overflow-hidden"
              style={{ aspectRatio: 'var(--poster-ratio, 4/5)' }}
            >
              {LETTERS.map((letter, i) => (
                <motion.div
                  key={letter}
                  className="flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundColor: TILE_STYLES[i].bg,
                    border: '1px solid var(--ink-06)',
                  }}
                  whileHover={{
                    x: i % 2 === 0 ? 4 : -4,
                    y: i % 3 === 0 ? 4 : -4,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="font-display select-none"
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 5rem)',
                      fontWeight: 900,
                      color: TILE_STYLES[i].color,
                      lineHeight: 1,
                    }}
                  >
                    {letter}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1 order-2" aria-hidden="true" />

          {/* Right — text (cols 9-12), vertically centered low */}
          <div className="col-span-4 lg:col-span-4 order-1 lg:order-3 flex flex-col justify-end" style={{ paddingBottom: 'clamp(0px, 3vw, 15%)' }}>
            {/* Blue accent rule */}
            <Rule weight="accent" width="64px" className="mb-6" />

            {/* Index */}
            <span
              className="t-display block select-none mb-2 transition-colors duration-200"
              style={{
                fontWeight: 900,
                color: hovered ? 'var(--blue)' : 'var(--ink-20)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-hidden="true"
            >
              02
            </span>

            {/* Title */}
            <motion.h3
              className="t-display mb-4"
              style={{ color: 'var(--ink-black)' }}
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              PIXWALL
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

            {/* Description */}
            <p className="measure mb-6" style={{ color: 'var(--ink)' }}>
              A poster marketplace built like a product, not a storefront. Browse, preview at scale, buy. The whole experience is the point.
            </p>

            {/* Mono spec stack */}
            <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--ink-40)', lineHeight: 2.4 }}>
              <div>FIELD &nbsp;&nbsp;&nbsp; / E-COMMERCE · PRODUCT DESIGN</div>
              <div>BUILD &nbsp;&nbsp;&nbsp; / REACT · TAILWIND · SUPABASE</div>
              <div>SCOPE &nbsp;&nbsp;&nbsp; / IDENTITY · UI/UX · FRONTEND</div>
            </div>

            {/* Hidden metadata on hover */}
            <motion.div
              className="font-mono mt-4"
              style={{ fontSize: 'var(--t-micro)', letterSpacing: '0.14em', color: 'var(--ink-40)' }}
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
              transition={{ duration: 0.22 }}
            >
              MARKETPLACE · PRODUCT
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectPixwall;
