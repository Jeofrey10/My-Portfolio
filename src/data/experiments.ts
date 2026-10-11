export interface Experiment {
  id: string;
  kicker: string;
  title: string;
  description: string;
  colStart: number;
  colEnd: number;
  aspect: string;
  offsetY?: number;
}

export const experiments: Experiment[] = [
  {
    id: 'a',
    kicker: 'VOICE UI',
    title: 'Waveform Billing',
    description: 'Waveform-first billing interface — no buttons, no fields.',
    colStart: 1,
    colEnd: 6,
    aspect: '4/3',
  },
  {
    id: 'b',
    kicker: 'HARDWARE',
    title: 'Breadboard Rigs',
    description: 'Breadboard sensor rigs and the wiring diagrams that survived.',
    colStart: 7,
    colEnd: 10,
    aspect: '1/1',
    offsetY: 48,
  },
  {
    id: 'c',
    kicker: 'POSTERS',
    title: 'Type Series',
    description: 'A typographic poster series, one per week, no colour allowed.',
    colStart: 10,
    colEnd: 13,
    aspect: '3/4',
  },
  {
    id: 'd',
    kicker: 'UI CONCEPT',
    title: 'Command Palette',
    description: 'Command-palette-only dashboards. No navigation at all.',
    colStart: 2,
    colEnd: 5,
    aspect: '1/1',
  },
  {
    id: 'e',
    kicker: 'GENERATIVE',
    title: 'Layout Chains',
    description: 'Prompt chains that design their own layout system.',
    colStart: 5,
    colEnd: 10,
    aspect: '16/9',
    offsetY: -32,
  },
  {
    id: 'f',
    kicker: 'IDENTITY',
    title: 'Mark Studies',
    description: 'Monogram and mark studies for products that don\'t exist yet.',
    colStart: 11,
    colEnd: 13,
    aspect: '2/3',
  },
];
