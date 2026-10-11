import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LiveProject } from '../../data/liveProjects';
import Marks from '../ui/Marks';

interface ProjectDetailProps {
  project: LiveProject | null;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Lock scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0"
            style={{
              zIndex: 9998,
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 overflow-y-auto"
            style={{
              zIndex: 9999,
              width: 'min(680px, 100vw)',
              backgroundColor: 'var(--paper)',
            }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Accent bar */}
            <div
              style={{
                height: '4px',
                backgroundColor: project.accentColor,
                width: '100%',
              }}
            />

            {/* Close button */}
            <div
              className="sticky top-0 flex items-center justify-between"
              style={{
                padding: '16px 24px',
                backgroundColor: 'var(--paper)',
                borderBottom: '1px solid var(--border-subtle)',
                zIndex: 10,
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                }}
              >
                PROJECT {project.index}
              </span>
              <button
                onClick={onClose}
                className="font-mono"
                style={{
                  fontSize: 'var(--t-label)',
                  letterSpacing: '0.14em',
                  color: 'var(--text-primary)',
                  background: 'none',
                  border: '1px solid var(--border-subtle)',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'border-color 200ms',
                }}
              >
                CLOSE ✕
              </button>
            </div>

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              style={{ padding: 'clamp(24px, 4vw, 40px)' }}
            >
              {/* Title */}
              <motion.div variants={itemVariants} className="mb-8">
                <span
                  className="font-mono block mb-3"
                  style={{
                    fontSize: 'var(--t-label)',
                    letterSpacing: '0.14em',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category}
                </span>
                <h2
                  className="t-display mb-4"
                  style={{
                    color: 'var(--text-primary)',
                    lineHeight: 0.9,
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="t-lead"
                  style={{ color: 'var(--text-secondary)', maxWidth: '45ch' }}
                >
                  {project.tagline}
                </p>
              </motion.div>

              {/* Divider */}
              <motion.hr
                variants={itemVariants}
                style={{
                  border: 'none',
                  borderTop: '1px solid var(--border-subtle)',
                  marginBottom: '32px',
                }}
              />

              {/* Description */}
              <motion.div variants={itemVariants} className="mb-10">
                <span
                  className="font-mono block mb-3"
                  style={{
                    fontSize: 'var(--t-micro)',
                    letterSpacing: '0.18em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  OVERVIEW
                </span>
                <p
                  className="measure"
                  style={{
                    color: 'var(--text-primary)',
                    lineHeight: 1.7,
                  }}
                >
                  {project.fullOverview || project.shortDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                variants={itemVariants}
                className="brushed-metal relative mb-10"
                style={{
                  padding: 'clamp(16px, 3vw, 24px)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <Marks />
                <span
                  className="font-mono block mb-4"
                  style={{
                    fontSize: 'var(--t-micro)',
                    letterSpacing: '0.18em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  KEY FEATURES
                </span>
                <div className="flex flex-col gap-3">
                  {project.keyFeatures?.map((kf, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span
                        className="inline-block flex-shrink-0 mt-2"
                        style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: project.accentColor,
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <span
                          className="font-mono font-bold block"
                          style={{
                            fontSize: 'var(--t-small)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {kf.title}
                        </span>
                        <span
                          className="font-mono text-xs"
                          style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                          }}
                        >
                          {kf.description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tech stack */}
              <motion.div variants={itemVariants} className="mb-10">
                <span
                  className="font-mono block mb-4"
                  style={{
                    fontSize: 'var(--t-micro)',
                    letterSpacing: '0.18em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  TECH STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="font-mono"
                      style={{
                        fontSize: 'var(--t-label)',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        padding: '6px 12px',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: 'var(--silver)',
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Meta grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mb-10"
              >
                <div>
                  <span
                    className="font-mono block mb-2"
                    style={{
                      fontSize: 'var(--t-micro)',
                      letterSpacing: '0.18em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    YEAR
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 'var(--t-small)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {project.year}
                  </span>
                </div>
                <div>
                  <span
                    className="font-mono block mb-2"
                    style={{
                      fontSize: 'var(--t-micro)',
                      letterSpacing: '0.18em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    STATUS
                  </span>
                  <span className="font-mono flex items-center gap-2" style={{ fontSize: 'var(--t-small)', color: 'var(--text-primary)' }}>
                    <span
                      className="inline-block w-1.5 h-1.5"
                      style={{ backgroundColor: '#22C55E' }}
                      aria-hidden="true"
                    />
                    LIVE & DEPLOYED
                  </span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono inline-flex items-center gap-3 no-underline"
                  style={{
                    textDecoration: 'none',
                    fontSize: 'var(--t-label)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    backgroundColor: project.accentColor,
                    padding: '16px 32px',
                    transition: 'opacity 200ms',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  VISIT LIVE PROJECT
                  <span style={{ fontSize: '16px' }}>↗</span>
                </a>

                {/* URL display */}
                <div
                  className="font-mono mt-3 text-center"
                  style={{
                    fontSize: 'var(--t-micro)',
                    letterSpacing: '0.14em',
                    color: 'var(--text-muted)',
                    wordBreak: 'break-all',
                  }}
                >
                  {project.url}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
