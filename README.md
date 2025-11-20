# Startup Landing Page Generator

I wanted a portfolio piece that felt like an actual SaaS launch—not another “Hello World” repo. This template borrows the cinematic polish of Framer-built sites while sticking to the stack I love shipping with (React, Vite, Tailwind, Shadcn UI, Framer Motion).

## Why it exists

- Show how I approach modern frontend architecture, motion systems, and design tokens in one cohesive codebase.
- Give myself (and you) reusable sections/components that can be remixed into new landing pages within minutes.
- Prove that environment handling, accessibility, and performance can live alongside ambitious visuals.

## Highlights

- Responsive navigation with scroll-hide/reveal behavior and animated hamburger menu.
- Animated hero with staggered headline, parallax accents, and CTA button variants.
- Feature grid, testimonial carousel (autoplay + drag), pricing tiers with billing toggle, CTA block, and footer.
- Optional AI copy block that reads a mocked API key from `.env` and simulates an authenticated response.
- Framer Motion presets (`fadeIn`, `slideUp`, `hoverScale`, etc.) and Section wrappers for consistent entrance animations.
- Design system tokens for spacing, typography, colors, shadows, and motion curves.

## Screenshots

![Startup Landing Page Generator placeholder](https://placehold.co/1200x720/0f172a/e2e8f0?text=Startup+Landing+Page+Generator+Preview)

> Replace the placeholder above with your own screenshot before publishing.

## Tech stack in practice

Day to day this project runs on:

- Vite + React 18 + TypeScript
- TailwindCSS with Shadcn-inspired UI primitives (Button, Card, SectionWrapper)
- Framer Motion for page + interaction animations
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see it live. Run `npm run build && npm run preview` when you want the production bundle.

## Environment variables (yes, even for a mock)

1. Duplicate `.env.example` and rename to `.env`.
2. Provide your own values:

```
VITE_API_KEY=your-secret-here
VITE_APP_NAME=StartupLandingGenerator
```

3. Access variables through `import { getEnv } from '@/lib/env';` instead of reading directly from `import.meta.env` to ensure type safety and fallbacks.
4. Never commit real keys—`.env` is git-ignored, and `.env.example` only contains placeholders so collaborators know what to supply.

## Folder Structure

```
src/
  animations/      # Framer Motion presets and transitions
  components/      # UI primitives + layout helpers (CVA variants)
  design-system/   # Tokens for spacing, typography, colors, motion
  hooks/           # Composables like scroll direction detection
  lib/             # Env helper, utilities, AI mock service
  sections/        # Page sections (hero, features, pricing, etc.)
  styles/          # Global Tailwind + CSS utilities
  App.tsx          # Page composition
```

## Customization ideas

- Update tokens in `src/design-system/tokens.ts` to retheme spacing, typography, radii, and color palettes.
- Extend motion presets in `src/animations/motion.ts` to add additional entrance or parallax effects.
- Create new Shadcn-style variants in `src/components/ui` and add reusable sections in `src/sections`.
- Tailwind theme extensions live in `tailwind.config.ts` while base layers live in `src/styles/global.css`.

## Deployment

1. `npm run build` to generate the static bundle in `dist/`.
2. Deploy `dist/` to Vercel, Netlify, Cloudflare Pages, or any static host.
3. Configure project-specific environment variables on your hosting provider—never expose secrets client-side.

## Credits

Designed and coded by me as part of the **Startup Landing Page Generator** showcase. If you remix it, I’d love to see what you build—PRs, issues, or simple shout-outs are all welcome!
