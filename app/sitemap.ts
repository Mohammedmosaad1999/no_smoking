import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reset-your-breath.vercel.app";
  const locales = ["en", "ar"];
  const routes = [
    "",
    "/science",
    "/community",
    "/products",
    "/campaign/importance",
    "/campaign/calculator",
    "/campaign/signup",
    "/campaign/assessment",
    "/campaign/progress",
    "/campaign/treatment",
    "/campaign/treatment/psychological",
    "/campaign/treatment/medical",
    "/campaign/treatment/nrt",
    "/campaign/treatment/mohp",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add homepage (root)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1.0,
  });

  // Add localized routes
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route.includes("progress") || route.includes("signup") ? "monthly" : "weekly",
        priority: route === "" ? 0.9 : 0.7,
      });
    }
  }

  return sitemapEntries;
}
