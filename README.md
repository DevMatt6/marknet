# Progetti e Servizi V — Website

> **"Progettiamo spazi. Costruiamo fiducia."**

Marketing and portfolio website for **Progetti e Servizi V**, a Rome-based architectural and renovation studio specialising in residential, commercial, and hospitality spaces. The site showcases services, completed projects, and the studio's working method, with a clean dark/light theme, smooth scroll, animated UI, and a custom cursor.

**Live URL:** [progettiserviziv.it](https://www.progettiserviziv.it)

---

## Tech Stack

| Dependency                    | Version  | Purpose                                                                                   |
| ----------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| **Next.js**                   | 16.2.4   | Framework (App Router) — `app/` directory, RSC by default                                 |
| **React**                     | 19.2.4   | UI runtime                                                                                |
| **TypeScript**                | ^5       | Strict mode; path alias `@/` → project root                                               |
| **Tailwind CSS**              | ^4       | Utility styles — all config in `app/globals.css` via `@theme {}`, no `tailwind.config.js` |
| **tw-animate-css**            | ^1.4.0   | Keyframe animation utilities                                                              |
| **Framer Motion**             | ^12.38.0 | Animations, scroll effects, page transitions                                              |
| **Lenis**                     | ^1.3.23  | Smooth scroll — wrapped in `providers/LenisProvider.tsx`                                  |
| **next-themes**               | ^0.4.6   | Dark/light theme — uses `data-theme` attribute on `<html>`                                |
| **Lucide React**              | ^1.11.0  | Icon set                                                                                  |
| **@base-ui/react**            | ^1.4.1   | Accessible UI primitives for forms and overlays                                           |
| **shadcn**                    | ^4.5.0   | Component scaffolding CLI; source in `components/ui/`                                     |
| **class-variance-authority**  | ^0.7.1   | Variant-driven class composition (shadcn components)                                      |
| **clsx** + **tailwind-merge** | ^2 / ^3  | Conditional class merging via `cn()` in `lib/utils.ts`                                    |

> **i18n:** `next-intl` is not installed. The site is Italian-only.

---

## Project Structure

```
progetti-servizi-v/
├── app/                          # Next.js App Router root
│   ├── globals.css               # All design tokens, theme variables, base resets
│   ├── layout.tsx                # Root layout: Manrope font, providers, Navbar, Footer
│   ├── page.tsx                  # Homepage — composes home section components
│   ├── loading.tsx               # Global loading UI
│   ├── not-found.tsx             # Custom 404 page
│   ├── chi-siamo/
│   │   └── page.tsx              # About page
│   ├── contatti/
│   │   ├── page.tsx              # Contact page
│   │   └── _ContactForm.tsx      # Client component — contact form (prefixed _ = colocated)
│   ├── il-metodo/
│   │   └── page.tsx              # Studio working method page
│   ├── progetti/
│   │   └── page.tsx              # Projects portfolio page
│   ├── servizi/
│   │   └── page.tsx              # Services page
│   └── software/
│       ├── page.tsx              # Software page
│       └── _TabSwitcher.tsx      # Client component — tab UI
│
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx            # Fixed header: logo, desktop nav, theme toggle, mobile trigger
│   │   ├── MegaMenu.tsx          # Desktop dropdown navigation
│   │   ├── MobileDrawer.tsx      # Full-screen mobile navigation drawer
│   │   └── Footer.tsx            # Site footer: brand, nav links, legal
│   ├── sections/
│   │   ├── HeroSection.tsx       # Homepage hero: parallax bg, SplitText h1, CTAs
│   │   ├── home/
│   │   │   ├── TrustBar.tsx          # Trust signals strip
│   │   │   ├── IntroSection.tsx      # Brand intro text
│   │   │   ├── ProductsSection.tsx   # Services/products cards
│   │   │   ├── ApplicationsSection.tsx # Use-case grid
│   │   │   ├── SoftwareSection.tsx   # Software teaser
│   │   │   ├── ProjectSection.tsx    # Draggable projects carousel
│   │   │   └── CTASection.tsx        # Bottom call-to-action banner
│   │   └── servizi/
│   │       ├── HeroServizi.tsx       # Services page hero
│   │       ├── ServiziIntro.tsx      # Services intro text
│   │       ├── ServiziList.tsx       # Services list/cards
│   │       └── SettoriSection.tsx    # Sectors covered
│   ├── templates/
│   │   └── ProductPageTemplate.md   # Template reference for product/service pages
│   └── ui/
│       ├── ScrollReveal.tsx      # Intersection-observer entrance animation wrapper
│       ├── SplitText.tsx         # Word-by-word staggered text reveal
│       ├── MagneticButton.tsx    # Cursor-magnetic CTA button/link
│       ├── CustomCursor.tsx      # Dual-layer custom cursor (dot + spring ring)
│       ├── PageTransition.tsx    # Curtain wipe transition between routes
│       ├── NavbarDark.tsx        # Side-effect component — sets navbar to light-on-dark mode
│       ├── Logo.tsx              # SVG logo via next/image
│       ├── SplitLinkButton.tsx   # Animated split-style link button
│       ├── badge.tsx             # shadcn Badge
│       ├── button.tsx            # shadcn Button
│       ├── input.tsx             # shadcn Input
│       ├── select.tsx            # shadcn Select
│       ├── separator.tsx         # shadcn Separator
│       ├── sheet.tsx             # shadcn Sheet (drawer)
│       ├── tabs.tsx              # shadcn Tabs
│       └── textarea.tsx          # shadcn Textarea
│
├── config/
│   └── site.ts                   # Central config: name, URL, nav, projects array
│
├── lib/
│   ├── animations.ts             # Framer Motion variant definitions
│   └── utils.ts                  # cn() = clsx + tailwind-merge
│
├── providers/
│   ├── ThemeProvider.tsx         # next-themes wrapper + ThemeToggle component
│   ├── LenisProvider.tsx         # Lenis smooth-scroll instance
│   └── NavbarThemeProvider.tsx   # Context for navbar colour mode
│
├── types/
│   └── index.ts                  # NavItem, Product, Project, SiteConfig interfaces
│
├── public/
│   └── images/
│       ├── partner/              # Partner/client logo images
│       ├── products/             # Service/product listing images
│       ├── products-hero/        # Hero background images
│       └── software/             # Software section screenshots
│
├── next.config.ts                # Next.js config
├── postcss.config.mjs            # PostCSS: @tailwindcss/postcss
├── tsconfig.json                 # TypeScript strict config; @/ alias → ./
├── eslint.config.mjs             # ESLint with eslint-config-next
└── components.json               # shadcn CLI configuration
```

---

## Routes

| Path         | Description                              |
| ------------ | ---------------------------------------- |
| `/`          | Homepage                                 |
| `/servizi`   | Services offered by the studio           |
| `/il-metodo` | Studio's working process and methodology |
| `/progetti`  | Portfolio of completed projects          |
| `/chi-siamo` | About the studio                         |
| `/contatti`  | Contact page with enquiry form           |
| `/software`  | Software tools/platform page             |

---

## Design System

All tokens live in `app/globals.css` inside a `@theme {}` block (Tailwind v4 syntax). There is **no** `tailwind.config.js`.

### Typography

- **Font:** `Manrope` (Google Fonts), loaded in `app/layout.tsx` via `next/font/google`
- **CSS variable:** `--font-manrope`
- **Weights:** 400, 500, 600, 700, 800
- **Scale:** fluid, `clamp()`-based — from `--text-xs` (12–14 px) to `--text-hero` (44–72 px)

### Colour

The brand palette is defined as `--color-brand-*` tokens in `globals.css`. Semantic tokens (`--background`, `--foreground`, `--primary`, `--accent`, `--surface`, `--border`, etc.) resolve differently per theme:

- **Light mode:** `background` is the lightest brand tint; `primary` is deep brand blue
- **Dark mode:** triggered by `data-theme="dark"` on `<html>` (not a `class`)

### Spacing & Layout

- Spacing follows a 4 px grid via `--space-*` tokens
- No `--content-*` max-width tokens; sections use fluid inline padding:
  ```css
  padding-inline: clamp(24px, 5vw, 80px);
  ```
- Border-radius tokens are `0px` — sharp, architectural aesthetic

### Style Convention

Components use **inline `style={{}}`** with CSS variables for all spacing, sizing, and colour. Tailwind utility classes are reserved for:

- Responsive visibility (`hidden md:flex`)
- State classes from shadcn primitives
- Conditional classes via `cn()`

```tsx
const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

function MySection() {
	return (
		<section style={{ ...sectionPad, background: "var(--surface)" }}>
			<ScrollReveal variant="fadeUp" delay={0}>
				<h2 style={{ fontSize: "var(--text-3xl)", color: "var(--foreground)" }}>
					Section Title
				</h2>
			</ScrollReveal>
		</section>
	);
}
```

---

## Key Components

### `ScrollReveal`

[components/ui/ScrollReveal.tsx](components/ui/ScrollReveal.tsx) — Framer Motion wrapper that triggers an entrance animation when the element scrolls into view.

| Prop        | Type                                                                                   | Default    | Description                               |
| ----------- | -------------------------------------------------------------------------------------- | ---------- | ----------------------------------------- |
| `variant`   | `"fadeUp" \| "fadeIn" \| "slideInLeft" \| "slideInRight" \| "scaleIn" \| "clipReveal"` | `"fadeUp"` | Animation preset from `lib/animations.ts` |
| `delay`     | `number`                                                                               | `0`        | Seconds to delay start — stagger siblings |
| `once`      | `boolean`                                                                              | `true`     | Replay on scroll back up                  |
| `threshold` | `number`                                                                               | `0.15`     | Visible fraction before triggering        |
| `as`        | `ElementType`                                                                          | `"div"`    | Rendered HTML element                     |

Stagger siblings by using incremental `delay` values (`0`, `0.1`, `0.2`, …).

### `SplitText`

[components/ui/SplitText.tsx](components/ui/SplitText.tsx) — word-by-word staggered opacity/y reveal. Use only for primary `<h1>` headings in hero sections.

| Prop          | Type       | Default           | Description                        |
| ------------- | ---------- | ----------------- | ---------------------------------- |
| `tag`         | heading/p  | `"p"`             | Rendered HTML element              |
| `delay`       | `number`   | `0`               | Delay before stagger begins        |
| `stagger`     | `number`   | `0.04`            | Seconds between words              |
| `accentWords` | `string[]` | —                 | Words to colour with `accentColor` |
| `accentColor` | `string`   | `"var(--accent)"` | CSS colour for accented words      |
| `immediate`   | `boolean`  | `false`           | Animate on mount instead of scroll |

### `MagneticButton`

[components/ui/MagneticButton.tsx](components/ui/MagneticButton.tsx) — spring-based cursor-magnetic button/anchor for primary CTAs.

| Prop       | Type              | Default    | Description                  |
| ---------- | ----------------- | ---------- | ---------------------------- |
| `as`       | `"button" \| "a"` | `"button"` | Rendered element             |
| `href`     | `string`          | —          | Required when `as="a"`       |
| `strength` | `number`          | `0.4`      | Magnetic pull strength (0–1) |

### NavbarDark

[components/ui/NavbarDark.tsx](components/ui/NavbarDark.tsx) — a render-nothing client component that sets the navbar to `"light-on-dark"` mode on mount (white text/icons over a dark hero image) and resets on unmount. Drop it as the first child of any page with a dark hero:

```tsx
export default function MyPage() {
	return (
		<>
			<NavbarDark />
			{/* page content */}
		</>
	);
}
```

### Page Transitions

[components/ui/PageTransition.tsx](components/ui/PageTransition.tsx) — `AnimatePresence` keyed by `usePathname()`. On every route change, two curtain panels (coloured `--primary`) perform a vertical split-wipe in/out. Mounted once in `app/layout.tsx`; no per-page work needed.

### Custom Cursor

[components/ui/CustomCursor.tsx](components/ui/CustomCursor.tsx) — a dot and a spring-lagged ring that follow the pointer. Hidden on touch devices (`hover: none`). Expands over `a`, `button`, and `[data-cursor="hover"]` elements. Mounted once in `app/layout.tsx`.

---

## Adding a New Project

### 1. Add the project to `config/site.ts`

```ts
{
  slug: "nuovo-progetto",       // URL-safe slug
  title: "Nuovo Progetto",
  category: "Residenziale",     // "Residenziale" | "Commerciale" | "Strutture Ricettive"
  location: "Roma, Quartiere",
  year: "2025",
  image: "/images/projects/nuovo-progetto.jpg",
}
```

The `ProjectSection` carousel on the homepage reads `siteConfig.projects` and renders the card automatically.

### 2. Add the project image

Place the image at `public/images/projects/<slug>.jpg` (recommended: 840 × 560 px or 3:2 ratio).

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

---

## Deployment

- **Recommended platform:** [Vercel](https://vercel.com) — zero-config for Next.js App Router
- **No required environment variables** for base functionality
- The contact form in [app/contatti/\_ContactForm.tsx](app/contatti/_ContactForm.tsx) requires an API endpoint or third-party service key (e.g. Resend, Formspree) added as an environment variable when wired up
- All pages are **React Server Components** by default; components using browser APIs, hooks, or Framer Motion are marked `"use client"`
- The custom cursor is hidden automatically on touch devices — no mobile-specific configuration needed
