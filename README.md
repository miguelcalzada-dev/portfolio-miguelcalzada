# Portfolio — Miguel Ángel Calzada Martín

[![CI](https://github.com/miguelcalzada-dev/portfolio-miguelcalzada/actions/workflows/ci.yml/badge.svg)](https://github.com/miguelcalzada-dev/portfolio-miguelcalzada/actions/workflows/ci.yml)
[![Website](https://img.shields.io/badge/website-miguelcalzada.com-FF3E00?style=flat-square)](https://miguelcalzada.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)

Portfolio profesional de **Miguel Ángel Calzada Martín**, Software Developer especializado en **Inteligencia Artificial**, **Big Data** y arquitecturas de microservicios.

**Sitio en producción:** <https://miguelcalzada.com>

Este repositorio es además el **portal único** del ecosistema: agrupa y sirve bajo un mismo dominio los distintos proyectos desplegados mediante `rewrites` de Next.js.

---

## Tabla de contenidos

- [Características](#características)
- [Proyectos servidos](#proyectos-servidos)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Puesta en marcha](#puesta-en-marcha)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [SEO, accesibilidad y rendimiento](#seo-accesibilidad-y-rendimiento)
- [Despliegue](#despliegue)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Características

- **Diseño brutalista / editorial** propio, con tipografías display y microinteracciones.
- **Dark mode** y paleta accesible basada en variables CSS.
- **Animaciones** con Framer Motion y revelado por scroll.
- **Asistente conversacional** integrado (FAQ guiada por reglas) para responder dudas sobre perfil, experiencia y disponibilidad.
- **Sección de proyectos** con enlaces directos a cada aplicación desplegada.
- **SEO completo**: metadatos, Open Graph con imagen generada dinámicamente, `sitemap.xml`, `robots.txt` y `manifest.webmanifest`.
- **Portal multi-proyecto**: proxy transparente a cada aplicación vía `next.config.ts`.
- **Redirecciones canónicas**: `.es`, `www` y la URL antigua `/portfolio` → dominio principal.

## Proyectos servidos

| Ruta | Proyecto | Descripción |
| --- | --- | --- |
| `/` | Portfolio | Página principal (este repositorio). |
| `/madrid-transit` | [Madrid Transit Pulse](https://github.com/miguelcalzada-dev/madrid-transit-pulse) | Analítica y visualización en tiempo real de Cercanías Madrid. |
| `/sqlsense` | [SQLSense AI](https://github.com/miguelcalzada-dev/sqlsense-ai) | Aprende SQL conversando con IA y SQLite WASM en el navegador. |
| `/ai-lab` | [Applied AI Engineering Showcase](https://github.com/miguelcalzada-dev/applied-ai-engineering-showcase) | Suite de IA aplicada: chat, visión, RAG, NLP y prompt engineering. |

Las URLs de cada destino se centralizan en el objeto `SITES` de [`next.config.ts`](./next.config.ts).

## Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript 5 |
| UI | React 19 |
| Animación | Framer Motion |
| Iconografía | lucide-react |
| Tipografías | `next/font` (DM Serif Display, Space Grotesk, Space Mono) |
| Estilos | CSS nativo + Tailwind CSS 4 (PostCSS) |
| Lint | ESLint 9 (`eslint-config-next`) |
| Deploy | Vercel |

## Arquitectura

```text
Navegador
   │
   ▼
miguelcalzada.com  (Next.js · Vercel)
   ├── /              → portfolio (este repo)
   ├── /madrid-transit → rewrite → madrid-transit-pulse.vercel.app
   ├── /sqlsense       → rewrite → sqlsense-ai (Railway)
   └── /ai-lab         → rewrite → applied-ai-engineering-showcase (Railway)
```

- **Redirecciones de host** (301): `miguelcalzada.es`, `www.miguelcalzada.es` y `www.miguelcalzada.com` → `miguelcalzada.com`.
- **Rewrites** que actúan como reverse proxy, manteniendo la URL del dominio principal en el navegador.
- La página principal se renderiza como componente cliente (`app/page.tsx`) por el uso intensivo de animaciones y estado de UI.

## Puesta en marcha

Requisitos: **Node.js 20+**.

```bash
# 1. Instalar dependencias
npm install

# 2. Entorno de desarrollo
npm run dev
# → http://localhost:3000
```

Build y ejecución en modo producción:

```bash
npm run build
npm start
```

## Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Build de producción. |
| `npm start` | Sirve el build de producción. |
| `npm run lint` | Análisis estático con ESLint. |
| `npm run typecheck` | Verificación de tipos con TypeScript. |

## Estructura del proyecto

```text
app/
  layout.tsx            # Layout raíz, fuentes y metadatos SEO
  page.tsx              # Landing: hero, experiencia, skills, proyectos y chatbot
  opengraph-image.tsx   # Imagen Open Graph generada dinámicamente
  robots.ts             # robots.txt
  sitemap.ts            # sitemap.xml
  manifest.ts           # manifest.webmanifest
  globals.css           # Design system (variables, utilidades)
  icon.svg              # Favicon
next.config.ts          # Redirecciones canónicas y rewrites multi-proyecto
```

## SEO, accesibilidad y rendimiento

- Metadatos completos (Open Graph + Twitter Card) con imagen generada en el servidor.
- `sitemap.xml`, `robots.txt` y `manifest.webmanifest` generados por convención de Next.js.
- Escalado de viewport respetado para no bloquear el zoom del usuario (WCAG 1.4.4).
- `theme-color` y `color-scheme` declarados.
- Fuentes optimizadas y autoalojadas vía `next/font`.
- Favicon SVG ligero y escalable.

## Despliegue

Desplegado en **Vercel** con integración continua: cada push a `main` ejecuta el workflow de [CI](./.github/workflows/ci.yml) (lint, typecheck y build) y, si pasa, se publica automáticamente.

El dominio canónico es `https://miguelcalzada.com`.

## Autor

**Miguel Ángel Calzada Martín** — Software Developer · IA & Big Data

- GitHub: [@miguelcalzada-dev](https://github.com/miguelcalzada-dev)
- LinkedIn: [miguel-calzada](https://www.linkedin.com/in/miguel-calzada-04a19b24b)
- Web: [miguelcalzada.com](https://miguelcalzada.com)

## Licencia

Distribuido bajo licencia **MIT**. Consulta [LICENSE](./LICENSE) para más información.
