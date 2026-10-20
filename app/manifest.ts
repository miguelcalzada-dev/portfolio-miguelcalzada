import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miguel Calzada — Software, datos e IA en producción",
    short_name: "Miguel Calzada",
    description:
      "Portfolio de Miguel Ángel Calzada Martín: software, datos e IA en producción.",
    start_url: "/",
    display: "standalone",
    background_color: "#E9E5DA",
    theme_color: "#1937FF",
    lang: "es",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
