import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Build/deploy date is evaluated when Next.js generates this sitemap.
  const lastModified = new Date();

  return [
    {
      url: "https://dowa-labs.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://dowa-labs.com/portfolio",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://dowa-labs.com/services",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
