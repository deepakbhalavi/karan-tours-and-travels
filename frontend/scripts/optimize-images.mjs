// Converts source images in /assets-src into optimised WebP files in /public/images.
// Run: npm run optimize-images
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'assets-src');
const OUT = path.join(ROOT, 'public', 'images');
const WIDTH = { site: 1920, destinations: 1000, fleet: 900 };

for (const folder of Object.keys(WIDTH)) {
  const dir = path.join(SRC, folder);
  const files = (await fs.readdir(dir).catch(() => [])).filter((f) => /\.(jpe?g|png)$/i.test(f));
  await fs.mkdir(path.join(OUT, folder), { recursive: true });
  for (const file of files) {
    const name = file.replace(/\.(jpe?g|png)$/i, '');
    const target = path.join(OUT, folder, `${name}.webp`);
    const pipeline = sharp(path.join(dir, file)).rotate().resize({ width: WIDTH[folder], withoutEnlargement: true });
    if (folder !== 'site') pipeline.resize({ width: WIDTH[folder], height: Math.round(WIDTH[folder] * 0.7), fit: 'cover', position: 'attention' });
    const info = await pipeline.webp({ quality: folder === 'site' ? 78 : 76 }).toFile(target);
    console.log(`${folder}/${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
}

