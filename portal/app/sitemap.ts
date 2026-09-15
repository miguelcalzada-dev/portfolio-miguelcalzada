import type { MetadataRoute } from "next";

const BASE = "https://miguelcalzada.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/madrid-transit`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/sqlsense`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-lab`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
