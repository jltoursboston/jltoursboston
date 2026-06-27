# JL Tours Boston — Landing Page

Sitio web de JL Tours Inc. Construido con Astro 7 + Tailwind CSS v4. Deploy en Cloudflare Pages.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (estático)
npm run preview  # preview del build
```

## Deploy en Cloudflare Pages

1. Sube el proyecto a un repositorio de GitHub
2. En Cloudflare Pages → "Create application" → conectar con GitHub
3. Configuración del build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Clic en "Save and Deploy"

---

## Guía de mantenimiento para el cliente

### Actualizar precios de tours
Archivo: `src/data/tours.ts`
Busca el tour por nombre (`niagara`, `nyc-completa`, etc.) y cambia el campo `price`:
```ts
price: '$410 USD/persona',  // ← cambiar aquí
```

### Agregar fotos reales
Reemplaza las URLs de Unsplash en los archivos que tienen el comentario `TODO: replace`.

**Tours** → `src/data/tours.ts`, campo `image` de cada tour:
```ts
image: 'https://images.unsplash.com/...',  // ← reemplazar con /images/tours/niagara.jpg
```
Guarda las fotos en `public/images/tours/` con formato JPG o WebP.

**Hero** → `src/components/sections/Hero.astro`

**Galería** → `src/components/sections/Gallery.astro`, array `placeholders`

### Actualizar fechas de próximas salidas
Archivo: `src/components/sections/UpcomingDates.astro`
Edita el array `upcomingDates`:
```ts
date: { es: 'Sábado 15 de Febrero 2025', en: 'Saturday, February 15, 2025' },
```

### Agregar testimonios reales
Archivo: `src/components/sections/Testimonials.astro`
Edita el array `testimonials` con el texto, nombre y tour del viajero real.

### Cambiar número de WhatsApp
Busca `18573899523` en `src/data/tours.ts` y `src/data/i18n.ts` y reemplaza con el nuevo número.

### Cambiar el dominio del sitio
Archivo: `astro.config.mjs`:
```js
site: 'https://jltoursboston.com',  // ← cambiar aquí
```
También actualiza `public/robots.txt` y `src/layouts/BaseLayout.astro`.
