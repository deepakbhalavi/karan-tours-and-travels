# Karan Tours & Travels — Frontend (Stage 1)

Premium taxi booking & travel website for **Karan Tours & Travels by KARAN MANDALE**, Nagpur.
*"Your Journey, Our Responsibility."*

> Stage 1 = customer-facing frontend only. No backend, database, authentication or dashboards yet.

## Tech stack

React 19 · Vite 6 · Tailwind CSS 3 · React Router 7 · Framer Motion · React Hook Form · Lucide React · self-hosted Inter & Manrope fonts.

## Getting started

Requirements: **Node.js 18+** (tested on Node 24) and npm.

```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build (http://localhost:4173) |
| `npm run sitemap` | Regenerate `public/sitemap.xml` + `public/robots.txt` (`SITE_URL=https://yourdomain` to override) |
| `npm run optimize-images` | Convert source photos in `assets-src/` to optimised WebP in `public/images/` |
| `npm run screenshots` | Capture screenshots into `../screenshots/stage-1/` (needs local Chrome/Edge and a running server; set `BASE_URL`) |

Optional `.env`:

```
VITE_SITE_URL=https://www.karantoursandtravels.com
```

## Pages & routes

| Route | Page |
| --- | --- |
| `/` | Home (hero + booking widget, services, destinations, fleet, routes, testimonials) |
| `/about` | About us |
| `/destinations` · `/destinations/:slug` | Destination list (filterable) & dynamic details |
| `/fleet` | Fleet by category (Sedan, SUV, MUV, Tempo Traveller, Mini Bus) |
| `/routes` · `/routes/:slug` | Popular routes (searchable) & dynamic route pages, e.g. `/routes/nagpur-to-pune` |
| `/faq` (alias `/help`) | Help & FAQ |
| `/contact` | Contact form, call / WhatsApp / email, map |
| `/image-credits` | Photo attributions |

## Project structure

```
frontend/
├─ public/                 # favicon, images (WebP), sitemap.xml, robots.txt
├─ assets-src/             # original photos (input for optimize-images)
├─ scripts/                # sitemap, image optimisation, screenshots
└─ src/
   ├─ config/site.js       # ⭐ business info (phone, WhatsApp, email, URL) – edit here
   ├─ data/                # temporary frontend data: destinations, fleet, routes, faqs, content
   ├─ services/            # bookingService.js – API integration point for Stage 2
   ├─ utils/               # validation rules, WhatsApp message builders
   ├─ context/             # BookingContext – global "Book Now" modal
   ├─ components/          # reusable UI (layout, cards, BookingWidget, forms, ui/*)
   └─ pages/               # route pages (secondary pages are lazy-loaded)
```

## Booking & WhatsApp flow

1. The booking widget validates input (name, Indian mobile number, pickup/drop, journey date from today onward, return date ≥ journey date, passengers, etc.).
2. `services/bookingService.js` builds the enquiry. **In Stage 1 nothing is stored**; the success screen offers *Send on WhatsApp* (prefilled message to +91 9075844372) or *Call*.
3. In Stage 2, replace the body of `submitBooking()` with a `fetch('/api/bookings', …)` call — no UI changes needed.

Fares and distances are intentionally left unset in `src/data/*` ("Fare shared on enquiry") until the business confirms real figures.

## SEO & performance

Per-page title, meta description, canonical, Open Graph & Twitter tags (`components/ui/Seo.jsx`), JSON-LD `TaxiService` schema, sitemap & robots.txt, semantic HTML, lazy-loaded images and route-level code splitting, WebP images, self-hosted fonts.

## Deployment note

This is a single-page app: configure your host to rewrite unknown paths to `index.html` (Netlify `_redirects`, Vercel rewrites, or Nginx `try_files $uri /index.html`).

## Images

Some photos are AI-generated and some come from Wikimedia Commons (see `/image-credits`). Replace them with real fleet & trip photos before launch.
