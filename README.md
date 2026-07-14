# JL Tours Boston — Landing Page

Sitio web de JL Tours Inc. Construido con Astro 7 + Tailwind CSS v4. Deploy automático en Cloudflare Workers al hacer push a `master`.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (estático)
npm run preview  # preview del build
```

---

## Guía de mantenimiento

### Actualizar precios o detalles de tours
Archivo: `src/data/tours.ts`  
Busca el tour por `id` (`niagara`, `nyc-completa`, etc.) y edita los bloques `es` y `en`:

```ts
es: {
  price: '$410 USD/persona',   // ← precio
  duration: '2 días / 1 noche',
  // ...
},
```

### Actualizar fechas de próximas salidas
Archivo: `src/data/tours.ts`, campo `nextDates` de cada tour (formato ISO `YYYY-MM-DD`).  
El calendario interactivo las lee automáticamente:

```ts
nextDates: ['2025-03-15', '2025-04-05'],
```

### Agregar fotos reales
Guarda las fotos en `public/images/tours/` (JPG o WebP recomendado).  
Luego actualiza el campo `image` del tour en `src/data/tours.ts`:

```ts
image: '/images/tours/niagara.jpg',
```

Las fotos del Hero se editan en `src/components/sections/Hero.astro`, array `slides`.

### Agregar o editar reseñas de Google
Archivo: `src/data/testimonials.ts`, array `testimonials`.  
Cada entrada lleva el texto **verbatim** (sin modificar), el nombre real del autor, `rating` (1–5), `date` en formato `YYYY-MM` (mes+año fijo, para que no envejezca) y `source: 'google'`. El texto se muestra igual en ES y EN — no se traduce: una reseña real bajo el nombre del autor debe ser lo que escribió.

```ts
{
  name: 'Nombre Apellido',
  rating: 5,
  text: 'Copia aquí el texto exacto de la reseña…',
  date: '2026-07',
  source: 'google',
},
```

### Actualizar el promedio y total de reseñas
Archivo: `src/data/testimonials.ts`, constante `googleRating`. Lee los valores reales en tu **Google Business Profile** (o buscando el negocio en Google Maps): bajo el nombre aparece el promedio (ej. `5.0`) y entre paréntesis el total (ej. `(13)`). La cabecera de la sección y el `aggregateRating` del schema los leen de aquí:

```ts
export const googleRating = { rating: 5.0, reviewCount: 13 };
```

Sin costo: las reseñas viven en HTML estático (sin API ni facturación de Google Cloud).

### Cambiar número de WhatsApp
Busca `18573899523` en `src/data/tours.ts` y `src/data/i18n.ts` y reemplaza con el nuevo número.

### Cambiar el dominio del sitio
- `astro.config.mjs` → campo `site`
- `src/layouts/BaseLayout.astro` → URLs de canonical y hreflang
- `public/robots.txt` → Sitemap URL

---

## Deploy

Producción corre en **Cloudflare Workers** (migrado desde Cloudflare Pages). El proyecto está conectado a GitHub: cada push a `master` dispara Workers Builds (`npm run build` + `npx wrangler deploy`) en la cuenta `jltoursboston@gmail.com`.
