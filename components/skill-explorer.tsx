"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon, SearchIcon } from "@/components/icons";
import { categories, skills, type SkillCategory } from "@/lib/skills";

const categoryStyles: Record<SkillCategory, { badge: string; code: string }> = {
  Frontend: { badge: "bg-accent", code: "FE" },
  Backend: { badge: "bg-aqua", code: "BE" },
  Datos: { badge: "bg-amber-200", code: "DB" },
  Infraestructura: { badge: "bg-indigo-200", code: "DX" },
  Calidad: { badge: "bg-orange-200", code: "QA" },
  Arquitectura: { badge: "bg-purple-200", code: "AR" },
};

export function SkillExplorer() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todas");
  const [query, setQuery] = useState("");

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

  return (
    <section className="bg-canvas px-6 py-20 sm:px-8 sm:py-28 lg:px-12" id="catalogo" aria-labelledby="catalog-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold tracking-widest text-violet uppercase">Directorio de skills</p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-none font-semibold tracking-tighter text-ink sm:text-6xl">
              La herramienta correcta para cada capa.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            Explorá una selección open source para tomar mejores decisiones en frontend, backend, datos, infraestructura y calidad.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                className={activeCategory === category
                  ? "min-h-11 shrink-0 cursor-pointer rounded-full bg-ink px-5 text-sm font-semibold text-surface"
                  : "min-h-11 shrink-0 cursor-pointer rounded-full border border-line bg-surface px-5 text-sm font-semibold text-muted transition-colors hover:border-ink hover:text-ink"}
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex min-h-12 w-full items-center gap-3 rounded-full border border-line bg-surface px-5 text-muted focus-within:border-violet focus-within:ring-4 focus-within:ring-violet/15 lg:max-w-xs">
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

        <p className="mt-8 font-mono text-xs tracking-wider text-muted uppercase" aria-live="polite">
          {visibleSkills.length} {visibleSkills.length === 1 ? "resultado" : "resultados"}
        </p>

        {visibleSkills.length > 0 ? (
          <div className="mt-4 grid overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {visibleSkills.map((skill, index) => {
              const style = categoryStyles[skill.category];

              return (
                <article className="content-auto -mb-px -mr-px flex min-h-96 flex-col border-r border-b border-line bg-surface p-7 transition-colors hover:bg-accent/15 sm:p-8" key={skill.name}>
                  <div className="flex items-start justify-between">
                    <span className={`grid size-12 place-items-center rounded-2xl font-mono text-xs font-bold text-ink ${style.badge}`}>
                      {style.code}
                    </span>
                    <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-10">
                    <p className="text-xs font-bold tracking-widest text-violet uppercase">{skill.area}</p>
                    <h3 className="mt-3 overflow-hidden font-mono text-lg leading-6 font-semibold tracking-tight text-ink">{skill.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted">{skill.description}</p>
                  </div>
                  <a className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-5 text-sm font-bold text-ink transition-colors hover:text-violet" href={skill.source} target="_blank" rel="noreferrer">
                    Ver repositorio <ArrowUpRightIcon />
                    <span className="sr-only"> de {skill.name}</span>
                  </a>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 rounded-3xl border border-line bg-surface px-6 py-20 text-center sm:py-28">
            <p className="text-xs font-bold tracking-widest text-coral uppercase">Sin coincidencias</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink">Probá con otra búsqueda.</h3>
            <p className="mt-3 text-muted">No encontramos una skill con esos criterios.</p>
            <button className="mt-7 min-h-11 cursor-pointer rounded-full bg-ink px-6 text-sm font-bold text-surface" type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
