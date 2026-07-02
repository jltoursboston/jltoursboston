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

/** Variantes responsive para imágenes hero a ancho completo (LCP). */
export function heroImage(src: ImageMetadata) {
  return getImage({ src, widths: [640, 828, 1280, 1600], sizes: '100vw', format: 'webp' });
}

/** JPEG 1200px para og:image (los crawlers sociales no siempre soportan WebP). */
export function ogImage(src: ImageMetadata) {
  return getImage({ src, width: 1200, format: 'jpeg' });
}
