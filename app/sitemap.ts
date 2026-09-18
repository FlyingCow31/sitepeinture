// app/sitemap.ts
import type { MetadataRoute } from "next"

const SITE_URL = "https://stylhome.fr"

export default function sitemap(): MetadataRoute.Sitemap {
     const routes = ["", "/services", "/galerie", "/contact", "/mentions"]

     return routes.map((route) => ({
          url: `${SITE_URL}${route}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: route === "" ? 1 : 0.7,
     }))
}
