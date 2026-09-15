import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Se sirve bajo https://miguelcalzada.com/portfolio
  basePath: "/portfolio",

  // Las URLs antiguas (portfolio-miguelcalzada.vercel.app) redirigen al dominio nuevo.
  // basePath: false evita el prefijo para no interferir con el proxy del portal.
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://miguelcalzada.com/portfolio",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
