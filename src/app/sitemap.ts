import type { MetadataRoute } from "next";
import { site, industries } from "@/lib/site";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/virtual-cfo",
    "/bookkeeping",
    "/finance-automation",
    "/dashboards",
    "/dashboard-examples",
    "/finance-operating-system",
    "/services/fpa-forecasting",
    "/services/software-implementation",
    "/services/process-optimization",
    "/services/board-investor-reporting",
    "/industries",
    "/case-studies",
    "/process",
    "/onboarding",
    "/tools",
    "/use-cases",
    "/faq",
    "/team",
    "/careers",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-07"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${site.url}/industries/${i.slug}`,
    lastModified: new Date("2026-06-07"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = posts.map((p) => ({
    url: `${site.url}/resources/${p.slug}`,
    lastModified: new Date(p.date + "T00:00:00"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...resourceRoutes];
}
