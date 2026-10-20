import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miguel Angel Calzada Martin - Software Developer",
    short_name: "MC Portfolio",
    description:
      "Portfolio profesional de Miguel Angel Calzada Martin: IA, Big Data, microservicios y DevOps.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#FF3E00",
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
