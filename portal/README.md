# miguelcalzada-portal

Portal de proyectos de Miguel Angel Calzada. Home con el listado de proyectos y
proxy de rutas hacia cada despliegue.

## Rutas

| Ruta | Destino |
| --- | --- |
| `/` | Home con listado (este proyecto) |
| `/portfolio` | portfolio-miguelcalzada (Vercel) |
| `/madrid-transit` | madrid-transit-pulse (Vercel) |
| `/sqlsense` | sqlsense-ai (Railway) |
| `/ai-lab` | applied-ai-engineering-showcase (Railway) |

Los destinos se configuran en `next.config.js` (objeto `SITES`).

## Dominios

- Canonico: `miguelcalzada.com`
- `miguelcalzada.es`, `www.miguelcalzada.es` y `www.miguelcalzada.com` redirigen con 301 a `miguelcalzada.com`.
- `miguelcalzada.com` y `miguelcalzada.es` sirven directamente este home.
