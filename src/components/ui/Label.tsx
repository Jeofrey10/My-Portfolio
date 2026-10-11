import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  index?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, index, className = '' }) => {
  return (
    <span className={`t-label inline-flex items-center gap-2 ${className}`}>
      {index && (
        <span
          className="inline-block w-2 h-2 flex-shrink-0"
          style={{ backgroundColor: 'var(--blue)' }}
          aria-hidden="true"
        />
      )}
      {index && <span>{index} /</span>}
      <span>{children}</span>
    </span>
  );
};

export default Label;
