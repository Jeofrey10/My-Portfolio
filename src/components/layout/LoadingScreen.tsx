import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal'>('loading');

  useEffect(() => {
    // Simulate loading progress with accelerating speed
    let current = 0;
    const interval = setInterval(() => {
      const increment = current < 40 ? 2 : current < 70 ? 3 : current < 90 ? 1.5 : 0.8;
      current = Math.min(current + increment, 100);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        // Start reveal phase
        setTimeout(() => {
          setPhase('reveal');
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' ? null : null}
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center"
        style={{
          zIndex: 99999,
          backgroundColor: 'var(--paper)',
        }}
        exit={{
          clipPath: 'inset(0 0 100% 0)',
        }}
        transition={{
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        }}
        animate={phase === 'reveal' ? { clipPath: 'inset(0 0 100% 0)' } : { clipPath: 'inset(0 0 0 0)' }}
      >
        {/* Background text */}
        <div
          className="absolute pointer-events-none select-none deboss"
          style={{
            fontSize: 'clamp(6rem, 20vw, 16rem)',
            fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: 900,
            lineHeight: 0.82,
            letterSpacing: '-0.045em',
            opacity: 0.5,
          }}
          aria-hidden="true"
        >
          JM
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8" style={{ width: 'min(280px, 80vw)' }}>
          {/* Wordmark */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-block w-2 h-2 flex-shrink-0"
              style={{ backgroundColor: 'var(--blue)' }}
              aria-hidden="true"
            />
            <span
              className="font-display"
              style={{
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '-0.02em',
                color: 'var(--ink-black)',
              }}
            >
              JEOFREY M.
            </span>
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: '100%' }}>
            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--ink-10)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  backgroundColor: 'var(--blue)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          </div>

          {/* Bottom row: status + percentage */}
          <div className="flex items-center justify-between w-full">
            <motion.span
              className="font-mono"
              style={{
                fontSize: 'var(--t-micro)',
                letterSpacing: '0.18em',
                color: 'var(--ink-40)',
                textTransform: 'uppercase',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {progress < 100 ? 'LOADING' : 'READY'}
            </motion.span>

            <motion.span
              className="font-mono"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.14em',
                color: 'var(--ink)',
                fontVariantNumeric: 'tabular-nums',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {String(progress).padStart(3, '0')}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
