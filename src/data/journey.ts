export interface JourneyEntry {
  year: string;
  entry: string;
  sub?: string;
  tag: string;
  isCurrent?: boolean;
}

export const journey: JourneyEntry[] = [
  {
    year: 'CURRENT',
    entry: 'B.E. Computer Science & Engineering',
    sub: 'Sethu Institute of Technology',
    tag: 'EDUCATION',
    isCurrent: true,
  },
  {
    year: '2026',
    entry: 'ILLORA AI — Autonomous enterprise intelligence',
    tag: 'PRODUCT',
  },
  {
    year: '2026',
    entry: 'VOX AI — Voice-native retail OS',
    tag: 'PRODUCT',
  },
  {
    year: '2026',
    entry: 'AI + hardware builds',
    tag: 'BUILD',
  },
  {
    year: '2025 — 2026',
    entry: 'Frontend, UI/UX and creative work',
    tag: 'PRACTICE',
  },
];
