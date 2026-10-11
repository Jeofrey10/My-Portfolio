import React from 'react';
import { motion } from 'framer-motion';
import Label from '../ui/Label';
import Rule from '../ui/Rule';
import Marks from '../ui/Marks';
import TextReveal from '../ui/TextReveal';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative"
      style={{
        padding: 'clamp(96px, 14vh, 200px) 0 clamp(80px, 12vh, 168px)',
        overflowX: 'clip',
      }}
    >
      {/* Debossed ABOUT background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none deboss whitespace-nowrap"
        style={{
          fontSize: 'clamp(8rem, 22vw, 18rem)',
          fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 900,
          lineHeight: 0.82,
          letterSpacing: '-0.045em',
          opacity: 0.6,
        }}
        aria-hidden="true"
      >
        ABOUT
      </div>

      <div className="container-site relative z-10">
        {/* Section label */}
        <div className="flex items-center justify-between mb-6">
          <Label index="02">ABOUT</Label>
        </div>
        <Rule weight="hair" className="mb-12 lg:mb-16" />

        {/* Large statement */}
        <TextReveal>
          <h2
            className="t-display mb-12 lg:mb-20"
            style={{ maxWidth: 'min(75%, 100vw - 40px)' }}
          >
            I build things because ideas only get interesting once they're real.
          </h2>
        </TextReveal>

        {/* Asymmetric two-column body */}
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-6">
          {/* Left column: cols 1-4 */}
          <motion.div
            className="col-span-4 lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="measure" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>
              I'm a third-year Computer Science engineering student at Sethu Institute of Technology. Most of what I know came from building things that didn't work first.
            </p>
            <p className="measure" style={{ color: 'var(--text-primary)' }}>
              I work across frontend, AI and interface design — usually at the same time, because that's where the interesting problems are. Voice interfaces, retail systems, enterprise agents, a hydrogen sulfide sensor that lives on a breadboard.
            </p>
          </motion.div>

          {/* Empty gap: cols 5-6 — deliberately empty */}
          <div className="hidden lg:block lg:col-span-2" aria-hidden="true" />

          {/* Right column: cols 7-10 */}
          <motion.div
            className="col-span-4 lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="measure" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>
              I care about how a product feels as much as whether it runs. Type, spacing, the weight of a click. Then the schema underneath it.
            </p>
            <p className="measure" style={{ color: 'var(--text-primary)' }}>
              Right now I'm building products I'd want to use, and figuring out which of them could become a business.
            </p>
          </motion.div>

          {/* Vertical mono strip: cols 11-12 */}
          <div className="hidden lg:flex lg:col-span-2 items-start justify-end">
            <span
              className="font-mono block"
              style={{
                fontSize: 'var(--t-micro)',
                letterSpacing: '0.18em',
                color: 'var(--text-muted)',
                writingMode: 'vertical-rl',
                textTransform: 'uppercase',
                transform: 'rotate(180deg)',
              }}
              aria-hidden="true"
            >
              FIELD / FRONTEND · AI · UI-UX · PRODUCT · HARDWARE · BRAND
            </span>
          </div>
        </div>

        {/* Silver data panel */}
        <motion.div
          className="brushed-metal relative mt-12 lg:mt-16"
          style={{
            padding: 'clamp(20px, 3vw, 32px)',
            border: '1px solid var(--border-subtle)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Marks />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: 'DISCIPLINE', value: 'Design × Code' },
              { label: 'FOCUS', value: 'AI Interfaces' },
              { label: 'BASED', value: 'Tamil Nadu' },
              { label: 'STATUS', value: 'Open to work' },
            ].map((item) => (
              <div key={item.label}>
                <div className="t-micro" style={{ marginBottom: '8px' }}>{item.label}</div>
                <div className="font-mono" style={{ fontSize: 'var(--t-small)', color: 'var(--text-primary)' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
