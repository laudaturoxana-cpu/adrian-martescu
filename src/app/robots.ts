import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/webinar", "/program"],
        disallow: ["/api/", "/multumire"],
      },
    ],
    sitemap: "https://www.adrianmartescu.ro/sitemap.xml",
  };
}
