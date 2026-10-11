import React from 'react';
import Label from '../ui/Label';
import Rule from '../ui/Rule';
import ProjectVox from '../work/ProjectVox';
import ProjectPixwall from '../work/ProjectPixwall';
import ProjectIllora from '../work/ProjectIllora';
import ProjectH2S from '../work/ProjectH2S';

const SelectedWork: React.FC = () => {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(80px, 12vh, 168px) 0 0',
      }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between mb-6">
          <Label index="03">SELECTED WORK</Label>
          <span className="font-mono" style={{ fontSize: 'var(--t-label)', letterSpacing: '0.14em', color: 'var(--text-secondary)' }}>
            04 PROJECTS
          </span>
        </div>
        <Rule weight="hair" className="mb-12 lg:mb-16" />
      </div>

      {/* Each project has its own distinct component and layout */}
      <ProjectVox />

      <div className="container-site">
        <Rule weight="hair" />
      </div>

      <ProjectPixwall />

      <div className="container-site">
        <Rule weight="hair" />
      </div>

      <ProjectIllora />

      <div className="container-site">
        <Rule weight="hair" />
      </div>

      <ProjectH2S />
    </section>
  );
};

export default SelectedWork;
