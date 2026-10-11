export interface SkillCategory {
  index: string;
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    index: '01',
    label: 'DEVELOPMENT',
    items: ['Python', 'JavaScript', 'TypeScript', 'C', 'React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Node.js'],
  },
  {
    index: '02',
    label: 'DATA/BACKEND',
    items: ['PostgreSQL', 'Supabase', 'SQLite'],
  },
  {
    index: '03',
    label: 'AI',
    items: ['AI APIs', 'Generative AI', 'Speech-to-Text', 'Voice AI', 'AI Integrations', 'Prompt Engineering'],
  },
  {
    index: '04',
    label: 'DESIGN',
    items: ['UI/UX', 'Figma', 'Branding', 'Visual Identity', 'Digital Design'],
  },
  {
    index: '05',
    label: 'TOOLS',
    items: ['Git', 'GitHub', 'Docker'],
  },
];
