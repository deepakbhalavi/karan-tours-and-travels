// Captures Stage 1 screenshots with a locally installed Chrome/Edge (puppeteer-core).
// Usage: start the site (npm run dev or npm run preview), then:
//   BASE_URL=http://localhost:5173 npm run screenshots
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.resolve(ROOT, '..', 'screenshots', 'stage-1');
const BASE = (process.env.BASE_URL || 'http://localhost:5173').replace(/\/$/, '');

const BROWSERS = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const executablePath = BROWSERS.find((p) => existsSync(p));
if (!executablePath) throw new Error('No Chrome/Edge found. Set CHROME_PATH.');

const DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 1 };
// isMobile emulation breaks puppeteer full-page captures (tiles repeat), so the
// mobile shot uses a 390px-wide viewport — the layout is width-responsive anyway.
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, hasTouch: true };

const SHOTS = [
  { file: 'homepage-desktop.png', url: '/', viewport: DESKTOP, fullPage: true },
  { file: 'homepage-mobile.png', url: '/', viewport: MOBILE, fullPage: true },
  { file: 'destinations.png', url: '/destinations', viewport: DESKTOP, fullPage: true },
  { file: 'fleet.png', url: '/fleet', viewport: DESKTOP, fullPage: true },
  { file: 'route-details.png', url: '/routes/nagpur-to-pune', viewport: DESKTOP, fullPage: true },
  { file: 'booking-widget.png', url: '/', viewport: DESKTOP, selector: '#hero-booking' },
  { file: 'contact.png', url: '/contact', viewport: DESKTOP, fullPage: true },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function autoScroll(page) {
  // Trigger whileInView reveal animations and lazy images before a full-page capture.
  await page.evaluate(async () => {
    const step = 300;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await sleep(900);
}

await fs.mkdir(OUT, { recursive: true });

// Chrome repeats tiles when a single capture exceeds ~16k device pixels, so tall
// pages are captured in chunks and stitched together with sharp.
async function fullCapture(page, target, dpr = 1) {
  const { width, height } = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
  }));
  const chunk = Math.floor(12000 / dpr);
  if (height <= chunk) {
    await page.screenshot({ path: target, fullPage: true });
    return;
  }
  const parts = [];
  for (let y = 0; y < height; y += chunk) {
    const h = Math.min(chunk, height - y);
    const buf = await page.screenshot({ clip: { x: 0, y, width, height: h }, captureBeyondViewport: true });
    parts.push({ input: buf, top: Math.round(y * dpr), left: 0 });
  }
  await sharp({
    create: { width: Math.round(width * dpr), height: Math.round(height * dpr), channels: 3, background: '#ffffff' },
  })
    .composite(parts)
    .png()
    .toFile(target);
}
const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--no-sandbox', '--hide-scrollbars'] });
const problems = [];

try {
  for (const shot of SHOTS) {
    const page = await browser.newPage();
    page.on('console', (m) => m.type() === 'error' && problems.push(`[${shot.file}] console: ${m.text()}`));
    page.on('pageerror', (e) => problems.push(`[${shot.file}] pageerror: ${e.message}`));
    page.on('requestfailed', (r) => {
      const u = r.url();
      if (u.startsWith(BASE)) problems.push(`[${shot.file}] failed: ${u}`);
    });
    await page.setViewport(shot.viewport);
    await page.goto(`${BASE}${shot.url}`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    await sleep(1800);

    const target = path.join(OUT, shot.file);
    if (shot.selector) {
      const el = await page.waitForSelector(shot.selector, { visible: true });
      await el.screenshot({ path: target });
    } else {
      await autoScroll(page);
      // Horizontal-overflow check (no sideways scrolling allowed).
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 1) problems.push(`[${shot.file}] horizontal overflow of ${overflow}px`);
      await fullCapture(page, target, shot.viewport.deviceScaleFactor);
    }
    console.log(`saved ${path.relative(ROOT, target)}`);
    await page.close();
  }
} finally {
  await browser.close();
}

if (problems.length) {
  console.log('\nIssues detected:');
  problems.forEach((p) => console.log(' - ' + p));
  process.exitCode = 1;
} else {
  console.log('\nNo console errors, failed requests or horizontal overflow detected.');
}

