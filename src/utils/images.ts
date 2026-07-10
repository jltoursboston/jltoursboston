import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Todas las fotos de tours viven en src/assets/tours/ y se optimizan
// (WebP + srcset) vía astro:assets en el build.
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/tours/*.{jpg,jpeg}', { eager: true });

/** Resuelve una ruta legacy ('/images/tours/x.jpg') o un nombre de archivo a su ImageMetadata. */
export function tourImg(path: string): ImageMetadata {
  const name = path.split('/').pop()!;
  const mod = modules[`../assets/tours/${name}`];
  if (!mod) throw new Error(`Imagen de tour no encontrada: ${path}`);
  return mod.default;
}

/** Variantes responsive para imágenes hero a ancho completo (LCP).
 *  Calidad 62: el hero va tras un degradado navy + text-shadow, así que la
 *  pérdida es imperceptible y recorta el peso del LCP. Tope 1280 w (la fuente
 *  ronda los ~1344 px; 1600 no aportaba variante real). */
export function heroImage(src: ImageMetadata) {
  return getImage({ src, widths: [640, 828, 1280], sizes: '100vw', format: 'webp', quality: 62 });
}

/** JPEG 1200px para og:image (los crawlers sociales no siempre soportan WebP). */
export function ogImage(src: ImageMetadata) {
  return getImage({ src, width: 1200, format: 'jpeg' });
}
