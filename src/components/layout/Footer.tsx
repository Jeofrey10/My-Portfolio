import React from 'react';

const Footer: React.FC = () => {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'var(--paper)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(32px, 5vw, 48px) 0 clamp(24px, 3vw, 32px)',
      }}
    >
      {/* Debossed background text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none deboss t-mega whitespace-nowrap"
        style={{
          fontSize: 'clamp(4rem, 18vw, 14rem)',
          opacity: 0.6,
          lineHeight: 0.82,
          transform: 'translateX(-50%) translateY(60%)',
        }}
        aria-hidden="true"
      >
        JEOFREY
      </div>

      <div className="container-site relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left: Wordmark */}
          <div>
            <div className="flex items-center gap-2 mb-3">
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
            </div>
            <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              CREATIVE DEVELOPER<br />
              AI × DESIGN × PRODUCT
            </div>
          </div>

          {/* Center: Nav repeat */}
          <div className="flex flex-wrap items-start gap-4 lg:gap-6">
            {['WORK', 'ABOUT', 'EXPERIMENTS', 'SKILLS', 'LANGUAGES', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono no-underline"
                style={{
                  fontSize: 'var(--t-label)',
                  letterSpacing: '0.14em',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Copyright & back to top */}
          <div className="text-left lg:text-right">
            <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              © 2026
            </div>
            <div className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              TAMIL NADU, INDIA
            </div>
            <a
              href="#top"
              className="font-mono inline-block no-underline"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.14em',
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
              onClick={handleBackToTop}
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
