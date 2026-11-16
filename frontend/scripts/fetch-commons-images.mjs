// One-off helper: downloads freely-licensed photos from Wikimedia Commons for
// images that could not be AI-generated, and records attribution in
// src/data/imageCredits.json. Run: node scripts/fetch-commons-images.mjs
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'assets-src');
const UA = 'KaranToursWebsite/1.0 (karantoursandtravels2393@gmail.com)';

const TARGETS = [
  ['destinations/shirdi', 'Shirdi Sai Baba temple'],
  ['destinations/ajanta-ellora', 'Kailasa temple Ellora'],
  ['destinations/kanha', 'Kanha National Park barasingha'],
  ['destinations/amarkantak', 'Amarkantak temple Narmada'],
  ['destinations/jabalpur', 'Bhedaghat marble rocks'],
  ['destinations/shegaon', 'Shegaon Gajanan Maharaj temple'],
  ['destinations/goa', 'Palolem beach Goa'],
  ['destinations/mahabaleshwar', 'Mahabaleshwar valley view'],
  ['fleet/innova-hycross', 'Toyota Innova Hycross'],
  ['fleet/carens', 'Kia Carens'],
  ['fleet/tempo-traveller', 'Force Traveller'],
  ['fleet/tata-winger', 'Tata Winger'],
  ['fleet/mini-bus', 'Force Traveller bus'],
];

const OK_LICENSE = /^(cc0|cc[- ]by|cc[- ]by[- ]sa|public domain|pd)/i;

async function search(term) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({
    action: 'query', format: 'json', generator: 'search', gsrnamespace: '6',
    gsrsearch: `${term} filetype:bitmap`, gsrlimit: '15', prop: 'imageinfo',
    iiprop: 'url|size|extmetadata|mime', iiurlwidth: '1400',
  }).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const json = await res.json();
  const pages = Object.values(json.query?.pages || {}).sort((a, b) => a.index - b.index);
  return pages
    .map((p) => ({ title: p.title, ...p.imageinfo?.[0] }))
    .filter((i) => i.mime === 'image/jpeg' && i.width >= 1000 && i.width > i.height)
    .filter((i) => OK_LICENSE.test(i.extmetadata?.LicenseShortName?.value || ''));
}

const strip = (html = '') => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const credits = JSON.parse(await fs.readFile(path.join(ROOT, 'src/data/imageCredits.json'), 'utf8').catch(() => '{}'));
const EXCLUDE = /ambulance|bengaluru|bangalore|police/i;
// Optional CLI usage: node fetch-commons-images.mjs "fleet/carens=Kia Carens white"
const cli = process.argv.slice(2).map((a) => a.split('='));
for (const [key, term] of cli.length ? cli : TARGETS) {
  const results = (await search(term)).filter((r) => !EXCLUDE.test(r.title));
  if (process.env.LIST) { console.log(key, results.map((r) => r.title)); continue; }
  const pick = results[Number(process.env.PICK || 0)];
  if (!pick) { console.warn('No result for', term); continue; }
  const buf = Buffer.from(await (await fetch(pick.thumburl, { headers: { 'User-Agent': UA } })).arrayBuffer());
  const file = path.join(OUT, `${key}.jpg`);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, buf);
  credits[key] = {
    title: pick.title,
    author: strip(pick.extmetadata?.Artist?.value) || 'Unknown',
    license: pick.extmetadata?.LicenseShortName?.value,
    source: pick.descriptionurl,
  };
  console.log('saved', key, '<-', pick.title, credits[key].license);
}
await fs.writeFile(path.join(ROOT, 'src/data/imageCredits.json'), JSON.stringify(credits, null, 2));
