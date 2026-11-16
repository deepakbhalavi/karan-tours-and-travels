// Generates public/sitemap.xml and public/robots.txt from the route/destination data.
// Run: npm run sitemap   (set SITE_URL to override the production domain)
import fs from 'node:fs/promises';
import path from 'node:path';
import { DESTINATIONS } from '../src/data/destinations.js';
import { ROUTES } from '../src/data/routes.js';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE_URL = (process.env.SITE_URL || 'https://www.karantoursandtravels.com').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const pages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about', priority: '0.6', changefreq: 'monthly' },
  { loc: '/destinations', priority: '0.9', changefreq: 'weekly' },
  { loc: '/fleet', priority: '0.8', changefreq: 'monthly' },
  { loc: '/routes', priority: '0.9', changefreq: 'weekly' },
  { loc: '/faq', priority: '0.6', changefreq: 'monthly' },
  { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
  ...DESTINATIONS.map((d) => ({ loc: `/destinations/${d.slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...ROUTES.map((r) => ({ loc: `/routes/${r.slug}`, priority: '0.8', changefreq: 'monthly' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.loc === '/' ? '/' : p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await fs.writeFile(path.join(ROOT, 'public', 'sitemap.xml'), xml);
await fs.writeFile(path.join(ROOT, 'public', 'robots.txt'), robots);
console.log(`sitemap.xml written with ${pages.length} URLs; robots.txt written.`);

