import { readdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist/client');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (!/^\/[a-zA-Z0-9_-]+$/.test(basePath)) {
  throw new Error('Set NEXT_PUBLIC_BASE_PATH to the repository path, e.g. /tochka-opory');
}
await access(path.join(root, 'index.html'));

// Keep vinext's root-route prerendering; prefix emitted resource URLs for Pages.
async function prepare(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await prepare(file);
    else if (/\.(html|css|js|json|rsc)$/.test(entry.name)) {
      const original = await readFile(file, 'utf8');
      const updated = original.replace(/(?<![\w/-])\/(?:_next|fonts)\//g, match => basePath + match);
      if (updated !== original) await writeFile(file, updated);
    }
  }
}
await prepare(root);
await writeFile(path.join(root, '.nojekyll'), '');

const html = await readFile(path.join(root, 'index.html'), 'utf8');
if (!html.includes('Возвращаем')) throw new Error('Expected homepage content is missing');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)[^"]*"/g)) {
  const url = new URL(match[1], 'https://example.test' + basePath + '/');
  if (url.origin !== 'https://example.test' || !url.pathname.startsWith(basePath + '/')) continue;
  await access(path.join(root, decodeURIComponent(url.pathname.slice(basePath.length))));
}
console.log(`GitHub Pages export ready at ${basePath}/`);
