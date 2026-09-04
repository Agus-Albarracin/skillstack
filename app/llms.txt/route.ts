import { siteConfig } from "@/lib/site";
import { skills } from "@/lib/skills";

export const dynamic = "force-static";

export function GET() {
  const entries = skills.map(
    (skill) => `- [${skill.name}](${skill.source}): ${skill.description}`,
  );
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Catálogo",
    ...entries,
    "",
    `## Código fuente`,
    `- [Repositorio Skillstack](${siteConfig.repository})`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}
