// Genera el juego de favicons cuadrados a partir del monograma "JL".
//
// Convierte el texto "JL" (Georgia Bold) a paths vectoriales para que el
// resultado sea idéntico en todos los sistemas y no dependa de fuentes
// instaladas al rasterizar. Produce: public/favicon.svg, favicon.ico
// (16/32/48), favicon-192.png, favicon-512.png y apple-touch-icon.png (180).
//
// Uso (una sola vez; los archivos resultantes son estáticos y se commitean):
//   npm i -D opentype.js png-to-ico      # sharp ya viene con Astro
//   node scripts/gen-favicons.mjs
//
// Nota: usa la fuente Georgia Bold del sistema (Windows). En otro SO, apunta
// FONT_PATH a un .ttf serif bold equivalente.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, '..', 'public');
const TMP = fs.mkdtempSync(path.join(__dirname, '.favtmp-'));

const FONT_PATH = 'C:/Windows/Fonts/georgiab.ttf';
const CANVAS = 512;
const RX = 112;          // ~21.9% de redondeo (igual que el viejo 14/64)
const NAVY = '#10243E';
const AMBER = '#F2A541';
const CONTENT = 300;     // tamaño objetivo del "JL" dentro del lienzo (~59%)

const font = opentype.parse(fs.readFileSync(FONT_PATH));
const p = font.getPath('JL', 0, 0, 400, { kerning: true, letterSpacing: -0.02 });
const bb = p.getBoundingBox();
const bbW = bb.x2 - bb.x1;
const bbH = bb.y2 - bb.y1;
const scale = CONTENT / Math.max(bbW, bbH);
const tx = (CANVAS - bbW * scale) / 2 - bb.x1 * scale;
const ty = (CANVAS - bbH * scale) / 2 - bb.y1 * scale;
const d = p.toPathData(3);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS} ${CANVAS}" role="img" aria-label="JL Tours Boston">
  <rect width="${CANVAS}" height="${CANVAS}" rx="${RX}" fill="${NAVY}"/>
  <path transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(4)})" d="${d}" fill="${AMBER}"/>
</svg>
`;
fs.writeFileSync(path.join(PUBLIC, 'favicon.svg'), svg, 'utf8');

const svgBuf = Buffer.from(svg);
const png = async (size, file) =>
  sharp(svgBuf, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(file);

// PNGs finales (referenciados en <head> / manifest)
await png(192, path.join(PUBLIC, 'favicon-192.png'));
await png(512, path.join(PUBLIC, 'favicon-512.png'));
await png(180, path.join(PUBLIC, 'apple-touch-icon.png'));

// PNGs temporales para armar el .ico multi-tamaño
const ico16 = path.join(TMP, '16.png');
const ico32 = path.join(TMP, '32.png');
const ico48 = path.join(TMP, '48.png');
await png(16, ico16);
await png(32, ico32);
await png(48, ico48);
fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), await pngToIco([ico16, ico32, ico48]));

fs.rmSync(TMP, { recursive: true, force: true });
console.log('Favicons generados en public/');
