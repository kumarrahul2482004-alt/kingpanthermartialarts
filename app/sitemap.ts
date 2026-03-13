import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kingpantheracademy.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
