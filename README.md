# GuestMe Website

Website for GuestMe, built with Next.js, shadcn/ui v3, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** — App Router, static export for GitHub Pages
- **React 19** — Latest React with TypeScript
- **shadcn/ui v3** — Component library with Radix UI
- **Tailwind CSS v4** — Utility-first styling
- **pnpm** — Package manager

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm

### Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
```

Static output is generated in the `out/` directory.

## Deployment

The site is deployed to GitHub Pages via GitHub Actions on push to `main`.

Live: [https://guestme-docs.github.io/guestme-website-2026/](https://guestme-docs.github.io/guestme-website-2026/)

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── gm-landing/   # GuestMe landing page
│   │   ├── gm-changelog/ # Changelog page
│   │   ├── gm-integrations/ # Integrations page
│   │   └── ...
│   ├── components/       # UI components
│   └── lib/              # Utilities
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
└── package.json
```

## License

MIT
