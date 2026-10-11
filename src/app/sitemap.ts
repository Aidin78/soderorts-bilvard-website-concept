import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { siteUrl } from "@/lib/seo";

const staticPaths = ["", "/tjanster", "/tjanster/ovriga-tjanster", "/priser", "/boka", "/om-oss", "/kontakt", "/integritet"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPaths, ...services.map((service) => `/tjanster/${service.slug}`)].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/tjanster/") || path === "/priser" ? 0.8 : 0.6,
  }));
}
