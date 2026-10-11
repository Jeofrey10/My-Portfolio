import React from 'react';
import { motion } from 'framer-motion';
import GridOverlay from '../layout/GridOverlay';

const revealVariant = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: (i: number) => ({
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 0.52,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative"
      style={{
        height: '100svh',
        minHeight: '600px',
        overflowX: 'clip',
        backgroundColor: 'var(--paper)',
      }}
    >
      <GridOverlay />

      {/* Debossed PORTFOLIO background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none deboss"
        style={{
          fontSize: 'var(--t-mega)',
          fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 900,
          lineHeight: 0.82,
          letterSpacing: '-0.045em',
          writingMode: 'vertical-rl',
          transform: 'translateY(-50%) translateX(30%)',
          opacity: 0.7,
        }}
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="container-site relative h-full flex flex-col justify-between" style={{ paddingTop: '96px', paddingBottom: '48px', zIndex: 1 }}>
        {/* Wordmark */}
        <div>
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={revealVariant}
          >
            <h1
              className="t-mega"
              style={{
                color: 'var(--ink-black)',
                lineHeight: 0.80,
                letterSpacing: '-0.05em',
              }}
            >
              <span className="block">JEO</span>
            </h1>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={revealVariant}
          >
            <span
              className="t-mega block"
              style={{
                color: 'var(--ink-black)',
                lineHeight: 0.80,
                letterSpacing: '-0.05em',
              }}
              aria-hidden="true"
            >
              <span className="block" style={{ paddingLeft: 'calc(100% / 12)' }}>FREY</span>
            </span>
          </motion.div>
        </div>

        {/* Right rail — mono metadata */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="absolute right-0 top-1/4 hidden lg:block"
          style={{
            width: 'calc(4 * (100% / 12))',
            paddingRight: 'var(--margin-desktop)',
          }}
        >
          <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', lineHeight: 2.2 }}>
            <div>01 / CREATIVE DEVELOPER</div>
            <div>02 / AI  ×  DESIGN  ×  PRODUCT</div>
            <hr className="etched-rule my-3" />
            <div>3RD YEAR · B.E. CSE</div>
            <div>SETHU INSTITUTE OF TECHNOLOGY</div>
            <hr className="etched-rule my-3" />
            <div>LOCATION / TAMIL NADU, INDIA</div>
            <div>STATUS  / BUILDING</div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          {/* Statement with blue rule */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="flex items-start gap-4 w-full lg:max-w-lg"
          >
            {/* Blue vertical rule */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              style={{
                width: '4px',
                height: '88px',
                backgroundColor: 'var(--blue)',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p className="t-lead" style={{ color: 'var(--text-primary)', maxWidth: '40ch' }}>
              Building digital products where technology meets visual thinking.
            </p>
          </motion.div>

          {/* Mobile metadata */}
          <div className="lg:hidden font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', lineHeight: 2.2 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <div>01 / CREATIVE DEVELOPER</div>
              <div>3RD YEAR · B.E. CSE</div>
              <div>02 / AI × DESIGN × PRODUCT</div>
              <div>SETHU INSTITUTE OF TECHNOLOGY</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={revealVariant}
            className="hidden lg:flex flex-col items-end"
          >
            <span className="t-micro" style={{ marginBottom: '8px' }}>SCROLL</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '1px',
                height: '24px',
                backgroundColor: 'var(--text-muted)',
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
