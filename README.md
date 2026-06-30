# JL Tours Boston — Landing Page

Sitio web de JL Tours Inc. Construido con Astro 7 + Tailwind CSS v4. Deploy automático en Cloudflare Pages al hacer push a `master`.

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

### Agregar o editar testimonios
Archivo: `src/components/sections/Testimonials.astro`, array `testimonials`.  
Después de actualizar, también cambia `reviewCount` en `src/layouts/BaseLayout.astro` (dentro de `localBusinessSchema.aggregateRating`) para que el schema de Google refleje el número real.

### Cambiar número de WhatsApp
Busca `18573899523` en `src/data/tours.ts` y `src/data/i18n.ts` y reemplaza con el nuevo número.

### Cambiar el dominio del sitio
- `astro.config.mjs` → campo `site`
- `src/layouts/BaseLayout.astro` → URLs de canonical y hreflang
- `public/robots.txt` → Sitemap URL

---

## Deploy

El proyecto está conectado a GitHub. Cada push a `master` dispara un build y deploy automático en Cloudflare Pages (cuenta `jltoursboston@gmail.com`).
