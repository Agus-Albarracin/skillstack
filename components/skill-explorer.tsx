"use client";

import { useMemo, useState } from "react";
import { SkillFilters } from "@/components/skill-filters";
import { getInstallCommand, SkillListItem } from "@/components/skill-list-item";
import { useScrollReveal } from "@/components/use-scroll-reveal";
import { categories, skills, type Skill } from "@/lib/skills";

export function SkillExplorer() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todas");
  const [query, setQuery] = useState("");
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);
  const [copyError, setCopyError] = useState(false);

  const visibleSkills = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    return skills.filter((skill) => {
      const belongsToCategory = activeCategory === "Todas" || skill.category === activeCategory;
      const matchesQuery = !normalizedQuery || [skill.name, skill.area, skill.description]
        .join(" ")
        .toLocaleLowerCase("es")
        .includes(normalizedQuery);

      return belongsToCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const contentKey = visibleSkills.map((skill) => skill.name).join("|");
  const listRef = useScrollReveal<HTMLOListElement>(contentKey);

  async function copyCommand(skill: Skill) {
    try {
      await navigator.clipboard.writeText(getInstallCommand(skill.source));
      setCopiedSkill(skill.name);
      setCopyError(false);
    } catch {
      setCopiedSkill(null);
      setCopyError(true);
    }
  }

  function clearFilters() {
    setQuery("");
    setActiveCategory("Todas");
  }

  return (
    <section className="bg-surface px-6 py-18 sm:px-8 sm:py-24 lg:px-12" id="catalogo" aria-labelledby="catalog-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-medium text-accent">Catálogo curado</p>
            <h2
              className="mt-4 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink sm:text-5xl"
              id="catalog-title"
            >
              Conocimiento que entra en foco.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted lg:justify-self-end">
            Una lista continua para recorrer el stack completo. Cada skill aparece por capas y conserva la información necesaria para usarla.
          </p>
        </div>

        <SkillFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onQueryChange={setQuery}
          query={query}
        />

        <p className="mt-5 text-xs text-muted" aria-live="polite">
          {copyError
            ? "No pudimos copiar el comando. Abrí la fuente e intentalo otra vez."
            : copiedSkill
              ? `Comando de ${copiedSkill} copiado.`
              : `${visibleSkills.length} ${visibleSkills.length === 1 ? "skill disponible" : "skills disponibles"}`}
        </p>

        {visibleSkills.length > 0 ? (
          <ol
            aria-label="Listado desplazable de skills, con un máximo de cinco elementos visibles"
            className="skill-list mt-6 border-y border-line"
            ref={listRef}
            tabIndex={0}
          >
            {visibleSkills.map((skill, index) => (
              <SkillListItem
                copied={copiedSkill === skill.name}
                index={index}
                isLast={index === visibleSkills.length - 1}
                key={skill.name}
                onCopy={copyCommand}
                skill={skill}
              />
            ))}
          </ol>
        ) : (
          <div className="mt-8 border-y border-line py-16 text-center">
            <p className="text-xs text-coral">Sin coincidencias</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">Probá con otra búsqueda.</h3>
            <p className="mt-2 text-sm text-muted">No encontramos una skill con esos criterios.</p>
            <button
              className="mt-6 min-h-10 cursor-pointer rounded-full bg-ink px-5 text-xs font-semibold text-surface transition-colors duration-200 hover:bg-accent-strong"
              onClick={clearFilters}
              type="button"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
