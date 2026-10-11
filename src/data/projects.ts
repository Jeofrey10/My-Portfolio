export interface Project {
  index: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  role: string;
  year: string;
  fields: Record<string, string>;
}

export const projects: Project[] = [
  {
    index: '01',
    slug: 'vox-ai',
    title: 'VOX AI',
    tagline: 'Just speak. Everything runs.',
    description:
      'A voice-native retail operating system for MSMEs. Shopkeepers run billing, stock and reorders by talking — no forms, no training, no touchscreen literacy required.',
    techStack: [
      'SYSTEM / VOICE AI',
      'SPEECH-TO-TEXT',
      'INVENTORY INTELLIGENCE',
      'COMPUTER VISION',
      'IOT / EDGE',
      'RETAIL AUTOMATION',
    ],
    role: 'PRODUCT · DESIGN · FRONTEND',
    year: '2026',
    fields: {},
  },
  {
    index: '02',
    slug: 'pixwall',
    title: 'PIXWALL',
    tagline: '',
    description:
      'A poster marketplace built like a product, not a storefront. Browse, preview at scale, buy. The whole experience is the point.',
    techStack: [],
    role: '',
    year: '',
    fields: {
      FIELD: 'E-COMMERCE · PRODUCT DESIGN',
      BUILD: 'REACT · TAILWIND · SUPABASE',
      SCOPE: 'IDENTITY · UI/UX · FRONTEND',
    },
  },
  {
    index: '03',
    slug: 'illora-ai',
    title: 'ILLORA',
    tagline: 'Autonomous Enterprise Intelligence',
    description:
      "An agent system that reads a company's own signals and decides what to do about them. Sales, demand, manufacturing, marketing — one layer of reasoning across all of it. The long-term question it's chasing: how much of a company can actually run itself?",
    techStack: [],
    role: '',
    year: '',
    fields: {
      CONCEPT: 'IN DEVELOPMENT',
      SCOPE: 'AI AGENTS · DECISION SUPPORT · FORECASTING',
    },
  },
  {
    index: '04',
    slug: 'h2s-safety',
    title: 'H₂S SAFETY',
    tagline: '',
    description:
      'A wearable-scale sensor that makes hydrogen sulfide exposure visible before it\'s dangerous. Reads the environment continuously and warns in colour, not in numbers.',
    techStack: [],
    role: '',
    year: '',
    fields: {
      MCU: 'ESP32-S3',
      SENSING: 'RGB · ENVIRONMENTAL · SHT21',
      DISPLAY: 'OLED + RGB STATUS INDICATOR',
      OUTPUT: 'COLOUR-CODED EXPOSURE STATE',
      DOMAIN: 'EMBEDDED · IOT · SAFETY',
      STATUS: 'PROTOTYPE',
    },
  },
];
