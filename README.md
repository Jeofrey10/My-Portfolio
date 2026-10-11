# Jeofrey M. — Personal Portfolio

A production-grade, single-page portfolio site for Jeofrey M. — creative frontend developer, AI builder, UI/UX designer.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Placeholder Values

Three placeholder values in `src/data/contact.ts` need to be replaced before deployment:

| Placeholder | Replace with |
|---|---|
| `REPLACE_ME__EMAIL` | Your email address |
| `REPLACE_ME__LINKEDIN_URL` | Your LinkedIn profile URL |
| `REPLACE_ME__GITHUB_URL` | Your GitHub profile URL |

These render visibly in the contact section so they can't be missed.

## Project Screenshots

To add real project screenshots, place images in `src/assets/` and import them in the corresponding project component:

- `src/components/work/ProjectVox.tsx` — VOX AI
- `src/components/work/ProjectPixwall.tsx` — PIXWALL
- `src/components/work/ProjectIllora.tsx` — ILLORA AI
- `src/components/work/ProjectH2S.tsx` — H2S Safety

## Design Tokens

All design values live in `src/styles/tokens.css`:

- **Colors:** `--paper`, `--silver`, `--ink`, `--blue` (accent, used sparingly)
- **Type scale:** fluid `clamp()` values from `--t-mega` (hero) to `--t-micro` (labels)
- **Spacing:** 8px base grid
- **Fonts:** Archivo Variable (display), Instrument Sans Variable (body), Martian Mono (labels)

## Stack

React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · Framer Motion · Lenis
