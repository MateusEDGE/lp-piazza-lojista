import type { MetadataRoute } from "next";
import { HUBS } from "@/config/lp";
import { SITE_URL } from "@/lib/site-url";

/**
 * As páginas desta landing: a de hubs e a de cada vocação.
 *
 * São poucas e são todas, porque o domínio é da landing e de mais nada. O
 * painel do Keystatic e a API dele ficam de fora pelo robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...HUBS.map((h) => ({
      url: `${SITE_URL}/${h.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
