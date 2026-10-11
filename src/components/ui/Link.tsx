import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const SiteLink: React.FC<LinkProps> = ({ href, children, className = '', external = false }) => {
  return (
    <a
      href={href}
      className={`group relative inline-block ${className}`}
      style={{ color: 'var(--ink)', textDecoration: 'none' }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      <span
        className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-200"
        style={{
          backgroundColor: 'var(--ink-20)',
          transform: 'scaleX(1)',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-200 scale-x-0 group-hover:scale-x-100"
        style={{
          backgroundColor: 'var(--blue)',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden="true"
      />
    </a>
  );
};

export default SiteLink;
