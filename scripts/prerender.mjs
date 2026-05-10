// Postbuild: render the Vite SPA via headless Chromium and overwrite
// dist/index.html with the captured DOM. Crawlers and AI fetchers see
// the full body without executing JS; the client still hydrates after
// load (see src/main.jsx).
//
// Run via `npm run build` (postbuild hook) or directly: `node scripts/prerender.mjs`.

import { createServer } from 'node:http';
import { writeFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import puppeteer from 'puppeteer';
import sirv from 'sirv';

const DIST = resolve(process.cwd(), 'dist');
const BASE = process.env.VITE_BASE ?? '/dr-rahul-patley/';
const PORT = Number(process.env.PRERENDER_PORT ?? 4173);

await stat(join(DIST, 'index.html')).catch(() => {
  console.error('dist/index.html missing — run `vite build` first');
  process.exit(1);
});

// sirv serves dist/ at the root; we strip the configured base prefix
// from incoming URLs so /dr-rahul-patley/index.html maps to dist/index.html.
const handler = sirv(DIST, { dev: false, single: true, etag: true });
const server = createServer((req, res) => {
  if (BASE !== '/' && req.url.startsWith(BASE)) {
    req.url = req.url.slice(BASE.length - 1) || '/';
  }
  handler(req, res, () => { res.statusCode = 404; res.end('not found'); });
});
await new Promise((res) => server.listen(PORT, res));

const url = `http://localhost:${PORT}${BASE}`;
console.log(`prerender → ${url}`);

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  // Wait for hydration: the React tree should have mounted at least one section.
  await page.waitForSelector('main section', { timeout: 10000 });
  // Mark the document as pre-rendered so the client-side bootstrap can
  // call hydrateRoot instead of createRoot (avoids dropping the SSR DOM).
  await page.evaluate(() => document.documentElement.setAttribute('data-prerendered', 'true'));
  const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
  await writeFile(join(DIST, 'index.html'), html);
  console.log(`prerender ✓  wrote dist/index.html (${(html.length / 1024).toFixed(1)} kB)`);
} finally {
  await browser.close();
  server.close();
}
