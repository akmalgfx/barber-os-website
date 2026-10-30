// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Served from the domain root by default. GitHub Pages serves the site under /barber-os-website,
// so its deploy workflow sets BASE_PATH (and SITE_URL) for the build.
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');

// Pages and components link with root paths ("/pricing", "/img/…"). When the site is built under a
// base path, this prefixes those links in the finished HTML, so the source never has to know.
function prefixRootLinks() {
  return {
    name: 'prefix-root-links',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!base) return;
        const skip = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const attr = new RegExp(`(\\s(?:href|src|action|poster)=")/(?!/|${skip}(?:/|"))`, 'g');
        const walk = async (d) => {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) await walk(p);
            else if (e.name.endsWith('.html')) await writeFile(p, (await readFile(p, 'utf8')).replace(attr, `$1${base}/`));
          }
        };
        await walk(fileURLToPath(dir));
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  base: base || '/',
  devToolbar: { enabled: false },
  integrations: [prefixRootLinks()],
});
