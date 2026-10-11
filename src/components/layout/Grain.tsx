import React from 'react';

const Grain: React.FC = () => {
  return (
    <svg
      className="grain-overlay"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="g">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.82"
          numOctaves={3}
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#g)" />
    </svg>
  );
};

export default Grain;
