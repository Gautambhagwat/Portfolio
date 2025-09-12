# Gautam Bhagwat - Portfolio

A personal portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

## Getting Started

Prerequisites:
- Node.js (LTS recommended)
- npm (comes with Node.js)

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

Build for production and preview locally:

```sh
npm run build
npm run preview
```

## Tech Stack
- Vite
- React (TypeScript)
- Tailwind CSS
- shadcn-ui
- Radix UI

## Project Structure
- `src/components` – Shared UI components and layout
- `src/pages` – Route pages (Home, About, Education, Projects, Contact)
- `src/hooks` – Custom hooks
- `public` – Static assets (e.g., `favicon.ico`, place `resume.pdf` here for download)

## Configuration
- Aliases: `@` → `./src` (see `vite.config.ts`)
- Theme: basic dark mode toggle in `components/Layout.tsx`

## Deploy
You can deploy the `dist` folder to any static hosting provider:
- GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.

Typical steps (Netlify/Vercel):
- Build command: `npm run build`
- Publish directory: `dist`

## License
MIT
