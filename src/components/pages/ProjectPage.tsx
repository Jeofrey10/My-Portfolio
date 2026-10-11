import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { liveProjects } from '../../data/liveProjects';
import type { LiveProject } from '../../data/liveProjects';
import ThemeToggle from '../layout/ThemeToggle';
import type { Theme } from '../../hooks/useTheme';
import Marks from '../ui/Marks';

interface ProjectPageProps {
  projectId: string;
  onBack: () => void;
  onNavigateProject: (id: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  projectId,
  onBack,
  onNavigateProject,
  theme,
  onToggleTheme,
}) => {
  const [copied, setCopied] = useState(false);

  const project = liveProjects.find((p) => p.id === projectId) || liveProjects[0];
  const currentIndex = liveProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    liveProjects[(currentIndex - 1 + liveProjects.length) % liveProjects.length];
  const nextProject = liveProjects[(currentIndex + 1) % liveProjects.length];

  // Scroll to top on page load or project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen"
      style={{ backgroundColor: 'var(--paper)', color: 'var(--text-primary)' }}
    >
      {/* Top sticky navigation */}
      <header
        className="sticky top-0 z-40"
        style={{
          height: '64px',
          backgroundColor: 'var(--nav-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container-site flex items-center justify-between h-full">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-mono"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '8px 0',
            }}
          >
            <span style={{ fontSize: '14px' }}>←</span>
            <span>BACK TO PORTFOLIO</span>
          </button>

          {/* Center project counter */}
          <div
            className="hidden md:flex items-center gap-2 font-mono"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="inline-block w-2 h-2"
              style={{ backgroundColor: project.accentColor }}
            />
            <span>PROJECT {project.index} OF {String(liveProjects.length).padStart(2, '0')}</span>
          </div>

          {/* Right actions: Theme toggle + direct live link */}
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono hidden sm:inline-flex items-center gap-2 no-underline"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                backgroundColor: project.accentColor,
                padding: '8px 16px',
                borderRadius: '0',
                transition: 'opacity 150ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              <span>VISIT LIVE SITE</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main page content */}
      <main className="container-site" style={{ paddingBottom: '120px' }}>
        {/* Accent strip */}
        <div
          style={{
            height: '4px',
            backgroundColor: project.accentColor,
            width: '100%',
            marginBottom: '40px',
          }}
        />

        {/* Hero Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span
              className="font-mono"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.18em',
                color: project.accentColor,
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {project.index} // {project.category}
            </span>

            {/* Status pill */}
            <span
              className="font-mono inline-flex items-center gap-2"
              style={{
                fontSize: 'var(--t-micro)',
                letterSpacing: '0.14em',
                padding: '6px 12px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--silver)',
                color: 'var(--text-primary)',
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#22C55E',
                  boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                }}
              />
              {project.status.toUpperCase()} ({project.year})
            </span>
          </div>

          <h1
            className="t-display mb-6"
            style={{
              color: 'var(--text-primary)',
              lineHeight: 0.95,
              wordBreak: 'break-word',
            }}
          >
            {project.title}
          </h1>

          <p
            className="t-lead mb-8"
            style={{
              maxWidth: '65ch',
              color: 'var(--text-secondary)',
              lineHeight: 1.45,
            }}
          >
            {project.tagline}
          </p>

          {/* Live Link Box Banner */}
          <div
            className="p-4 sm:p-6 mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
            style={{
              border: `1px solid ${project.accentColor}40`,
              backgroundColor: 'var(--silver)',
              position: 'relative',
            }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="font-mono"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                LIVE DEPLOYMENT ADDRESS
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-base sm:text-lg font-bold hover:underline"
                style={{
                  color: project.accentColor,
                  wordBreak: 'break-all',
                }}
              >
                {project.url} ↗
              </a>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handleCopyLink}
                className="font-mono text-xs uppercase px-4 py-2.5 transition-colors"
                style={{
                  backgroundColor: 'var(--paper)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  letterSpacing: '0.12em',
                }}
              >
                {copied ? '✓ COPIED LINK' : 'COPY LINK'}
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase px-6 py-2.5 no-underline flex items-center gap-2 transition-opacity"
                style={{
                  backgroundColor: project.accentColor,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '1';
                }}
              >
                <span>OPEN WEBSITE</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-5 flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--silver)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  className="font-mono text-xs uppercase mb-2"
                  style={{
                    letterSpacing: '0.14em',
                    color: 'var(--text-muted)',
                  }}
                >
                  {m.label}
                </span>
                <span
                  className="font-mono text-2xl font-bold"
                  style={{ color: project.accentColor }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Overview, Challenge, Solution */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <span
                className="font-mono block mb-3"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                }}
              >
                01 / PROJECT OVERVIEW
              </span>
              <h2 className="t-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                About the Product
              </h2>
              <p
                className="measure"
                style={{
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  fontSize: '17px',
                }}
              >
                {project.fullOverview}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--silver)',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: '3px solid #EF4444',
                }}
              >
                <span
                  className="font-mono block mb-2"
                  style={{
                    fontSize: 'var(--t-micro)',
                    letterSpacing: '0.16em',
                    color: '#EF4444',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  THE CHALLENGE
                </span>
                <p
                  className="font-mono text-sm"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}
                >
                  {project.problem}
                </p>
              </div>

              <div
                className="p-6"
                style={{
                  backgroundColor: 'var(--silver)',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: `3px solid ${project.accentColor}`,
                }}
              >
                <span
                  className="font-mono block mb-2"
                  style={{
                    fontSize: 'var(--t-micro)',
                    letterSpacing: '0.16em',
                    color: project.accentColor,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  THE ENGINEERING SOLUTION
                </span>
                <p
                  className="font-mono text-sm"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}
                >
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Interactive Preview Mockup Box */}
            <div
              className="overflow-hidden"
              style={{
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--silver)',
              }}
            >
              {/* Browser Window Header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{
                  backgroundColor: 'var(--paper)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                </div>
                <div
                  className="font-mono text-xs px-4 py-1 rounded max-w-xs truncate"
                  style={{
                    backgroundColor: 'var(--silver)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {project.url}
                </div>
                <div className="font-mono text-xs" style={{ color: project.accentColor }}>
                  SSL SECURE
                </div>
              </div>

              {/* Mockup Body Content */}
              <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center">
                <span
                  className="font-mono text-xs uppercase mb-3 px-3 py-1"
                  style={{
                    backgroundColor: `${project.accentColor}20`,
                    color: project.accentColor,
                    letterSpacing: '0.14em',
                  }}
                >
                  DEPLOYED ON VERCEL
                </span>
                <h3 className="t-h2 mb-4" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p
                  className="font-mono text-sm max-w-lg mb-8"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}
                >
                  {project.shortDescription}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase px-8 py-3.5 no-underline flex items-center gap-3"
                  style={{
                    backgroundColor: project.accentColor,
                    color: '#FFFFFF',
                    letterSpacing: '0.16em',
                    fontWeight: 600,
                  }}
                >
                  <span>LAUNCH LIVE APPLICATION</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Features, Tech Stack, Team Details */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Key Features */}
            <div
              className="p-6 lg:p-8 relative"
              style={{
                backgroundColor: 'var(--silver)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <Marks />
              <span
                className="font-mono block mb-3"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                }}
              >
                02 / ARCHITECTURE & CAPABILITIES
              </span>
              <h2 className="t-h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                Key Technical Features
              </h2>

              <div className="flex flex-col gap-6">
                {project.keyFeatures.map((kf, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span
                      className="font-mono text-xs font-bold px-2 py-1 flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${project.accentColor}25`,
                        color: project.accentColor,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4
                        className="font-mono font-bold text-sm mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {kf.title}
                      </h4>
                      <p
                        className="font-mono text-xs"
                        style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}
                      >
                        {kf.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Tech Stack breakdown */}
            <div
              className="p-6 lg:p-8"
              style={{
                backgroundColor: 'var(--silver)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span
                className="font-mono block mb-3"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                }}
              >
                03 / TECHNOLOGY STACK
              </span>
              <h2 className="t-h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                Engineered With
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3"
                    style={{
                      backgroundColor: 'var(--paper)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      className="font-mono font-bold text-xs mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {tech.name}
                    </div>
                    <div
                      className="font-mono text-[10px] uppercase"
                      style={{
                        color: 'var(--text-muted)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {tech.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team & Collaboration Section */}
            <div
              className="p-6 lg:p-8"
              style={{
                backgroundColor: 'var(--silver)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span
                className="font-mono block mb-3"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                }}
              >
                04 / TEAM & ATTRIBUTION
              </span>
              <h2 className="t-h3 mb-3" style={{ color: 'var(--text-primary)' }}>
                Collaborators & Core Team
              </h2>
              <p
                className="font-mono text-xs mb-4"
                style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}
              >
                {project.teamDetails}
              </p>
              <div
                className="font-mono text-[11px] p-3"
                style={{
                  backgroundColor: 'var(--paper)',
                  border: '1px dashed var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}
              >
                ℹ Member roles, contributions, and engineering credits will be populated here.
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation: Previous & Next Project */}
        <nav
          className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          {/* Previous */}
          <button
            onClick={() => onNavigateProject(prevProject.id)}
            className="flex items-center gap-4 text-left group w-full sm:w-auto"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
            }}
          >
            <span
              className="font-mono text-xl"
              style={{ color: 'var(--text-muted)' }}
            >
              ←
            </span>
            <div>
              <span
                className="font-mono block text-[10px] uppercase"
                style={{
                  letterSpacing: '0.16em',
                  color: 'var(--text-muted)',
                }}
              >
                PREVIOUS PROJECT
              </span>
              <span
                className="font-mono font-bold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {prevProject.title}
              </span>
            </div>
          </button>

          {/* Back to Home Button */}
          <button
            onClick={onBack}
            className="font-mono text-xs uppercase px-6 py-3"
            style={{
              background: 'none',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              letterSpacing: '0.14em',
            }}
          >
            VIEW ALL PROJECTS
          </button>

          {/* Next */}
          <button
            onClick={() => onNavigateProject(nextProject.id)}
            className="flex items-center gap-4 text-right justify-end group w-full sm:w-auto"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
            }}
          >
            <div>
              <span
                className="font-mono block text-[10px] uppercase"
                style={{
                  letterSpacing: '0.16em',
                  color: 'var(--text-muted)',
                }}
              >
                NEXT PROJECT
              </span>
              <span
                className="font-mono font-bold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {nextProject.title}
              </span>
            </div>
            <span
              className="font-mono text-xl"
              style={{ color: 'var(--text-muted)' }}
            >
              →
            </span>
          </button>
        </nav>
      </main>
    </motion.div>
  );
};

export default ProjectPage;
