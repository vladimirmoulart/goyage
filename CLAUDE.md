# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Dev server (localhost:3000) — includes required webpack + browser-compat env vars
npm run build   # Production build
npm start       # Serve production build
npm run lint    # ESLint via eslint-config-next
```

> The `dev` and `build` scripts include `BROWSERSLIST_IGNORE_OLD_DATA=1 BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA=1` and force `--webpack`. Do not strip these flags.

## Architecture

**GOYAGE** is a Next.js 16 (App Router) marketing site for a travel-experience platform. It is entirely static mock data — there is no backend, no API routes, and no environment variables in use.

### Data layer

All mock data lives in `lib/`:
- [lib/activities.ts](lib/activities.ts) — `activitiesData: Record<string, ActivityDetail>` (keys `"1"`–`"8"`)
- [lib/destinations.ts](lib/destinations.ts) — `destinationDetailData: Record<string, DestinationDetail>` (keys: `seychelles`, `maroc`, `bali`, `italie`, `espagne`)
- [lib/boxes.ts](lib/boxes.ts) — `boxesData: Record<string, BoxData>` (keys: `maroc-authentique`, `italie-dolce-vita`, `bali-spirituel`, `espagne-vibrante`, `seychelles-evasion`) + `boxesList` convenience export
- [lib/utils.ts](lib/utils.ts) — `cn()` helper (clsx + tailwind-merge)

When adding new content, add it to these data files rather than co-locating it in components.

### Routing

| Route | Source |
|---|---|
| `/` | Landing page (Hero → HowItWorks → FeaturedExperiences → Testimonials → CTA) |
| `/activites` | Static grid of 8 activities |
| `/activites/[id]` | Detail page — reads `activitiesData[id]` |
| `/activites-locales` | Editorial page (no detail routes) |
| `/destinations` | Catalog with filters modal |
| `/destinations/[id]` | Dynamic detail — reads `destinationDetailData[id]`, **falls back to `espagne`** if not found |
| `/destinations/{city}` | Static pages for Marrakech, Bali, Cinque Terre, Santorini, Lisbonne, Buenos Aires, Cape Town |
| `/boxes` | Box landing page |
| `/boxes/[id]` | Detail page — reads `boxesData[id]` |
| `/faq` | FAQ + contact |
| `/connexion` | Login form |
| `/inscription` | Signup choice; `/inscription/hote` and `/inscription/voyageur` |

### Page structure convention

Every page follows this shell:
```tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      {/* sections */}
      <Footer />
    </main>
  )
}
```

Pages are **server components** by default. Add `"use client"` only when React hooks are required (see `Header`, `ChatWidget` for examples).

### Global layout

[app/layout.tsx](app/layout.tsx) mounts `<ChatWidget />` (fixed bottom-right AI concierge, currently rule-based) and Vercel Analytics (production only) on every page.

### Brand design system

Custom Tailwind colors (use by class name, e.g. `bg-coral`, `text-pink`):

| Token | Hex | Usage |
|---|---|---|
| `coral` | `#fb676f` | Primary CTAs, active states |
| `green` | `#a4cc59` | Secondary / accent |
| `pink` | `#ffb2b6` | Soft rose, borders, cards |
| `cream` | `#fff0d8` | Page background |

Font: **Poppins** (sans-serif throughout). Border radius base: `1rem` (`--radius`).

### UI components

Primitive components from Radix UI are wrapped in [components/ui/](components/ui/) (button, dialog, dropdown-menu). Use these wrappers rather than Radix directly. Additional Radix packages are installed but not all have wrappers yet — add them to `components/ui/` following the existing pattern if needed.

### Key component groups

- `components/activities/` — hero, grid, categories, CTA, and per-activity detail sub-sections
- `components/boxes/` — hero, grid, categories, gift section, and per-box detail sub-sections
- `components/destinations/` — hero, filters, grid, popular regions
- `components/destination-detail/` — hero, about, experiences, hosts, practical info (used by `/destinations/[id]`)
- `components/chat/chat-widget.tsx` — floating chat (client component, rule-based quick answers)
