# Instituto Celsius - Landing Page

Landing page de alta conversión para Instituto Celsius, construida con Astro 4+ y Tailwind CSS.

## Tech Stack

- **Framework:** Astro 6 con TypeScript (modo strict)
- **Estilos:** Tailwind CSS 3
- **Fuentes:** Poppins + Inter (via @fontsource)
- **SEO:** Open Graph, Twitter Cards, JSON-LD (LocalBusiness + FAQPage), sitemap
- **Analytics:** Placeholders para GA4, Meta Pixel y GTM

## Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── FloatingWhatsApp.astro
│   │   │   └── BackToTop.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── About.astro
│   │   │   ├── Services.astro
│   │   │   ├── Reviews.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── Contact.astro
│   │   │   └── CTA.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       └── Container.astro
│   ├── content/
│   │   ├── reviews/
│   │   ├── faq/
│   │   └── services/
│   ├── data/
│   │   └── siteConfig.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Instalación

```bash
npm install
npm run dev    # Desarrollo en localhost:4321
npm run build  # Build para producción
```

## Datos del Sitio

Todos los datos de contacto, links de WhatsApp, horarios y configuración general se encuentran en:

**`src/data/siteConfig.ts`**

Modificá este archivo para actualizar:
- Número de WhatsApp
- Emails de contacto
- Dirección y coordenadas
- Horarios de atención
- Links de redes sociales
- Ratings y estadísticas

## Placeholders a Reemplazar

### Imágenes y Recursos

Buscar `<!-- PLACEHOLDER: -->` en los archivos `.astro` para encontrar todos los lugares donde debés insertar:

1. **Logo del Instituto** - En `Navbar.astro` y `Footer.astro`
2. **Imagen Hero** - En `Hero.astro`
3. **Imagen Sobre Nosotros** - En `About.astro`

### Google Maps

El mapa en `Contact.astro` usa un iframe embed. Actualizá la URL del iframe con la ubicación exacta:
1. Andá a Google Maps
2. Buscá la dirección del instituto
3. Click en "Compartir" > "Incorporar un mapa"
4. Copiá el `src` del iframe

### Analytics

En `Layout.astro` hay placeholders para:
- **GA4:** Descomentar el script de gtag y reemplazar `GA_MEASUREMENT_ID`
- **Meta Pixel:** Descomentar el script de fbevents y reemplazar `META_PIXEL_ID`
- **GTM:** Descomentar el iframe y replace `GTM-XXXXX`

### Reseñas de Google Maps

Las reseñas en `Reviews.astro` están hardcodeadas. Podés:
1. Mantenerlas estáticas y actualizarlas manualmente
2. Migrar a Content Collections y usar archivos `.md` en `src/content/reviews/`

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run astro -- --help` | Ayuda de CLI |

## Deployment

El proyecto genera un sitio estático en `/dist`. Podés deployar a:

- **Vercel:** `vercel --prod`
- **Netlify:** `netlify deploy --prod`
- **GitHub Pages:** Usar GitHub Actions con `npm run build`

### Configuración para Vercel

```bash
npm i -g vercel
vercel --prod
```

### Configuración para Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## SEO Checklist

- [x] Meta tags básicos (title, description)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] sitemap.xml generado automáticamente
- [x] robots.txt
- [x] JSON-LD LocalBusiness
- [x] JSON-LD FAQPage
- [ ] Reemplazar OG image con captura real del sitio
- [ ] Configurar analytics reales
- [ ] Configurar Google Search Console
- [ ] Verificar que todos los links funcionen

## Performance Checklist

- [x] Imágenes optimizadas (usar `<Image />` de astro:assets cuando sea posible)
- [x] Lazy loading de imágenes con `loading="lazy"`
- [x] JavaScript mínimo (solo para interactividad necesaria)
- [x] Fonts con `font-display: swap`
- [x] CSS purgado (Tailwind solo incluye clases usadas)
- [ ] Implementar Service Worker para offline
- [ ] Optimizar imágenes reales (WebP/AVIF)

## Accesibilidad

- [x] HTML semántico
- [x] Contraste de colores verificado
- [x] Focus visible en interactivos
- [x] aria-labels en botones de solo icono
- [ ] Test con axe-core
- [ ] Test con VoiceOver/NVDA

## Personalización Rápida

### Colores

Editá `tailwind.config.mjs`:

```js
colors: {
  primary: '#ffffff',
  secondary: '#4f4cc9',
  accent: '#080705',
}
```

### Tipografías

Editá `src/styles/globals.css` y `tailwind.config.mjs`.

### Contenido de Secciones

Cada sección es un componente independiente en `src/components/sections/`. Podés:
- Reordenar secciones en `src/pages/index.astro`
- Eliminar secciones que no necesites
- Crear nuevas secciones siguiendo el mismo patrón

## Licencia

Propiedad de Instituto Celsius. Todos los derechos reservados.