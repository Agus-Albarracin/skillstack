const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://skillstack.vercel.app";

export const siteConfig = {
  name: "Skillstack",
  shortName: "Skillstack",
  description:
    "Skills revisadas para construir aplicaciones JavaScript con React, Next.js, Node.js, Express, NestJS, MongoDB y PostgreSQL.",
  url: new URL(configuredUrl).origin,
  locale: "es_AR",
  language: "es",
  author: {
    name: "skillstack",
    url: "https://github.com/Agus-Albarracin",
  },
  repository: "https://github.com/Agus-Albarracin/skillstack",
} as const;
