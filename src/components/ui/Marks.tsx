import React from 'react';

interface MarksProps {
  className?: string;
}

const Marks: React.FC<MarksProps> = ({ className = '' }) => {
  const markStyle: React.CSSProperties = {
    position: 'absolute',
    width: '12px',
    height: '12px',
    pointerEvents: 'none',
  };

  const lineColor = 'var(--ink-20)';

  return (
    <>
      {/* Top-left */}
      <span className={className} style={{ ...markStyle, top: 0, left: 0 }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M0 12V0H12" stroke={lineColor} strokeWidth="1" />
        </svg>
      </span>
      {/* Top-right */}
      <span className={className} style={{ ...markStyle, top: 0, right: 0 }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M12 12V0H0" stroke={lineColor} strokeWidth="1" />
        </svg>
      </span>
      {/* Bottom-left */}
      <span className={className} style={{ ...markStyle, bottom: 0, left: 0 }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M0 0V12H12" stroke={lineColor} strokeWidth="1" />
        </svg>
      </span>
      {/* Bottom-right */}
      <span className={className} style={{ ...markStyle, bottom: 0, right: 0 }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M12 0V12H0" stroke={lineColor} strokeWidth="1" />
        </svg>
      </span>
    </>
  );
};

export default Marks;
