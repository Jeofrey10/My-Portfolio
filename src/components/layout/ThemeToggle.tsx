import React from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex items-center justify-center"
      style={{
        width: '36px',
        height: '36px',
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'border-color 200ms',
      }}
    >
      {/* Sun icon */}
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute' }}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </motion.svg>

      {/* Moon icon */}
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute' }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </motion.svg>
    </button>
  );
};

export default ThemeToggle;
