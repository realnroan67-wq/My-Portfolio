import { cp, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('build/', root);
await mkdir(new URL('dist/', output), { recursive: true });
await mkdir(new URL('src/', output), { recursive: true });
await cp(new URL('index.html', root), new URL('index.html', output));
await cp(new URL('dist/styles.css', root), new URL('dist/styles.css', output));
await cp(new URL('src/main.js', root), new URL('src/main.js', output));
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });
console.log('Static site packaged in build/');