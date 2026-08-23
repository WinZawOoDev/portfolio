# Win Zaw Oo — Portfolio

Personal portfolio built with **Next.js 16 (Turbopack)**, **React 19**, **Tailwind CSS 4**, **Framer Motion**.

Live-sections: `About`, `Experiences`, `Projects`, `Contact`.

## Tech Stack
- Next.js 16.3.2 + React 19.2.8 + TypeScript 5.9
- Tailwind CSS 4.3.3, Framer Motion 13, react-icons, react-scroll, typewriter-effect
- EmailJS for contact form, Google Fonts via `next/font`

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Environment
Create `.env.local` (gitignored):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_ID=
```

## Features
- Dark mode via `?theme=dark|light` + `localStorage` + `prefers-color-scheme` (init script in `app/layout.tsx:16`)
- Scroll progress, responsive Header/MobileMenu with backdrop + ESC + scroll-lock
- SEO: `openGraph`, `twitter`, `robots.txt`, `sitemap.xml`

## Scripts
- `npm run dev` — dev server
- `npm run build` — production build (static)
- `npm run lint` — eslint

## Deploy
Vercel or any Next.js compatible host. Set env vars for EmailJS.
