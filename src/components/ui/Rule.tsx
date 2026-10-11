import React from 'react';

interface RuleProps {
  weight?: 'hair' | 'ink' | 'accent';
  width?: string;
  className?: string;
}

const Rule: React.FC<RuleProps> = ({ weight = 'hair', width = '100%', className = '' }) => {
  const styles: Record<string, React.CSSProperties> = {
    hair: {
      borderTop: '1px solid var(--border-subtle)',
      boxShadow: '0 1px 0 var(--border-highlight)',
    },
    ink: {
      borderTop: '1px solid var(--ink)',
    },
    accent: {
      borderTop: '4px solid var(--blue)',
    },
  };

  return (
    <hr
      className={className}
      style={{
        border: 'none',
        width,
        ...styles[weight],
      }}
      aria-hidden="true"
    />
  );
};

export default Rule;
