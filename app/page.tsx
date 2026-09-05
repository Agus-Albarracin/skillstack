import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { SkillExplorer } from "@/components/skill-explorer";
import { skills } from "@/lib/skills";

const workflow = [
  { title: "Elegí", description: "Encontrá la guía que corresponde al problema real." },
  { title: "Copiá", description: "Llevá el paquete operativo al proyecto, con su procedencia intacta." },
  { title: "Trabajá", description: "Dale al agente contexto especializado justo cuando lo necesita." },
  { title: "Verificá", description: "Conservá decisiones, licencias y resultados en un historial revisable." },
] as const;

const technologies = ["React", "Next.js", "Tailwind", "PostgreSQL", "Docker", "Playwright"] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-canvas text-ink" id="contenido">
      <JsonLd />
      <section className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-16 px-6 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-24" id="inicio">
        <div className="archive-reveal relative z-10">
          <p className="max-w-xl text-sm font-medium text-accent">Archivo vivo del conocimiento</p>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[5.6rem]">
            La experiencia correcta,
            <span className="mt-2 block font-display font-normal tracking-[-0.035em] text-accent-strong">en el momento de construir.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Descubrí skills nativas y vendorized, revisá su procedencia y llevá conocimiento especializado a tu proyecto sin perder el control.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-13 items-center justify-center gap-3 rounded-md bg-ink px-6 font-semibold text-surface transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong" href="#catalogo">
              Explorar el archivo <ArrowRightIcon />
            </a>
            <a className="inline-flex min-h-13 items-center justify-center rounded-md border border-line px-6 font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-surface" href="#metodo">
              Ver cómo funciona
            </a>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-2 border-y border-line sm:grid-cols-3">
            <div className="py-5 sm:border-r sm:border-line"><dt className="text-2xl font-semibold">{skills.length}</dt><dd className="mt-1 text-sm text-muted">skills revisadas</dd></div>
            <div className="border-l border-line py-5 pl-5 sm:border-l-0 sm:px-5"><dt className="text-2xl font-semibold">6</dt><dd className="mt-1 text-sm text-muted">áreas técnicas</dd></div>
            <div className="col-span-2 border-t border-line py-5 sm:col-span-1 sm:border-t-0 sm:border-l sm:pl-5"><dt className="text-2xl font-semibold">2</dt><dd className="mt-1 text-sm text-muted">orígenes claros</dd></div>
          </dl>
        </div>

        <div className="relative mx-auto min-h-120 w-full max-w-xl" aria-label="Una skill pasa del archivo a un comando listo para copiar" role="img">
          <div className="absolute inset-x-6 top-8 h-96 rounded-[45%] bg-accent-strong/8 blur-3xl" aria-hidden="true" />
          <div className="archive-layer absolute top-10 right-0 left-12 border border-line bg-surface/60 p-6 text-muted shadow-card sm:left-24">
            <p className="text-sm">Procedencia</p>
            <p className="mt-14 font-display text-2xl text-ink">Conocimiento preservado.</p>
            <p className="mt-2 text-sm">Autor, revisión y licencia visibles.</p>
          </div>
          <div className="archive-layer absolute top-32 right-8 left-4 border border-accent/40 bg-[#dce3dc] p-6 shadow-card sm:right-12">
            <div className="flex items-center justify-between gap-5">
              <Image alt="" className="size-12 rounded-xl object-cover" height={48} src="/icon-skillstack.png" width={48} />
              <span className="rounded-full border border-accent/30 px-3 py-1 text-xs text-accent">vendorized</span>
            </div>
            <p className="mt-16 text-sm text-accent">Frontend · Dirección visual</p>
            <strong className="mt-3 block break-words text-2xl leading-tight tracking-tight">frontend-design</strong>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">Una decisión visual propia antes de escribir componentes.</p>
          </div>
          <div className="archive-layer absolute right-0 bottom-8 left-10 bg-ink p-6 text-surface shadow-card sm:left-20">
            <div className="flex items-center justify-between gap-4 text-sm text-surface/55">
              <span>Lista para trabajar</span>
              <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
            </div>
            <code className="mt-8 block overflow-x-auto font-mono text-sm leading-7 text-surface">npx skills add https://github.com/Agus-Albarracin/skillstack<br />--skill frontend-design --copy</code>
            <span className="mt-8 block border-t border-surface/15 pt-4 text-sm text-aqua">Copiar comando</span>
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-surface" aria-label="Tecnologías incluidas">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center gap-8 overflow-hidden px-6 text-sm text-muted sm:justify-between sm:px-8 lg:px-12">
          {technologies.map((technology, index) => (
            <span className="flex shrink-0 items-center gap-8" key={technology}>
              {technology}
              {index < technologies.length - 1 ? <i className="h-px w-6 bg-gold/70" /> : null}
            </span>
          ))}
        </div>
      </div>

      <SkillExplorer />

      <section className="bg-ink px-6 py-20 text-surface sm:px-8 sm:py-28 lg:px-12" id="metodo" aria-labelledby="method-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm text-aqua">Del archivo a la acción</p>
              <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] font-normal tracking-tight sm:text-7xl" id="method-title">Conocimiento que entra en funcionamiento.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-surface/65 lg:justify-self-end">
              Cada skill conserva su origen y entrega al agente un contrato operativo preciso. Elegís lo necesario; el proyecto mantiene el control.
            </p>
          </div>
          <ol className="mt-16 grid border-t border-surface/20 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <li className="border-b border-surface/20 py-8 md:px-8 md:first:pl-0 lg:border-r lg:border-b-0 lg:last:border-r-0" key={step.title}>
                <span className="text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-14 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-surface/60">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
