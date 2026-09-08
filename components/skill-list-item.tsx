"use client";

import { ArrowUpRightIcon } from "@/components/icons";
import type { Skill, SkillCategory } from "@/lib/skills";

const categoryStyles: Record<SkillCategory, { surface: string; code: string }> = {
  Frontend: { surface: "skill-surface-frontend", code: "FE" },
  Backend: { surface: "skill-surface-backend", code: "BE" },
  Datos: { surface: "skill-surface-data", code: "DB" },
  Infraestructura: { surface: "skill-surface-infrastructure", code: "DX" },
  Calidad: { surface: "skill-surface-quality", code: "QA" },
  Arquitectura: { surface: "skill-surface-architecture", code: "AR" },
};

type SkillListItemProps = {
  copied: boolean;
  isLast: boolean;
  onCopy: (skill: Skill) => void;
  skill: Skill;
};

export function getInstallCommand(source: string) {
  return `npx skills add ${source} --copy`;
}

export function SkillListItem({ copied, isLast, onCopy, skill }: SkillListItemProps) {
  const { surface, code } = categoryStyles[skill.category];
  const isNative = skill.source.includes("Agus-Albarracin/skillstack");

  return (
    <li className={`list-reveal skill-list-row ${surface} relative isolate grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-line px-2 py-2 lg:grid-cols-[3rem_minmax(10rem,0.8fr)_minmax(12rem,1.2fr)_11rem] lg:gap-4 lg:px-3`} data-reveal-item>
      <span className="skill-card-plane" aria-hidden="true" />
      <span className="reveal-rule" aria-hidden="true" />
      {isLast ? <span className="list-end-light" aria-hidden="true" /> : null}
      <div className="hidden items-center lg:flex" data-reveal-part="index">
        <span className="font-mono text-[0.625rem] text-muted">{code}</span>
      </div>
      <div className="min-w-0" data-reveal-part="content">
        <div className="flex min-w-0 items-center gap-2 text-[0.625rem] leading-none">
          <span className="truncate font-medium text-accent">{skill.area}</span>
          <span className="skill-provenance shrink-0">{isNative ? "native" : "vendorized"}</span>
        </div>
        <h3 className="mt-1 truncate text-sm leading-tight font-semibold tracking-[-0.025em] text-ink sm:text-base">{skill.name}</h3>
      </div>
      <div className="hidden min-w-0 lg:block" data-reveal-part="description">
        <p className="truncate text-xs leading-4 text-muted">{skill.description}</p>
      </div>
      <div className="flex items-center justify-end gap-2" data-reveal-part="actions">
        <button className="skill-card-button min-h-10 cursor-pointer rounded-full bg-ink px-3 text-[0.6875rem] font-semibold text-surface hover:bg-accent-strong" onClick={() => onCopy(skill)} type="button">{copied ? "Copiado" : "Copiar"}</button>
        <a className="skill-card-link inline-flex min-h-10 items-center gap-1 text-[0.6875rem] font-semibold text-muted hover:text-ink" href={skill.source} rel="noreferrer" target="_blank"><span className="hidden lg:inline">Fuente</span><ArrowUpRightIcon /><span className="sr-only">Fuente de {skill.name}</span></a>
      </div>
    </li>
  );
}
