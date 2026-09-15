import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://miguelcalzada.com/sitemap.xml",
    host: "https://miguelcalzada.com",
  };
}
