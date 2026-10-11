import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Label from '../ui/Label';
import Rule from '../ui/Rule';
import { liveProjects } from '../../data/liveProjects';
import ProjectDetail from './ProjectDetail';
import type { LiveProject } from '../../data/liveProjects';

interface LiveProjectsProps {
  onOpenProjectPage?: (id: string) => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const LiveProjects: React.FC<LiveProjectsProps> = ({ onOpenProjectPage }) => {
  const [selectedProject, setSelectedProject] = useState<LiveProject | null>(null);

  const handleCardClick = (project: LiveProject) => {
    if (onOpenProjectPage) {
      onOpenProjectPage(project.id);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section
        id="projects"
        style={{
          padding: 'clamp(96px, 14vh, 200px) 0 clamp(80px, 12vh, 168px)',
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between mb-6">
            <Label index="02">LIVE PROJECTS</Label>
            <span
              className="font-mono"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.14em',
                color: 'var(--text-secondary)',
              }}
            >
              {String(liveProjects.length).padStart(2, '0')} DEPLOYED PRODUCTS
            </span>
          </div>
          <Rule weight="hair" className="mb-4" />

          <p
            className="t-lead mb-12 lg:mb-16"
            style={{ maxWidth: '62ch', color: 'var(--text-primary)' }}
          >
            Live production applications and systems engineered with my team. Each platform features
            full web architecture, responsive interfaces, and real deployed URLs.
          </p>

          {/* Project cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {liveProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => handleCardClick(project)}
                onOpenPage={() => {
                  if (onOpenProjectPage) onOpenProjectPage(project.id);
                  else setSelectedProject(project);
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fallback detail overlay if not using full-page route */}
      {!onOpenProjectPage && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

const ProjectCard: React.FC<{
  project: LiveProject;
  onSelect: () => void;
  onOpenPage: () => void;
}> = ({ project, onSelect, onOpenPage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="relative group flex flex-col justify-between"
      style={{
        border: '1px solid var(--border-subtle)',
        backgroundColor: hovered ? 'var(--surface-hover)' : 'var(--silver)',
        transition: 'background-color 200ms, border-color 200ms',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent top bar */}
      <motion.div
        style={{
          height: '3px',
          backgroundColor: project.accentColor,
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div
        style={{ padding: 'clamp(20px, 3vw, 32px)' }}
        className="flex-1 flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span
                className="font-mono block mb-2"
                style={{
                  fontSize: 'var(--t-micro)',
                  letterSpacing: '0.18em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {project.index} // {project.category}
              </span>
              <h3
                className="t-h2 cursor-pointer hover:underline"
                style={{ color: 'var(--text-primary)' }}
                onClick={onOpenPage}
              >
                {project.title}
              </h3>
            </div>

            {/* Direct External URL Link */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex items-center gap-1.5 no-underline flex-shrink-0 px-2.5 py-1"
              style={{
                fontSize: 'var(--t-micro)',
                letterSpacing: '0.12em',
                color: hovered ? '#FFFFFF' : project.accentColor,
                backgroundColor: hovered ? project.accentColor : 'transparent',
                border: `1px solid ${project.accentColor}`,
                textTransform: 'uppercase',
                transition: 'all 200ms',
              }}
              title={`Direct redirect to ${project.url}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span>LIVE SITE</span>
              <span>↗</span>
            </a>
          </div>

          {/* Tagline */}
          <p
            className="font-mono mb-4"
            style={{
              fontSize: 'var(--t-small)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {project.tagline}
          </p>

          {/* Live Link Address Preview */}
          <div
            className="font-mono mb-4 px-3 py-2 text-xs truncate"
            style={{
              backgroundColor: 'var(--paper)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ color: project.accentColor, marginRight: '8px' }}>URL:</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
              className="hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {project.url}
            </a>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="font-mono"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  padding: '4px 8px',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--paper)',
                }}
              >
                {tech.name}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span
                className="font-mono"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  color: 'var(--text-muted)',
                  padding: '4px 8px',
                }}
              >
                +{project.techStack.length - 4} MORE
              </span>
            )}
          </div>
        </div>

        {/* Bottom row with action buttons */}
        <div
          className="flex items-center justify-between mt-4 pt-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <span
            className="font-mono flex items-center gap-2"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#22C55E' }}
            />
            {project.year} · DEPLOYED
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPage}
              className="font-mono flex items-center gap-1"
              style={{
                fontSize: 'var(--t-label)',
                letterSpacing: '0.14em',
                color: hovered ? project.accentColor : 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'color 200ms',
                textTransform: 'uppercase',
              }}
            >
              <span>CASE STUDY PAGE</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveProjects;
