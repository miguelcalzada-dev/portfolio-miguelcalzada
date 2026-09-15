/** @type {import('next').NextConfig} */

// Origenes de cada proyecto desplegado. Si alguno cambia de URL, se actualiza aqui.
const SITES = {
  portfolio: "https://portfolio-miguelcalzada.vercel.app",
  madridTransit: "https://madrid-transit-pulse.vercel.app",
  sqlsense: "https://sqlsense-ai-production.up.railway.app",
  aiLab: "https://web-production-2ec10.up.railway.app",
};

const nextConfig = {
  reactStrictMode: true,

  // Redirecciones de host: .es y www -> dominio canonico .com
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "miguelcalzada.es" }],
        destination: "https://miguelcalzada.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.miguelcalzada.es" }],
        destination: "https://miguelcalzada.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.miguelcalzada.com" }],
        destination: "https://miguelcalzada.com/:path*",
        permanent: true,
      },
    ];
  },

  // Proxy de rutas hacia cada proyecto (path-based routing / Multi-Zones)
  async rewrites() {
    return [
      // Portfolio
      { source: "/portfolio", destination: `${SITES.portfolio}/portfolio` },
      { source: "/portfolio/:path*", destination: `${SITES.portfolio}/portfolio/:path*` },

      // Madrid Transit Pulse (frontend Next.js). La API/WebSocket va directa al backend.
      { source: "/madrid-transit", destination: `${SITES.madridTransit}/madrid-transit` },
      { source: "/madrid-transit/:path*", destination: `${SITES.madridTransit}/madrid-transit/:path*` },

      // SQLSense AI
      { source: "/sqlsense", destination: `${SITES.sqlsense}/sqlsense` },
      { source: "/sqlsense/:path*", destination: `${SITES.sqlsense}/sqlsense/:path*` },

      // Applied AI Engineering Showcase (FastAPI): se elimina el prefijo hacia el origen.
      { source: "/ai-lab", destination: `${SITES.aiLab}/` },
      { source: "/ai-lab/:path*", destination: `${SITES.aiLab}/:path*` },
    ];
  },
};

module.exports = nextConfig;
