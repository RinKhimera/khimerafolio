# CLAUDE.md

## Commands

```bash
bun dev           # Start dev server (Turbopack, localhost:3000)
bun run build     # Production build
bun lint          # ESLint
```

## Architecture

- **Next.js 16** App Router with Turbopack. No `src/` directory — app, components, lib at root.
- **Bilingual** (EN/FR) via next-intl. Routes: `/en/...` and `/fr/...`.
- **Tailwind CSS v4** — CSS-first config in `app/globals.css`, no `tailwind.config.ts`.
- **shadcn/ui** (new-york style) with Radix UI primitives.
- **motion** (Framer Motion) for animations. Import from `"motion/react"`.

## Key Files

- `app/globals.css` — Design system: OKLCH color variables, `@theme inline` mappings, font vars
- `app/[locale]/layout.tsx` — Root locale layout: fonts, ThemeProvider, NextIntlClientProvider
- `app/[locale]/page.tsx` — Home page assembling all sections
- `i18n/routing.ts` — Locale config (`["en", "fr"]`, default `"en"`)
- `i18n/request.ts` — Message loading per locale
- `proxy.ts` — next-intl middleware (Next.js 16 naming for middleware)
- `messages/en.json`, `messages/fr.json` — Translation strings
- `lib/constants.ts` — Site config, social links, nav links
- `components.json` — shadcn config (`"config": ""` for Tailwind v4)

## Directory Layout

```
app/[locale]/         # i18n pages
components/layout/    # Header, Footer, ThemeToggle, LanguageSwitcher
components/sections/  # Hero, About, Projects, Skills, Contact
components/animations/# FadeIn, ScrollReveal, StaggerChildren
components/ui/        # shadcn generated components
components/providers/ # ThemeProvider
i18n/                 # Routing, request config, navigation helpers
messages/             # en.json, fr.json
hooks/                # Custom hooks (useScrollSpy)
lib/                  # Utilities (cn), constants
```

## Non-Obvious Patterns

- **Tailwind v4**: No `tailwind.config.ts`. All theming via `@theme inline` in `globals.css`. Colors use OKLCH. Use `tw-animate-css` (NOT `tailwindcss-animate`).
- **Next.js 16 proxy.ts**: Replaces `middleware.ts`. Known Windows bug with `next start` ([#85243](https://github.com/vercel/next.js/issues/85243)) — dev and Vercel deploy work fine.
- **Async params**: All `params` in layouts/pages are `Promise` — always `await params`.
- **motion "use client"**: All components using `motion` must be client components. Animation wrappers in `components/animations/` handle this boundary.
- **i18n translations**: Use `useTranslations("Namespace")` in client components, `getTranslations()` in server components. Translation keys are structured as `Namespace.key`.
- **Fonts**: Syne (`font-display`), Geist Sans (`font-sans`), JetBrains Mono (`font-mono`). Variables set in locale layout, mapped in `globals.css` via `@theme inline`.
- **Package manager**: Bun exclusively. Use `bunx` for one-off CLI tools (e.g., `bunx shadcn@latest add`).

## Code Style

- TypeScript strict mode
- Functional components, no default exports for components (named exports)
- `cn()` utility from `@/lib/utils` for conditional classes
- shadcn components in `components/ui/`, custom components outside
