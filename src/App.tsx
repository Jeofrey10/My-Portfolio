import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Grain from './components/layout/Grain';
import LoadingScreen from './components/layout/LoadingScreen';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import LiveProjects from './components/sections/LiveProjects';
import SelectedWork from './components/sections/SelectedWork';
import Skills from './components/sections/Skills';
import Experiments from './components/sections/Experiments';
import Journey from './components/sections/Journey';
import Languages from './components/sections/Languages';
import Contact from './components/sections/Contact';
import ProjectPage from './components/pages/ProjectPage';
import { useTheme } from './hooks/useTheme';

const MARQUEE_TEXT = 'FRONTEND · AI · UI/UX · PRODUCT · HARDWARE · BRANDING · ';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  // Track active individual project page
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/project/')) {
      return hash.replace('#/project/', '');
    }
    return null;
  });

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Listen to hash changes for browser history back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        setActiveProjectId(hash.replace('#/project/', ''));
      } else {
        setActiveProjectId(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProjectPage = (id: string) => {
    window.location.hash = `#/project/${id}`;
    setActiveProjectId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveProjectId(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigateProject = (id: string) => {
    window.location.hash = `#/project/${id}`;
    setActiveProjectId(id);
  };

  // Smooth scroll with Lenis — only on homepage when loading is complete
  useEffect(() => {
    if (loading || activeProjectId) return;

    const lenis = new Lenis({
      lerp: 0.09,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading, activeProjectId]);

  return (
    <>
      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Skip to content */}
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <Grain />

      {activeProjectId ? (
        /* Dedicated Individual Project Page */
        <>
          <ProjectPage
            projectId={activeProjectId}
            onBack={handleBackToHome}
            onNavigateProject={handleNavigateProject}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
          <Footer />
        </>
      ) : (
        /* Main Portfolio Experience */
        <>
          <Navbar theme={theme} onToggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />
            <LiveProjects onOpenProjectPage={handleOpenProjectPage} />
            <SelectedWork />

            {/* Marquee strip between Work and Skills */}
            <div
              className="overflow-hidden"
              style={{
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '12px 0',
                backgroundColor: 'var(--paper)',
              }}
              aria-hidden="true"
            >
              <div
                className="flex whitespace-nowrap font-mono"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  animation: 'marquee 40s linear infinite',
                }}
              >
                <span className="flex-shrink-0">{MARQUEE_TEXT.repeat(8)}</span>
                <span className="flex-shrink-0">{MARQUEE_TEXT.repeat(8)}</span>
              </div>
            </div>

            <Skills />
            <Experiments />
            <Journey />
            <Languages />
            <Contact />
          </main>

          <Footer />
        </>
      )}

      {/* Marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (hover: hover) {
          .marquee-strip:hover .marquee-content {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(0); }
          }
        }
      `}</style>
    </>
  );
};

export default App;
