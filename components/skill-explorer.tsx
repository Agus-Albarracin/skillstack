"use client";

import { useMemo, useState } from "react";
import { categories, skills, type SkillCategory } from "@/lib/skills";

const categoryAbbreviation: Record<SkillCategory, string> = {
  Frontend: "FE",
  Backend: "BE",
  Datos: "DB",
  Infraestructura: "DX",
  Calidad: "QA",
  Arquitectura: "AR",
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}

export function SkillExplorer() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todas");
  const [query, setQuery] = useState("");

  const visibleSkills = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    return skills.filter((skill) => {
      const belongsToCategory =
        activeCategory === "Todas" || skill.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [skill.name, skill.area, skill.description, skill.category]
          .join(" ")
          .toLocaleLowerCase("es")
          .includes(normalizedQuery);

      return belongsToCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="catalog" id="catalogo" aria-labelledby="catalog-title">
      <div className="catalog-heading">
        <div>
          <div className="section-kicker">El catálogo</div>
          <h2 id="catalog-title">Una skill para cada capa.</h2>
        </div>
        <p>
          Fuentes abiertas, criterios claros y cobertura completa para proyectos
          que tienen que crecer sin perder calidad.
        </p>
      </div>

      <div className="catalog-tools">
        <div className="filters" aria-label="Filtrar por categoría">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "active" : undefined}
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="search-field">
          <span className="sr-only">Buscar skills</span>
          <SearchIcon />
          <input
            type="search"
            placeholder="Buscar una skill..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {visibleSkills.length} {visibleSkills.length === 1 ? "resultado" : "resultados"}
      </p>

      {visibleSkills.length > 0 ? (
        <div className="skill-grid">
          {visibleSkills.map((skill, index) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-card-top">
                <span className={`skill-icon skill-icon-${skill.category.toLowerCase()}`}>
                  {categoryAbbreviation[skill.category]}
                </span>
                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <p className="skill-area">{skill.area}</p>
                <h3>{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
              <a href={skill.source} target="_blank" rel="noreferrer">
                Ver repositorio <ArrowIcon />
                <span className="sr-only"> de {skill.name}</span>
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>Sin coincidencias</span>
          <h3>Probá con otra búsqueda.</h3>
          <p>No encontramos una skill con esos criterios.</p>
          <button type="button" onClick={() => { setQuery(""); setActiveCategory("Todas"); }}>
            Limpiar filtros
          </button>
        </div>
      )}
    </section>
  );
}
