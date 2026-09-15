import type { NextConfig } from "next";

// Origenes de cada proyecto desplegado. Si alguno cambia de URL, se actualiza aqui.
const SITES = {
  madridTransit: "https://madrid-transit-pulse.vercel.app",
  sqlsense: "https://sqlsense-ai-production.up.railway.app",
  aiLab: "https://web-production-2ec10.up.railway.app",
};

const nextConfig: NextConfig = {
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
      // URL antigua del portfolio cuando vivia bajo /portfolio
      { source: "/portfolio", destination: "/", permanent: true },
      { source: "/portfolio/:path*", destination: "/:path*", permanent: true },
    ];
  },

  // Proxy de rutas hacia cada proyecto
  async rewrites() {
    return [
      { source: "/madrid-transit", destination: `${SITES.madridTransit}/madrid-transit` },
      { source: "/madrid-transit/:path*", destination: `${SITES.madridTransit}/madrid-transit/:path*` },

      { source: "/sqlsense", destination: `${SITES.sqlsense}/sqlsense` },
      { source: "/sqlsense/:path*", destination: `${SITES.sqlsense}/sqlsense/:path*` },

      { source: "/ai-lab", destination: `${SITES.aiLab}/ai-lab/` },
      { source: "/ai-lab/:path*", destination: `${SITES.aiLab}/ai-lab/:path*` },
    ];
  },
};

export default nextConfig;
