// Genera el juego de favicons cuadrados a partir del logo de la empresa.
//
// Recorta el "emblema" del logo (óvalo con cataratas + arcoíris y el autobús,
// SIN la línea de texto de abajo) y lo cuadra, porque el logo completo con su
// texto queda ilegible a tamaño favicon (16–48px). Produce: public/favicon.ico
// (16/32/48), favicon-192.png, favicon-512.png y apple-touch-icon.png (180).
//
// Uso (una sola vez; los archivos resultantes son estáticos y se commitean):
//   npm i -D png-to-ico            # sharp ya viene con Astro
//   node scripts/gen-favicons.mjs
//
// Si se cambia public/logo.jpeg, reajusta CROP a las nuevas coordenadas.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, '..', 'public');
const SRC = path.join(PUBLIC, 'logo.jpeg');
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// Emblema dentro de logo.jpeg (960×756): óvalo + autobús, sin el texto inferior.
const CROP = { left: 185, top: 8, width: 585, height: 585 };

const pngBuf = (size) =>
  sharp(SRC)
    .extract(CROP)
    .flatten({ background: WHITE })
    .resize(size, size)
    .png()
    .toBuffer();

await sharp(await pngBuf(192)).toFile(path.join(PUBLIC, 'favicon-192.png'));
await sharp(await pngBuf(512)).toFile(path.join(PUBLIC, 'favicon-512.png'));
await sharp(await pngBuf(180)).toFile(path.join(PUBLIC, 'apple-touch-icon.png'));

const ico = await pngToIco([await pngBuf(16), await pngBuf(32), await pngBuf(48)]);
fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), ico);

console.log('Favicons (emblema) generados en public/');
