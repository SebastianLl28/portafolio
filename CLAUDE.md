@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm lint         # ESLint via next lint
pnpm start        # Start production server
```

No test suite is configured.

## Architecture

Single-page portfolio for Sebastian Llamuca built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**. All content renders as one scrollable page via `src/app/page.tsx`, which composes six sections in order: Hero → Experience → Projects → About → Skills → Footer. A fixed anchor nav (`src/components/Nav.tsx`) is rendered from `layout.tsx`; each section exposes an `id` (`experiencia`, `proyectos`, `sobre-mi`, `tecnologias`, `contacto`) with `scroll-mt-24`.

**Section structure** — each section lives under `src/sections/<name>/` and follows a consistent layout:

- `<Name>.tsx` — the section root component
- `components/` — sub-components used only within this section
- `data/` — static data arrays (experience entries, project cards, skill list)
- `assets/` — section-specific images (Skills section keeps its icons here)

**Shared UI** — reusable primitives live in `src/components/ui/`: `Badge.tsx` (mono tech chip), `LinkButton.tsx` (pill button). SVG icons (GitHub, LinkedIn, arrow, lock, mail) are centralized in `src/components/icons.tsx`.

**`src/utils/cn.ts`** — standard `clsx` + `tailwind-merge` helper used for conditional class composition throughout.

**Skills color system** — `src/sections/skills/utils/color.tsx` defines a `Color` enum of all supported tech names and a `techMap` that maps each name to its brand background/border color. `Skill` entries in `data/skills.ts` must use `keyof typeof Color` as their `title`; adding a new skill requires updating both `color.tsx` and `assets/index.ts`.

**Styling** — dark theme (`ink: #08080c` background, `surface: #101016` cards, `line` hairline borders, `muted` secondary text) with the pink/magenta accent (`primary: #f775be`, `secondary: #ff1399`). Fonts load via `next/font/google` in `layout.tsx`: Bricolage Grotesque (`font-display`, headings), Instrument Sans (`font-sans`, body), JetBrains Mono (`font-mono`, dates/labels/tags). The signature visual gesture is magenta "selected text" highlights (`bg-secondary` blocks in Hero/Footer headings) matched by the global `::selection` style in `globals.css`, which also defines the `.eyebrow` and `.section-title` component classes and a `prefers-reduced-motion` guard. The `rise` entrance animation lives in `tailwind.config.ts`.

**Images** — all assets are imported as static Next.js images (`StaticImageData`) via `next/image`. Section-specific images live in `src/assets/`; skills icons live in `src/sections/skills/assets/` and are re-exported through an `index.ts` barrel file.

**Path alias** — `@/` maps to `src/` (configured in `tsconfig.json`).

## Content updates

To update portfolio content, edit the data files:

- `src/sections/experience/data/data.tsx` — work history entries
- `src/sections/projects/data/data.tsx` — project cards (`isPrivate: true` hides the repo link)
- `src/sections/skills/data/skills.ts` — skills grid

The CV PDF served at `/sebastian_llamuca_cv.pdf` lives in `public/`.
