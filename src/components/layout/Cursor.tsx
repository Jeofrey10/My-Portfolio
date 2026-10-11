import React from 'react';
import { useCursor } from '../../hooks/useCursor';

interface CursorProps {
  variant?: 'default' | 'link' | 'project' | 'inverted';
}

const Cursor: React.FC = () => {
  const { cursor, isVisible } = useCursor();

  const hasFinePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!hasFinePointer || prefersReduced) return null;

  const sizeMap = {
    default: 8,
    link: 32,
    project: 56,
    inverted: 8,
  };

  const size = sizeMap[cursor.variant];
  const isRing = cursor.variant === 'link';
  const isProject = cursor.variant === 'project';
  const isInverted = cursor.variant === 'inverted';

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        zIndex: 10001,
        left: cursor.x,
        top: cursor.y,
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: isRing
          ? 'transparent'
          : isProject
          ? 'var(--blue)'
          : isInverted
          ? 'var(--paper)'
          : 'var(--ink)',
        border: isRing ? '1px solid var(--ink)' : 'none',
        mixBlendMode: cursor.variant === 'default' ? 'difference' : 'normal',
        opacity: isVisible ? 1 : 0,
        transition: 'width 200ms, height 200ms, background-color 200ms, border 200ms, opacity 150ms',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isProject && (
        <span
          className="font-mono"
          style={{
            fontSize: '9px',
            color: 'var(--paper)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          VIEW
        </span>
      )}
    </div>
  );
};

export default Cursor;
