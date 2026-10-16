import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miguel Angel Calzada Martin - Software Developer",
    short_name: "MC Portfolio",
    description:
      "Portfolio profesional de Miguel Angel Calzada Martin: IA, Big Data, microservicios y DevOps.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0e",
    theme_color: "#0b0d0e",
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
