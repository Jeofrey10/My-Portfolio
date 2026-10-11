import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F4F0',
        'paper-warm': '#EDEDE8',
        silver: '#D9D9D4',
        'silver-deep': '#B8B9B5',
        ink: '#171717',
        'ink-black': '#080808',
        blue: '#1597E5',
        'blue-deep': '#0877B8',
      },
      fontFamily: {
        display: ["'Archivo Variable'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
        body: ["'Instrument Sans Variable'", 'system-ui', 'sans-serif'],
        mono: ["'Martian Mono'", 'ui-monospace', 'monospace'],
      },
      spacing: {
        '1u': '8px',
        '2u': '16px',
        '3u': '24px',
        '4u': '32px',
        '6u': '48px',
        '8u': '64px',
        '12u': '96px',
        '16u': '128px',
        '24u': '192px',
        '32u': '256px',
      },
      maxWidth: {
        container: '1560px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
