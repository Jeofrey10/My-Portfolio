import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0 0 0)' } : { clipPath: 'inset(0 0 100% 0)' }}
        transition={{
          duration: 0.52,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
