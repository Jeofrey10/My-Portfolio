export interface LiveProject {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  url: string;
  year: string;
  status: string;
  accentColor: string;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  techStack: {
    name: string;
    category: 'Frontend' | 'Backend / AI' | 'Styling / UI' | 'Architecture' | 'Performance';
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  teamDetails: string;
}

export const liveProjects: LiveProject[] = [
  {
    id: 'voxbill',
    index: '01',
    title: 'VOXBILL AI',
    tagline: 'Voice-Powered Point-of-Sale & Billing Ecosystem',
    category: 'AI · VOICE POS · RETAIL TECH',
    url: 'https://voxbill-2-0.vercel.app/',
    year: '2026',
    status: 'Live & Deployed',
    accentColor: '#3B82F6',
    shortDescription:
      'A voice-first intelligent billing and POS web app engineered for fast-paced retail shops. Cashiers can speak items, quantities, and discounts in natural language (including Tamil) to generate instant itemized invoices.',
    fullOverview:
      'VoxBill AI eliminates traditional manual keystroke billing bottlenecks in busy retail stores, supermarkets, and local grocery markets. By integrating high-accuracy voice parsing with real-time bill calculations, shopkeepers can create bills by simply speaking naturally. The platform operates as a modern Progressive Web App (PWA) with multi-language voice models, offline resilient caching, and a real-time analytics hub.',
    problem:
      'Local retail shopkeepers spend 2-4 minutes manually searching product codes, typing quantities, and computing discounts per customer, causing checkout lines to stall during peak rush hours.',
    solution:
      'Engineered an instant voice-activated speech recognition pipeline that parses spoken phrases into structured cart items in milliseconds, complete with automated GST calculation, customer credit tracking, and instant thermal/PDF receipt generation.',
    keyFeatures: [
      {
        title: 'Voice-First Cart Generation',
        description: 'Speak item names, quantities, and rates naturally to assemble complete bills in seconds.',
      },
      {
        title: 'Multilingual & Regional Tamil (தமிழ்) Support',
        description: 'Engineered specifically for Indian retail contexts with native bilingual voice and UI switching.',
      },
      {
        title: 'Offline-Capable PWA',
        description: 'Installs as a native-feeling app on mobile, tablet, or desktop terminals with robust offline operation.',
      },
      {
        title: 'AI Revenue & Inventory Intelligence',
        description: 'Predictive analytics showing fast-moving stock, low inventory alerts, and daily sales trends.',
      },
      {
        title: 'Customer Ledger & Credit History',
        description: 'Integrated customer balance bookkeeping with instant WhatsApp and PDF receipt sharing.',
      },
    ],
    techStack: [
      { name: 'Next.js 15', category: 'Frontend' },
      { name: 'React 19', category: 'Frontend' },
      { name: 'TypeScript', category: 'Architecture' },
      { name: 'Web Speech API', category: 'Backend / AI' },
      { name: 'Tailwind CSS', category: 'Styling / UI' },
      { name: 'IndexedDB / PWA', category: 'Performance' },
    ],
    metrics: [
      { label: 'Billing Speedup', value: '3.8x Faster' },
      { label: 'Voice Accuracy', value: '98.4%' },
      { label: 'Device Support', value: 'Mobile + POS' },
      { label: 'Offline Ready', value: '100% PWA' },
    ],
    teamDetails: 'Created by Jeofrey M. and development team. Detailed member roles will be listed shortly.',
  },
  {
    id: 'illora',
    index: '02',
    title: 'ILLORA CONCEPTS AI',
    tagline: 'Autonomous AI Startup Generator & Venture Architect',
    category: 'AI · VENTURE DESIGN · SAAS',
    url: 'https://illora-ai.vercel.app/',
    year: '2026',
    status: 'Live & Deployed',
    accentColor: '#8B5CF6',
    shortDescription:
      'An intelligent ideation engine that analyzes a founder’s core technical skills, market headwinds, and industry gaps to synthesize validated, execution-ready startup concepts.',
    fullOverview:
      'Illora Concepts AI converts abstract founder expertise into structured, viable business ventures. By combining natural language understanding with market opportunity vectors, the system generates comprehensive startup dossiers including value propositions, target personas, revenue mechanisms, go-to-market strategies, and tech architecture recommendations.',
    problem:
      'Aspiring developers and founders often struggle to identify market-validated startup ideas that align with their distinct technical skills, resulting in months wasted building products nobody wants.',
    solution:
      'An AI venture synthesis pipeline that analyzes user skill trees and real-world market voids to construct 360-degree startup canvases complete with competitive moat strategies and 90-day execution blueprints.',
    keyFeatures: [
      {
        title: 'Skill-to-Opportunity Mapping',
        description: 'Maps technical proficiencies and passions into vetted, high-growth startup opportunities.',
      },
      {
        title: 'Automated Business Model Canvas',
        description: 'Synthesizes customer segments, revenue streams, unit economics, and key channels automatically.',
      },
      {
        title: 'Moat & Defensive Positioning',
        description: 'Formulates unique competitive advantages against incumbents and existing market players.',
      },
      {
        title: 'Actionable 90-Day MVP Blueprint',
        description: 'Step-by-step technical milestone roadmap from prototype to initial customer acquisition.',
      },
      {
        title: 'Sci-Fi Futuristic Interface',
        description: 'Immersive visual aesthetics styled with Space Grotesk, Orbitron typography, and neon glassmorphism.',
      },
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Vite', category: 'Performance' },
      { name: 'TypeScript', category: 'Architecture' },
      { name: 'Generative AI LLM', category: 'Backend / AI' },
      { name: 'Framer Motion', category: 'Styling / UI' },
      { name: 'Custom Design System', category: 'Styling / UI' },
    ],
    metrics: [
      { label: 'Idea Generation Time', value: '< 10 Sec' },
      { label: 'Canvas Sections', value: '9 Segments' },
      { label: 'Aesthetic Score', value: 'Cyberpunk' },
      { label: 'Target Alignment', value: 'Founder-Fit' },
    ],
    teamDetails: 'Created by Jeofrey M. and development team. Detailed member roles will be listed shortly.',
  },
  {
    id: 'studyai',
    index: '03',
    title: 'STUDY AI',
    tagline: 'Adaptive AI University Study Assistant & Exam Predictor',
    category: 'AI · EDTECH · ADAPTIVE LEARNING',
    url: 'https://study-ai-ruby-nine.vercel.app/',
    year: '2026',
    status: 'Live & Deployed',
    accentColor: '#10B981',
    shortDescription:
      'An intelligent tutoring platform for university students providing syllabus-aligned study roadmaps, recurring exam question predictions, and adaptive learning paths.',
    fullOverview:
      'Study AI is designed specifically for university students facing demanding STEM and engineering curricula. The platform deconstructs dense academic modules into manageable study sprints, predicts high-probability exam topics from past-paper patterns, and dynamically adapts difficulty based on user test results.',
    problem:
      'Students preparing for university semester exams often suffer from information overload, inefficient study methods, and inability to identify the highest-yielding topics in vast syllabi.',
    solution:
      'Created an AI-driven study planner that ingests course syllabi, predicts exam focus areas using historical trends, and delivers structured flashcards, concept breakdowns, and timed mock assessments.',
    keyFeatures: [
      {
        title: 'Predictive Exam Modeling',
        description: 'Identifies frequently examined concepts and marks distribution trends across university semesters.',
      },
      {
        title: 'Adaptive Spaced Repetition',
        description: 'Intelligent flashcard review intervals tailored to each student’s retention speed.',
      },
      {
        title: 'Concept Breakdown Engine',
        description: 'Converts complex formulas, algorithms, and technical theory into clear, digestible explanations.',
      },
      {
        title: 'Interactive Mock Assessments',
        description: 'Timed practice exams with instant rubric-based grading and personalized mistake analysis.',
      },
      {
        title: 'Distraction-Free Focus Dashboard',
        description: 'Clean, soothing interface built to maintain focus during long revision sessions.',
      },
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Vite', category: 'Performance' },
      { name: 'TypeScript', category: 'Architecture' },
      { name: 'Adaptive AI APIs', category: 'Backend / AI' },
      { name: 'Tailwind CSS', category: 'Styling / UI' },
      { name: 'KaTeX / Markdown', category: 'Styling / UI' },
    ],
    metrics: [
      { label: 'Study Efficiency', value: '+45%' },
      { label: 'Question Bank', value: '1,000+ Topics' },
      { label: 'Retention Boost', value: '2.4x' },
      { label: 'Student Focus', value: 'Zero Fluff' },
    ],
    teamDetails: 'Created by Jeofrey M. and development team. Detailed member roles will be listed shortly.',
  },
  {
    id: 'd9w',
    index: '04',
    title: 'D9W',
    tagline: 'Digital Platform for D9W German Language Institution',
    category: 'EDTECH · WEB PLATFORM · BRAND IDENTITY',
    url: 'https://d9w.vercel.app/',
    year: '2026',
    status: 'Live & Deployed',
    accentColor: '#F59E0B',
    shortDescription:
      'The comprehensive digital web platform for D9W German Language Institution, Madurai. Built to train and certify learners from A1 to C2 for higher education and healthcare careers in Germany.',
    fullOverview:
      'D9W German Language Institution is a premier language training academy in Madurai, Tamil Nadu, guiding students, nurses, and professionals toward language proficiency for German career integration. The web platform showcases CEFR course pathways (A1, A2, B1, B2, C1, C2), interactive class schedules, Goethe/TestDaF preparation resources, and corporate partnership portals.',
    problem:
      'Prospective students in South India lacked a clear, trustworthy, and modern digital platform to understand CEFR German proficiency stages, course schedules, and credential requirements for moving to Germany.',
    solution:
      'Designed and deployed an authoritative, ultra-fast web presence showcasing academic roadmaps, teacher qualifications, batch schedules, alumni testimonials, and seamless contact enrollment workflows.',
    keyFeatures: [
      {
        title: 'Complete CEFR A1-C2 Roadmap',
        description: 'Detailed modular breakdown of language levels, expected hours, vocabulary counts, and outcomes.',
      },
      {
        title: 'Goethe & TestDaF Exam Prep Center',
        description: 'Specialized training outlines for all 4 key assessment pillars: Listening, Reading, Writing, and Speaking.',
      },
      {
        title: 'Hybrid Class Booking',
        description: 'Facilitates enrollment for both in-person Madurai campus sessions and live interactive online cohorts.',
      },
      {
        title: 'Alumni Visa & Career Proof',
        description: 'Highlighting 1,000+ successful alumni now studying and working across Germany, Austria, and Switzerland.',
      },
      {
        title: 'SEO & Performance Optimized',
        description: 'Sub-second load times, mobile-first responsive layout, and optimized structured metadata.',
      },
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Vite', category: 'Performance' },
      { name: 'TypeScript', category: 'Architecture' },
      { name: 'Custom CSS System', category: 'Styling / UI' },
      { name: 'Framer Motion', category: 'Styling / UI' },
      { name: 'Responsive Web Standards', category: 'Architecture' },
    ],
    metrics: [
      { label: 'Students Trained', value: '1,000+ Global' },
      { label: 'CEFR Coverage', value: 'A1 to C2' },
      { label: 'Pass Rate', value: '96% Goethe' },
      { label: 'Lighthouse Score', value: '99/100' },
    ],
    teamDetails: 'Created by Jeofrey M. and development team. Detailed member roles will be listed shortly.',
  },
  {
    id: 'creators',
    index: '05',
    title: 'CREATORS',
    tagline: 'High-Impact Revenue Systems For Modern Growing Brands',
    category: 'AGENCY · GROWTH SYSTEMS · WEB',
    url: 'https://creators-omega.vercel.app/',
    year: '2026',
    status: 'Live & Deployed',
    accentColor: '#2563EB',
    shortDescription:
      'A cinematic, high-performance web experience for CREATORS, a digital growth agency building full-funnel revenue systems, content engines, and performance ad campaigns for scaling brands.',
    fullOverview:
      'CREATORS redefines agency digital presence through editorial typography, smooth GSAP-powered motion, and measurable case studies. Rather than superficial marketing promises, the platform presents hard metrics—such as 8.7% organic engagement, 3.2x lead expansion, and 4.7x return on ad spend—backed by clear, tiered service plans.',
    problem:
      'Most marketing agency websites look generic, deliver slow user experiences, and fail to demonstrate tangible business metrics or transparent pricing to potential clients.',
    solution:
      'Engineered an immersive, editorial agency showcase featuring dark-mode luxury design, smooth scroll-linked GSAP animations, verifiable case metrics, and transparent growth package pricing.',
    keyFeatures: [
      {
        title: 'Cinematic Scroll Choreography',
        description: 'Seamless section pinning, typography reveals, and fluid transitions powered by GSAP and ScrollTrigger.',
      },
      {
        title: 'Verifiable Case Study Metrics',
        description: 'Data-driven proof cards demonstrating ROAS gains, customer acquisition cost reduction, and organic reach.',
      },
      {
        title: 'Full-Funnel Service Matrix',
        description: 'Comprehensive breakdown of Content Systems, Performance Media, and Conversion Rate Optimization.',
      },
      {
        title: 'Transparent Growth Tiers',
        description: 'Straightforward monthly investment tiers from ₹18,000 to ₹50,000 with clear deliverable guarantees.',
      },
      {
        title: 'Dark-Mode Luxury Aesthetic',
        description: 'Tailored typography, deep ink backgrounds, micro-particles, and glassmorphic card elements.',
      },
    ],
    techStack: [
      { name: 'HTML5 Semantic', category: 'Frontend' },
      { name: 'Modern CSS3', category: 'Styling / UI' },
      { name: 'JavaScript ES6+', category: 'Frontend' },
      { name: 'GSAP Animation Suite', category: 'Styling / UI' },
      { name: 'ScrollTrigger', category: 'Performance' },
      { name: 'Performance Engineered', category: 'Architecture' },
    ],
    metrics: [
      { label: 'Average ROAS', value: '4.7x' },
      { label: 'Lead Growth', value: '3.2x Volume' },
      { label: 'Engagement Rate', value: '8.7% Peak' },
      { label: 'Scroll Feel', value: '60 FPS GSAP' },
    ],
    teamDetails: 'Created by Jeofrey M. and development team. Detailed member roles will be listed shortly.',
  },
];
