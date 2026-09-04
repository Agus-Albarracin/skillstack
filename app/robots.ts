import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const crawlPolicy = {
  allow: "/",
  disallow: ["/api/"],
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...crawlPolicy },
      { userAgent: "Bingbot", ...crawlPolicy },
      {
        userAgent: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"],
        ...crawlPolicy,
      },
      {
        userAgent: ["ChatGPT-User", "Claude-User", "Perplexity-User"],
        ...crawlPolicy,
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "CCBot", "Bytespider"],
        ...crawlPolicy,
      },
      {
        userAgent: ["Google-Extended", "Applebot-Extended"],
        ...crawlPolicy,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
