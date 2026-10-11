import React from 'react';
import { motion } from 'framer-motion';
import Label from '../ui/Label';
import Rule from '../ui/Rule';

interface Language {
  name: string;
  nativeScript: string;
  level: 'comfortable' | 'learning';
  proficiency: number; // 0–100
  greeting: string;
}

const languages: Language[] = [
  {
    name: 'English',
    nativeScript: 'English',
    level: 'comfortable',
    proficiency: 95,
    greeting: 'Hello, World.',
  },
  {
    name: 'Tamil',
    nativeScript: 'தமிழ்',
    level: 'comfortable',
    proficiency: 98,
    greeting: 'வணக்கம்.',
  },
  {
    name: 'German',
    nativeScript: 'Deutsch',
    level: 'learning',
    proficiency: 25,
    greeting: 'Hallo, Welt.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Languages: React.FC = () => {
  return (
    <section
      id="languages"
      style={{
        padding: 'clamp(80px, 12vh, 168px) 0 clamp(80px, 12vh, 168px)',
      }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between mb-6">
          <Label index="07">LANGUAGES</Label>
        </div>
        <Rule weight="hair" className="mb-8" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {languages.map((lang) => (
            <LanguageRow key={lang.name} lang={lang} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const LanguageRow: React.FC<{ lang: Language }> = ({ lang }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="relative"
      variants={rowVariants}
      style={{
        borderTop: '1px solid var(--border-subtle)',
        boxShadow: '0 -1px 0 var(--border-highlight)',
        backgroundColor: hovered ? 'var(--surface-hover)' : 'transparent',
        transition: 'background-color 180ms cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '24px 0',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
        {/* Language name */}
        <div className="col-span-2">
          <span
            className="font-mono"
            style={{
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              color: hovered ? 'var(--blue)' : 'var(--text-muted)',
              transition: 'color 180ms',
            }}
          >
            {lang.name.toUpperCase()}
          </span>
        </div>

        {/* Native script with animated reveal */}
        <div className="col-span-2">
          <motion.span
            className="font-display block"
            style={{
              fontSize: 'var(--t-h2)',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
          >
            {lang.nativeScript}
          </motion.span>
        </div>

        {/* Greeting with typewriter feel */}
        <div className="col-span-3">
          <motion.span
            className="font-mono block"
            style={{
              fontSize: 'var(--t-small)',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
            }}
            animate={{ opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            "{lang.greeting}"
          </motion.span>
        </div>

        {/* Proficiency bar */}
        <div className="col-span-3">
          <div
            style={{
              height: '2px',
              backgroundColor: 'var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                backgroundColor: lang.level === 'comfortable' ? 'var(--blue)' : 'var(--text-muted)',
                transformOrigin: 'left',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: lang.proficiency / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* Status tag */}
        <div className="col-span-2 text-right">
          <span
            className="font-mono inline-flex items-center gap-2"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: lang.level === 'comfortable' ? 'var(--blue)' : 'var(--text-muted)',
            }}
          >
            {lang.level === 'comfortable' && (
              <span
                className="inline-block w-1.5 h-1.5 flex-shrink-0"
                style={{ backgroundColor: 'var(--blue)' }}
                aria-hidden="true"
              />
            )}
            {lang.level === 'learning' && (
              <motion.span
                className="inline-block w-1.5 h-1.5 flex-shrink-0"
                style={{ backgroundColor: 'var(--text-muted)' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
            )}
            {lang.level === 'comfortable' ? 'FLUENT' : 'LEARNING'}
          </span>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-2">
          <span
            className="font-mono"
            style={{
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              color: hovered ? 'var(--blue)' : 'var(--text-muted)',
              transition: 'color 180ms',
            }}
          >
            {lang.name.toUpperCase()}
          </span>
          <span
            className="font-mono inline-flex items-center gap-2"
            style={{
              fontSize: 'var(--t-micro)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: lang.level === 'comfortable' ? 'var(--blue)' : 'var(--text-muted)',
            }}
          >
            {lang.level === 'comfortable' && (
              <span
                className="inline-block w-1.5 h-1.5 flex-shrink-0"
                style={{ backgroundColor: 'var(--blue)' }}
                aria-hidden="true"
              />
            )}
            {lang.level === 'learning' && (
              <motion.span
                className="inline-block w-1.5 h-1.5 flex-shrink-0"
                style={{ backgroundColor: 'var(--text-muted)' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
            )}
            {lang.level === 'comfortable' ? 'FLUENT' : 'LEARNING'}
          </span>
        </div>

        <motion.span
          className="font-display block mb-2"
          style={{
            fontSize: 'var(--t-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
        >
          {lang.nativeScript}
        </motion.span>

        <span
          className="font-mono block mb-3"
          style={{
            fontSize: 'var(--t-small)',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
          }}
        >
          "{lang.greeting}"
        </span>

        {/* Proficiency bar */}
        <div
          style={{
            height: '2px',
            backgroundColor: 'var(--border-subtle)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              backgroundColor: lang.level === 'comfortable' ? 'var(--blue)' : 'var(--text-muted)',
              transformOrigin: 'left',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: lang.proficiency / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Languages;
