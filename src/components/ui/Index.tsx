import React from 'react';

interface IndexProps {
  number: string;
  isHovered?: boolean;
  className?: string;
  size?: 'default' | 'large';
}

const Index: React.FC<IndexProps> = ({ number, isHovered = false, className = '', size = 'default' }) => {
  return (
    <span
      className={`t-${size === 'large' ? 'mega' : 'display'} font-display block select-none transition-colors duration-200 ${className}`}
      style={{
        fontWeight: 900,
        color: isHovered ? 'var(--blue)' : 'var(--ink-10)',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      aria-hidden="true"
    >
      {number}
    </span>
  );
};

export default Index;
