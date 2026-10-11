import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PHONE, EMAIL, LINKEDIN_URL, GITHUB_URL } from '../../data/contact';

const CONTACT_LINKS = [
  { label: 'PHONE', value: PHONE, href: `tel:+91${PHONE}` },
  { label: 'EMAIL', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'LINKEDIN', value: LINKEDIN_URL, href: LINKEDIN_URL },
  { label: 'GITHUB', value: GITHUB_URL, href: GITHUB_URL },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative"
      style={{
        backgroundColor: '#080808',
        padding: 'clamp(96px, 14vh, 200px) 0 clamp(64px, 10vh, 128px)',
        overflowX: 'clip',
      }}
    >
      {/* Grain overlay with screen blend for dark section */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1, opacity: 0.05, mixBlendMode: 'screen' }}
        aria-hidden="true"
      >
        <filter id="g-dark">
          <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#g-dark)" />
      </svg>

      {/* Rotated AVAILABLE strip */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <span
          className="font-mono block"
          style={{
            fontSize: 'var(--t-micro)',
            letterSpacing: '0.18em',
            color: 'rgba(244,244,240,0.2)',
            writingMode: 'vertical-rl',
            textTransform: 'uppercase',
          }}
        >
          AVAILABLE / 2026
        </span>
      </div>

      <div className="container-site relative" style={{ zIndex: 2 }}>
        {/* Editorial headline */}
        <div className="mb-12 lg:mb-20">
          <h2
            className="t-mega block"
            style={{
              WebkitTextStroke: '1px #F4F4F0',
              color: 'transparent',
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
            }}
          >
            HAVE AN IDEA?
          </h2>
          <span
            className="t-display block mt-2"
            style={{
              color: '#F4F4F0',
              lineHeight: 0.85,
              letterSpacing: '-0.045em',
              fontWeight: 900,
            }}
          >
            LET'S MAKE IT REAL.
          </span>
        </div>

        {/* Contact ledger */}
        <div className="mb-12">
          {CONTACT_LINKS.map((link) => (
            <ContactRow key={link.label} link={link} />
          ))}
        </div>

        {/* Availability note */}
        <p
          className="font-mono"
          style={{
            fontSize: 'var(--t-label)',
            letterSpacing: '0.14em',
            color: 'rgba(244,244,240,0.4)',
            textTransform: 'uppercase',
          }}
        >
          Currently open to internships, freelance and collaborations.
        </p>
      </div>
    </section>
  );
};

const ContactRow: React.FC<{ link: typeof CONTACT_LINKS[0] }> = ({ link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      className="group block relative no-underline"
      style={{
        textDecoration: 'none',
        borderTop: '1px solid rgba(244,244,240,0.1)',
        padding: '20px 0',
      }}
      target={link.label !== 'EMAIL' && link.label !== 'PHONE' ? '_blank' : undefined}
      rel={link.label !== 'EMAIL' && link.label !== 'PHONE' ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Blue rule wipe */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '1px',
          backgroundColor: 'var(--blue)',
          transformOrigin: 'left',
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
          <span
            className="font-mono flex-shrink-0"
            style={{
              fontSize: 'var(--t-label)',
              letterSpacing: '0.14em',
              color: 'rgba(244,244,240,0.4)',
              minWidth: '64px',
            }}
          >
            {link.label}
          </span>
          <motion.span
            className="font-mono"
            style={{
              fontSize: 'var(--t-small)',
              color: '#F4F4F0',
              wordBreak: 'break-all',
            }}
            animate={{ x: hovered ? 8 : 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {link.value}
          </motion.span>
        </div>
        <motion.span
          className="font-mono flex-shrink-0"
          style={{
            fontSize: 'var(--t-label)',
            color: hovered ? 'var(--blue)' : 'rgba(244,244,240,0.4)',
            transition: 'color 200ms',
          }}
        >
          ↗
        </motion.span>
      </div>
    </a>
  );
};

export default Contact;
