# Khimerafolio

Personal bilingual (EN/FR) developer portfolio built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Motion](https://motion.dev/) (Framer Motion)
- **i18n**: [next-intl](https://next-intl.dev/) (EN/FR)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (light/dark/system)
- **Typography**: Syne, Geist Sans, JetBrains Mono

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  [locale]/           # i18n routes (/en, /fr)
    layout.tsx        # Root layout with fonts & providers
    page.tsx          # Home page (single-page scroll)
components/
  layout/             # Header, Footer, ThemeToggle, LanguageSwitcher
  sections/           # Hero, About, Projects, Skills, Contact
  animations/         # Motion wrappers (FadeIn, ScrollReveal, Stagger)
  ui/                 # shadcn/ui components
i18n/                 # Routing, request config, navigation helpers
messages/             # Translation files (en.json, fr.json)
```

## License

[MIT](LICENSE) - Samuel Pokam
