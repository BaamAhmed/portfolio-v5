# Portfolio v5

A minimal, terminal-inspired portfolio built with Next.js 16, React 19, and TypeScript.

## Design Philosophy

- **Minimal & Terminal-like**: Monospace fonts, minimal colors, text-focused design
- **Document-oriented**: Structured as a digital garden rather than a SaaS product
- **Simple Navigation**: Three main sections with clear hierarchy

## Structure

- `/` - Introduction and overview
- `/writing` - Blog articles, essays, and written pieces
- `/building` - Projects and things being explored/built
- `/thinking` - A corkboard of interesting finds from the web

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Typography**: Geist Mono (monospace)
- **Language**: TypeScript

## Project Structure

```
src/
├── app/              # Pages and layouts
│   ├── layout.tsx    # Root layout with navigation
│   ├── page.tsx      # Home page
│   ├── writing/      # Writing section
│   ├── building/     # Projects section
│   └── thinking/     # Curated links section
├── data/
│   └── dummy.ts      # All dummy data in one place
└── types/
    └── index.ts      # Type definitions by category
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

1. Update personal information in `src/app/page.tsx`
2. Replace dummy data in `src/data/dummy.ts` with real content
3. Modify colors and styling in `src/app/globals.css`
4. Update metadata in `src/app/layout.tsx`

## License

MIT
