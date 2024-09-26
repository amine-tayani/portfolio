import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amine-tayani.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://amine-tayani.vercel.app/archive",
      lastModified: new Date(),
    },
    {
      url: "https://amine-tayani.vercel.app/assets/Amine_CV_dernier.pdf",
      lastModified: new Date(),
    },
  ];
}
