# Ruifeng Personal Site (Next.js + Tailwind)

A minimal, SEO-ready personal website set up for quick deployment on Vercel.

## Quick Start

1. Install Node.js LTS: https://nodejs.org/
2. Install pnpm (recommended) or use npm: `npm i -g pnpm` (optional)
3. Install deps: `npm install`
4. Run dev server: `npm run dev` → open http://localhost:3000
5. Edit SITE config in `pages/index.tsx` (name, email, links).
6. Deploy to Vercel: import the repo at https://vercel.com → Deploy.

## SEO
- Update `<title>`, `<meta name="description">`, and canonical URL in `pages/index.tsx`.
- Update `public/robots.txt` and `public/sitemap.xml` with your domain.
- After going live, add your site to Google Search Console and submit `sitemap.xml`.

## Scripts
- `dev` - Local dev at http://localhost:3000
- `build` - Production build
- `start` - Start production server (after `build`)
