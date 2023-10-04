import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://amine-tayani.vercel.app/sitemap.xml",
    host: "https://amine-tayani.vercel.app",
  };
}
