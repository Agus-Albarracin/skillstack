"use client";

import { SearchIcon } from "@/components/icons";
import { categories } from "@/lib/skills";

type SkillFiltersProps = {
  activeCategory: (typeof categories)[number];
  onCategoryChange: (category: (typeof categories)[number]) => void;
  onQueryChange: (query: string) => void;
  query: string;
};

export function SkillFilters({ activeCategory, onCategoryChange, onQueryChange, query }: SkillFiltersProps) {
  return (
    <div className="mt-9 grid gap-3 rounded-2xl bg-mist p-3 lg:grid-cols-[1fr_18rem] lg:items-center">
      <div className="-mx-1 flex gap-1 overflow-x-auto px-1" aria-label="Filtrar por categoría">
        {categories.map((category) => (
          <button
            aria-pressed={activeCategory === category}
            className={activeCategory === category ? "min-h-9 shrink-0 cursor-pointer rounded-full bg-ink px-3.5 text-xs font-medium text-surface" : "min-h-9 shrink-0 cursor-pointer rounded-full px-3.5 text-xs font-medium text-muted transition-colors duration-200 hover:bg-surface hover:text-ink"}
            key={category}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <label className="flex min-h-10 items-center gap-2.5 rounded-full bg-surface px-3.5 text-muted transition-shadow focus-within:ring-2 focus-within:ring-accent-strong focus-within:text-ink">
        <span className="sr-only">Buscar skills</span>
        <SearchIcon />
        <input className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted" onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar una skill" type="search" value={query} />
      </label>
    </div>
  );
}
