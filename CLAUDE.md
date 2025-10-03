# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 (App Router) website for iplweb - a custom software solutions company. The site is a single-page application with multiple sections (Hero, Services, Portfolio, Presentations, About, Contact) and supports Polish/English internationalization.

**Tech Stack:**
- Next.js 14 with App Router
- React 18 with TypeScript
- Tailwind CSS 4 + shadcn/ui components
- pnpm as package manager
- Plausible Analytics for tracking
- Vercel Analytics

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

**Note:** The user typically runs the test server in a separate window, so there's no need to start it during development/testing.

## Architecture

### File Structure Pattern
- **app/** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with SEO metadata, structured data, and analytics scripts
  - `client-layout.tsx` - Client-side wrapper with I18n provider and font configuration
  - `page.tsx` - Main homepage assembling all sections
  - `globals.css` - Global styles and Tailwind configuration
  - `sitemap.ts` & `robots.ts` - SEO files

- **components/** - React components organized by section
  - Section components: `hero-section.tsx`, `services-section.tsx`, `portfolio-section.tsx`, etc.
  - `header.tsx` & `footer.tsx` - Site-wide navigation
  - `language-switcher.tsx` - Language toggle (PL/EN)
  - `theme-provider.tsx` - Theme system wrapper
  - **ui/** - shadcn/ui components (badge, button, card, etc.)

- **lib/** - Utilities and shared logic
  - `i18n.tsx` - Custom internationalization system with Context API
  - `utils.ts` - Utility functions (e.g., cn for className merging)

### Key Architectural Patterns

**Internationalization:**
- Custom i18n implementation using React Context (lib/i18n.tsx)
- Translations stored in `translations` object with 'pl' and 'en' keys
- Language detection from browser, saved to localStorage
- Usage: `const { t, language, setLanguage } = useI18n()`
- Translation keys follow pattern: `section.subsection.field` (e.g., "hero.title", "services.bpp.description")

**Component Pattern:**
- Each major page section is a separate component in components/
- All components are server components by default unless marked with "use client"
- Client components needed for: interactivity, hooks, context consumers
- shadcn/ui components use Radix UI primitives with Tailwind styling

**Styling:**
- Tailwind CSS 4 with custom CSS variables for theming
- Uses `cn()` utility (from lib/utils.ts) for conditional classes
- shadcn/ui configured with "new-york" style variant
- Import path aliases: `@/components`, `@/lib`, etc.

**SEO Configuration:**
- Metadata in app/layout.tsx includes OpenGraph, Twitter cards, structured data
- Sitemap dynamically generated in app/sitemap.ts
- robots.txt configured in app/robots.ts
- Images unoptimized (static export compatible)

### Build Configuration

**next.config.mjs settings:**
- ESLint and TypeScript errors ignored during builds (for rapid development)
- Images unoptimized (static export mode)

**TypeScript:**
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Target: ES6

## Adding New Features

**Adding a new section:**
1. Create component in `components/[section-name].tsx`
2. Add translations to both `pl` and `en` in `lib/i18n.tsx`
3. Import and add to `app/page.tsx`
4. Update sitemap in `app/sitemap.ts` if needed

**Adding translations:**
- Edit `lib/i18n.tsx`
- Add key-value pairs to both `translations.pl` and `translations.en`
- Use translation with `t('key.name')` in components

**Adding shadcn/ui components:**
```bash
npx shadcn@latest add [component-name]
```
Components will be added to `components/ui/` based on `components.json` config

## Important Notes

- All user-facing text must be internationalized (never hardcode Polish/English strings)
- The site is a single-page application - all sections on homepage with anchor navigation
- TypeScript and ESLint errors won't block builds (but should still be fixed)
- Analytics: Plausible (self-hosted at plausible.io) + Vercel Analytics
- SEO is critical: maintain metadata, structured data, and sitemap when making changes
