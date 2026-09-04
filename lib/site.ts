const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gsfs.vercel.app";

export const siteConfig = {
  name: "Skillstack",
  shortName: "Skillstack",
  description:
    "Guía curada de skills open source para diseñar, construir, probar y desplegar aplicaciones full stack.",
  url: new URL(configuredUrl).origin,
  locale: "es_AR",
  language: "es",
  author: {
    name: "gaac",
    url: "https://github.com/Agus-Albarracin",
  },
  repository: "https://github.com/Agus-Albarracin/GSFS",
} as const;
