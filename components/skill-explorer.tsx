"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon, SearchIcon } from "@/components/icons";
import { categories, skills, type SkillCategory } from "@/lib/skills";

const categoryStyles: Record<SkillCategory, { marker: string; code: string }> = {
  Frontend: { marker: "bg-accent", code: "FE" },
  Backend: { marker: "bg-accent-strong", code: "BE" },
  Datos: { marker: "bg-gold", code: "DB" },
  Infraestructura: { marker: "bg-violet", code: "DX" },
  Calidad: { marker: "bg-coral", code: "QA" },
  Arquitectura: { marker: "bg-aqua", code: "AR" },
};

function getInstallCommand(source: string) {
  return `npx skills add ${source} --copy`;
}

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

  function clearFilters() {
    setQuery("");
    setActiveCategory("Todas");
  }

  async function copyCommand(name: string, source: string) {
    try {
      await navigator.clipboard.writeText(getInstallCommand(source));
      setCopiedSkill(name);
      setCopyError(false);
    } catch {
      setCopiedSkill(null);
      setCopyError(true);
    }
  }

  return (
    <section className="bg-canvas px-6 py-20 sm:px-8 sm:py-28 lg:px-12" id="catalogo" aria-labelledby="catalog-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-accent">Catálogo curado</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink sm:text-6xl" id="catalog-title">
              Una guía precisa para cada capa del sistema.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            Las skills nativas expresan el criterio de Skillstack. Las vendorized conservan la voz, licencia y revisión de su autor.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_20rem] lg:items-center">
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                className={activeCategory === category
                  ? "min-h-11 shrink-0 cursor-pointer rounded-md bg-ink px-4 text-sm font-medium text-surface"
                  : "min-h-11 shrink-0 cursor-pointer rounded-md border border-line px-4 text-sm font-medium text-muted transition-colors duration-200 hover:border-ink hover:bg-surface hover:text-ink"}
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex min-h-12 w-full items-center gap-3 border-b border-line px-1 text-muted transition-colors focus-within:border-accent-strong focus-within:text-ink">
            <span className="sr-only">Buscar skills</span>
            <SearchIcon />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              type="search"
              placeholder="Buscar una skill"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 text-sm text-muted" aria-live="polite">
          <p>{visibleSkills.length} {visibleSkills.length === 1 ? "resultado" : "resultados"}</p>
          <p>{copyError ? "No pudimos copiar el comando. Abrí la fuente e intentalo otra vez." : copiedSkill ? `Comando de ${copiedSkill} copiado.` : ""}</p>
        </div>

        {visibleSkills.length > 0 ? (
          <div className="mt-5 border-t border-line">
            {visibleSkills.map((skill) => {
              const style = categoryStyles[skill.category];
              const isNative = skill.source.includes("Agus-Albarracin/skillstack");

              return (
                <article className="content-auto group grid gap-7 border-b border-line py-8 transition-colors duration-200 hover:bg-surface/65 sm:px-5 lg:grid-cols-[5rem_1fr_13rem] lg:items-center" key={skill.name}>
                  <div className="flex items-center gap-3 lg:block">
                    <span className={`block size-3 rounded-full ${style.marker}`} aria-hidden="true" />
                    <span className="text-sm text-muted lg:mt-5 lg:block">{style.code}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <span className="text-accent">{skill.area}</span>
                      <span className="text-muted">{isNative ? "native" : "vendorized"}</span>
                    </div>
                    <h3 className="mt-3 break-words text-xl font-semibold tracking-tight text-ink">{skill.name}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{skill.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 lg:justify-end">
                    <button className="min-h-11 cursor-pointer text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-ink" type="button" onClick={() => copyCommand(skill.name, skill.source)}>
                      {copiedSkill === skill.name ? "Copiado" : "Copiar comando"}
                    </button>
                    <a className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition-colors duration-200 hover:text-ink" href={skill.source} target="_blank" rel="noreferrer">
                      Abrir fuente <ArrowUpRightIcon />
                      <span className="sr-only"> de {skill.name}</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 border-y border-line py-20 text-center sm:py-28">
            <p className="text-sm text-coral">Sin coincidencias</p>
            <h3 className="mt-4 font-display text-3xl text-ink">Probá con otra búsqueda.</h3>
            <p className="mt-3 text-muted">No encontramos una skill con esos criterios.</p>
            <button className="mt-7 min-h-11 cursor-pointer rounded-md bg-ink px-6 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-accent-strong" type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
