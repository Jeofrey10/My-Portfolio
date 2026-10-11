import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import type { Theme } from '../../hooks/useTheme';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', index: '01' },
  { label: 'PROJECTS', href: '#projects', index: '02' },
  { label: 'WORK', href: '#work', index: '03' },
  { label: 'SKILLS', href: '#skills', index: '04' },
  { label: 'LANGUAGES', href: '#languages', index: '05' },
  { label: 'CONTACT', href: '#contact', index: '06' },
];

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'work', 'skills', 'languages', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // IST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000 - now.getTimezoneOffset() * 60 * 1000));
      const h = ist.getUTCHours().toString().padStart(2, '0');
      const m = ist.getUTCMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: '64px',
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'border-color 300ms, background-color 400ms',
      }}
    >
      <nav className="container-site flex items-center justify-between h-full" aria-label="Main navigation">
        {/* Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2 no-underline"
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
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
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center" style={{ gap: '24px' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-mono no-underline"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                textDecoration: 'none',
                paddingBottom: '4px',
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--blue)',
                  }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </a>
          ))}

          {/* Theme toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* IST clock */}
          <span
            className="font-mono"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.14em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            IND · {time} IST
          </span>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="font-mono"
            style={{
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 flex flex-col justify-center lg:hidden"
            style={{
              top: '64px',
              backgroundColor: 'var(--paper)',
              zIndex: 49,
              paddingLeft: 'var(--margin-mobile)',
              paddingRight: 'var(--margin-mobile)',
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-6 no-underline"
                style={{
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: 'var(--t-label)',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.14em',
                    minWidth: '32px',
                  }}
                >
                  {item.index}
                </span>
                <span
                  className="t-h2"
                  style={{ color: 'var(--ink)' }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
