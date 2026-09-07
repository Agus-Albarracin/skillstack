import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { SkillExplorer } from "@/components/skill-explorer";
import { skills } from "@/lib/skills";

const workflow = [
  { title: "Elegí una skill", description: "Encontrá una guía que corresponde al problema que tenés delante." },
  { title: "Revisá su contexto", description: "Entendé su alcance, procedencia, revisión y licencia antes de llevarla al proyecto." },
  { title: "Copiá y trabajá", description: "Usá el comando listo para incorporar el conocimiento donde el agente lo necesita." },
] as const;

const technologies = ["Next.js", "React", "Tailwind", "PostgreSQL", "Docker", "Playwright"] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-canvas text-ink" id="contenido">
      <JsonLd />
      <section className="hero-field relative isolate border-b border-line/70" id="inicio">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
          <div className="hero-copy relative z-10">
            <p className="text-sm font-medium text-accent">Skillstack</p>
            <h1 className="mt-7 max-w-2xl text-5xl leading-[0.94] font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[5.25rem]">El criterio adecuado para el trabajo que viene.</h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted">Una biblioteca operativa de skills para elegir mejor, conservar el contexto y construir software con agentes sin depender de memoria suelta.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-13 items-center justify-center rounded-full bg-ink px-6 font-semibold text-surface transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong" href="#catalogo">Explorar skills</a>
              <a className="inline-flex min-h-13 items-center justify-center rounded-full border border-line bg-surface/60 px-6 font-semibold transition-[border-color,background-color] duration-200 hover:border-ink hover:bg-surface" href="#metodo">Ver el método</a>
            </div>
            <dl className="mt-14 flex flex-wrap gap-x-9 gap-y-5 text-sm text-muted">
              <div><dt className="text-2xl font-semibold tracking-tight text-ink">{skills.length}</dt><dd className="mt-1">skills revisadas</dd></div>
              <div><dt className="text-2xl font-semibold tracking-tight text-ink">6</dt><dd className="mt-1">capas del stack</dd></div>
              <div><dt className="text-2xl font-semibold tracking-tight text-ink">1</dt><dd className="mt-1">comando para empezar</dd></div>
            </dl>
          </div>

          <div className="hero-stage relative mx-auto w-full max-w-2xl" aria-label="Vista previa de una skill de Skillstack" role="img">
            <div className="hero-horizon" aria-hidden="true" />
            <div className="hero-orb hero-orb-one" aria-hidden="true" />
            <div className="hero-orb hero-orb-two" aria-hidden="true" />
            <div className="hero-workspace relative overflow-hidden rounded-[2rem] border border-white/65 bg-[#f7f8f2]/90 p-4 shadow-workspace backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-line/75 pb-4 text-sm">
                <div className="flex items-center gap-3 font-medium"><Image alt="" className="size-8 rounded-lg object-cover" height={32} src="/icon-skillstack.png" width={32} /> Archivo activo</div>
                <span className="rounded-full bg-mist px-3 py-1 text-xs text-accent">revisado</span>
              </div>
              <div className="grid gap-4 py-5 sm:grid-cols-[9rem_1fr]">
                <div className="rounded-2xl bg-ink p-5 text-surface"><p className="text-xs text-surface/55">Skill</p><p className="mt-6 text-lg font-semibold tracking-tight">frontend-<br />design</p><p className="mt-9 text-xs text-aqua">native</p></div>
                <div className="rounded-2xl border border-line/75 bg-surface p-5"><p className="text-sm font-medium text-accent">Dirección visual</p><p className="mt-4 max-w-sm text-xl leading-snug font-semibold tracking-tight">Una identidad propia antes de construir componentes.</p><div className="mt-7 flex items-center gap-2 text-sm text-muted"><span className="size-2 rounded-full bg-gold" aria-hidden="true" /> Contexto, límites y referencias</div></div>
              </div>
              <div className="hero-command rounded-2xl bg-[#e1e9e1] p-4"><p className="text-xs font-medium text-accent">Listo para tu proyecto</p><code className="mt-3 block overflow-x-auto whitespace-nowrap font-mono text-xs text-ink sm:text-sm">npx skills add skillstack --skill frontend-design --copy</code></div>
            </div>
          </div>
        </div>
      </section>

      <SkillExplorer />


      <section className="section-reveal bg-ink px-6 py-20 text-surface sm:px-8 sm:py-28 lg:px-12" aria-labelledby="closing-title"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-medium text-aqua">Un archivo que se usa</p><h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-6xl" id="closing-title">Tu próximo agente no tiene por qué empezar desde cero.</h2></div><a className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-surface px-6 font-semibold text-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-aqua" href="#catalogo">Elegir una skill <ArrowRightIcon /></a></div></section>
    </main>
  );
}
