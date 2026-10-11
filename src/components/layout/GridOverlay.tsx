import React from 'react';
import { useScrollY } from '../../hooks/useScrollProgress';

const GridOverlay: React.FC = () => {
  const scrollY = useScrollY();
  const opacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity, zIndex: 0 }}
      aria-hidden="true"
    >
      {/* 12-column vertical grid lines */}
      <div
        className="absolute inset-0 grid-12 h-full"
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          paddingLeft: 'var(--margin-desktop)',
          paddingRight: 'var(--margin-desktop)',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full"
            style={{
              borderRight: '1px solid var(--ink-06)',
            }}
          />
        ))}
      </div>
      {/* Horizontal rules at 22% and 78% */}
      <div
        className="absolute w-full"
        style={{
          top: '22%',
          borderTop: '1px solid var(--ink-06)',
        }}
      />
      <div
        className="absolute w-full"
        style={{
          top: '78%',
          borderTop: '1px solid var(--ink-06)',
        }}
      />
    </div>
  );
};

export default GridOverlay;
