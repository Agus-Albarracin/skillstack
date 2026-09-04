export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Datos"
  | "Infraestructura"
  | "Calidad"
  | "Arquitectura";

export type Skill = {
  name: string;
  category: SkillCategory;
  area: string;
  description: string;
  source: string;
  featured?: boolean;
};

export const categories: Array<"Todas" | SkillCategory> = [
  "Todas",
  "Frontend",
  "Backend",
  "Datos",
  "Infraestructura",
  "Calidad",
  "Arquitectura",
];

export const skills: Skill[] = [
  {
    name: "vercel-react-best-practices",
    category: "Frontend",
    area: "React / Next.js",
    description:
      "Performance, Server Components, data fetching, bundles y refactors para React y Next.js.",
    source:
      "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices",
    featured: true,
  },
  {
    name: "tailwind-best-practices",
    category: "Frontend",
    area: "Tailwind CSS",
    description:
      "Clases mantenibles, design tokens, variantes, configuración y refactors con Tailwind.",
    source:
      "https://github.com/evilmartians/agent-skills/tree/main/skills/tailwind-best-practices",
    featured: true,
  },
  {
    name: "frontend-ui-engineering",
    category: "Frontend",
    area: "Accesibilidad / UX",
    description:
      "Interfaces responsive y accesibles con WCAG, teclado, foco, contraste y estados completos.",
    source:
      "https://github.com/addyosmani/agent-skills/tree/main/skills/frontend-ui-engineering",
  },
  {
    name: "nestjs-best-practices",
    category: "Backend",
    area: "NestJS",
    description:
      "Módulos, inyección de dependencias, seguridad, errores, testing, APIs y performance.",
    source:
      "https://github.com/Kadajett/agent-nestjs-skills/tree/main/skills/nestjs-best-practices",
    featured: true,
  },
  {
    name: "api-and-interface-design",
    category: "Backend",
    area: "APIs y contratos",
    description:
      "Diseño de recursos HTTP, validación, errores, paginación, versionado y compatibilidad.",
    source:
      "https://github.com/addyosmani/agent-skills/tree/main/skills/api-and-interface-design",
  },
  {
    name: "speakeasy:writing-openapi-specs",
    category: "Backend",
    area: "OpenAPI",
    description:
      "Creación y mejora de contratos OpenAPI para documentación, SDKs y contract testing.",
    source:
      "https://github.com/speakeasy-api/skills/tree/main/skills/writing-openapi-specs",
  },
  {
    name: "postgres-best-practices",
    category: "Datos",
    area: "PostgreSQL",
    description:
      "Schema, migraciones, índices, SQL y optimización de consultas PostgreSQL.",
    source:
      "https://github.com/neondatabase/postgres-skills/tree/main/skills/postgres-best-practices",
  },
  {
    name: "mysql",
    category: "Datos",
    area: "MySQL",
    description:
      "Schema, índices InnoDB, tuning, transacciones, migraciones, locks y replicación.",
    source:
      "https://github.com/planetscale/database-skills/tree/main/skills/mysql",
  },
  {
    name: "mongodb-schema-design",
    category: "Datos",
    area: "MongoDB",
    description:
      "Modelado documental, relaciones, validación, TTL, migraciones y anti-patrones.",
    source:
      "https://github.com/mongodb/agent-skills/tree/main/plugins/mongodb/skills/mongodb-schema-design",
  },
  {
    name: "mongodb-query-optimizer",
    category: "Datos",
    area: "MongoDB",
    description:
      "Índices, explain, diagnóstico de consultas lentas y optimización de performance.",
    source:
      "https://github.com/mongodb/agent-skills/tree/main/plugins/mongodb/skills/mongodb-query-optimizer",
  },
  {
    name: "mongodb-connection",
    category: "Datos",
    area: "MongoDB",
    description: "Configuración segura y diagnóstico de conexiones MongoDB.",
    source:
      "https://github.com/mongodb/agent-skills/tree/main/plugins/mongodb/skills/mongodb-connection",
  },
  {
    name: "mongodb-natural-language-querying",
    category: "Datos",
    area: "MongoDB Atlas",
    description:
      "Consultas find y pipelines de agregación de solo lectura en lenguaje natural.",
    source:
      "https://github.com/mongodb/agent-skills/tree/main/plugins/mongodb-atlas/skills/mongodb-natural-language-querying",
  },
  {
    name: "prisma-client-api",
    category: "Datos",
    area: "Prisma ORM",
    description:
      "Consultas, relaciones, transacciones y SQL crudo con Prisma Client.",
    source:
      "https://github.com/prisma/skills/tree/main/skills/prisma-client-api",
  },
  {
    name: "redis-core",
    category: "Datos",
    area: "Redis",
    description:
      "Estructuras Redis, claves, TTL, caché, sesiones, atomicidad, Streams y Pub/Sub.",
    source:
      "https://github.com/redis/agent-skills/tree/main/skills/redis-core",
  },
  {
    name: "docker-development",
    category: "Infraestructura",
    area: "Docker",
    description:
      "Dockerfiles, Compose, multi-stage builds, seguridad, Bake y pruebas de CI/CD.",
    source:
      "https://github.com/netresearch/docker-development-skill/tree/main/skills/docker-development",
  },
  {
    name: "github-project",
    category: "Infraestructura",
    area: "GitHub",
    description:
      "Issues, ramas, pull requests, reviews, Actions, permisos, secretos y releases.",
    source:
      "https://github.com/netresearch/github-project-skill/tree/main/skills/github-project",
  },
  {
    name: "otel-instrumentation",
    category: "Infraestructura",
    area: "Observabilidad",
    description:
      "Logs, métricas, trazas distribuidas, convenciones semánticas y pipelines OTLP.",
    source:
      "https://github.com/dash0hq/agent-skills/tree/main/skills/otel-instrumentation",
  },
  {
    name: "test-driven-development",
    category: "Calidad",
    area: "Testing / QA",
    description:
      "Flujo TDD desde el comportamiento y el test fallido hasta la evidencia final.",
    source:
      "https://github.com/addyosmani/agent-skills/tree/main/skills/test-driven-development",
  },
  {
    name: "playwright-skill",
    category: "Calidad",
    area: "Testing E2E",
    description:
      "Pruebas E2E, API, componentes, regresión visual, accesibilidad, mocks y traces.",
    source: "https://github.com/testdino-hq/playwright-skill",
  },
  {
    name: "code-security",
    category: "Calidad",
    area: "Seguridad full stack",
    description:
      "CORS, XSS, CSP, autenticación, inputs, inyecciones, SSRF, secretos y dependencias.",
    source: "https://github.com/semgrep/skills/tree/main/skills/code-security",
    featured: true,
  },
  {
    name: "optimise-seo",
    category: "Calidad",
    area: "SEO técnico",
    description:
      "Sitemaps, robots, metadatos, canonicals, datos estructurados, indexación y Core Web Vitals en Next.js.",
    source:
      "https://github.com/mblode/agent-skills/tree/main/skills/optimise-seo",
  },
  {
    name: "build-reliable-messaging",
    category: "Arquitectura",
    area: "Mensajería confiable",
    description:
      "Outbox transaccional, consumidores idempotentes, RabbitMQ, reintentos y replays.",
    source:
      "https://github.com/sandylib/reliable-messaging-agent-skills/tree/main/skills/build-reliable-messaging",
  },
];

export const skillCountByCategory = categories
  .filter((category) => category !== "Todas")
  .reduce<Record<string, number>>((totals, category) => {
    totals[category] = skills.filter((skill) => skill.category === category).length;
    return totals;
  }, {});
