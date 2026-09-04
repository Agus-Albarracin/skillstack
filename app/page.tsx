import { ArrowRightIcon, ArrowUpRightIcon, SparkIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { SkillExplorer } from "@/components/skill-explorer";
import { skills } from "@/lib/skills";

const workflow = [
  { number: "01", title: "Definí", description: "Alineá interfaces, contratos y datos antes de escribir código." },
  { number: "02", title: "Construí", description: "Implementá cada capa con patrones claros y mantenibles." },
  { number: "03", title: "Verificá", description: "Automatizá calidad, seguridad y accesibilidad desde el inicio." },
  { number: "04", title: "Desplegá", description: "Observá y evolucioná tu producto con confianza." },
] as const;

const technologies = ["React", "Next.js", "Tailwind", "PostgreSQL", "Docker", "Playwright"] as const;

function Brand() {
  return (
    <span className="inline-flex items-center gap-3 text-lg font-bold tracking-tighter">
      <span className="grid size-9 place-items-center rounded-xl bg-ink text-accent"><SparkIcon /></span>
      skillstack<span className="-ml-3 text-violet">.</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-canvas text-ink" id="contenido">
      <JsonLd />
      <header className="relative z-20 mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href="#inicio" aria-label="Skillstack, volver al inicio"><Brand /></a>
        <nav className="flex items-center gap-8 text-sm font-semibold" aria-label="Navegación principal">
          <a className="hidden text-muted transition-colors hover:text-ink sm:block" href="#catalogo">Catálogo</a>
          <a className="hidden text-muted transition-colors hover:text-ink md:block" href="#metodo">Método</a>
          <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-surface" href="#catalogo">
            Explorar <ArrowRightIcon />
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24" id="inicio">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2 text-xs font-bold tracking-wider text-muted uppercase">
            <span className="size-2 rounded-full bg-coral ring-4 ring-coral/15" />
            Curado para equipos modernos
          </p>
          <h1 className="mt-8 max-w-4xl text-6xl leading-none font-semibold tracking-tighter sm:text-7xl lg:text-8xl">
            Tu stack completo.
            <span className="block font-display font-normal text-violet italic">Skill por skill.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            Una colección curada para diseñar, construir, probar y desplegar aplicaciones full stack con mejores decisiones desde el primer commit.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-ink px-7 font-bold text-surface shadow-card transition-transform hover:-translate-y-0.5" href="#catalogo">
              Explorar {skills.length} skills <ArrowRightIcon />
            </a>
            <a className="inline-flex min-h-14 items-center justify-center rounded-full border border-line bg-surface px-7 font-bold text-ink transition-colors hover:border-ink" href="#metodo">
              Conocer el método
            </a>
          </div>
          <dl className="mt-12 flex gap-8 sm:gap-12">
            <div><dt className="text-2xl font-bold tracking-tight">{skills.length}</dt><dd className="mt-1 text-xs font-semibold tracking-wider text-muted uppercase">Skills</dd></div>
            <div><dt className="text-2xl font-bold tracking-tight">6</dt><dd className="mt-1 text-xs font-semibold tracking-wider text-muted uppercase">Áreas</dd></div>
            <div><dt className="text-2xl font-bold tracking-tight">100%</dt><dd className="mt-1 text-xs font-semibold tracking-wider text-muted uppercase">Abierto</dd></div>
          </dl>
        </div>

        <div className="relative mx-auto h-96 w-full max-w-lg sm:h-128" aria-hidden="true">
          <div className="absolute inset-8 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 flex aspect-3/4 w-64 -translate-x-2/5 -translate-y-1/2 rotate-12 flex-col rounded-3xl border border-ink/10 bg-coral p-7 shadow-card sm:w-72">
            <span className="font-mono text-xs font-bold tracking-widest">SHIP</span>
            <strong className="mt-auto font-display text-4xl leading-none font-normal">Deploy<br />confidently.</strong>
          </div>
          <div className="absolute top-1/2 left-1/2 flex aspect-3/4 w-64 -translate-x-3/5 -translate-y-1/2 -rotate-12 flex-col rounded-3xl border border-ink/10 bg-aqua p-7 shadow-card sm:w-72">
            <span className="font-mono text-xs font-bold tracking-widest">BUILD</span>
            <strong className="mt-auto font-display text-4xl leading-none font-normal">Compose<br />the stack.</strong>
          </div>
          <div className="absolute top-1/2 left-1/2 flex aspect-3/4 w-64 -translate-x-1/2 -translate-y-1/2 rotate-1 flex-col rounded-3xl border border-ink/10 bg-accent p-7 shadow-card sm:w-72">
            <span className="font-mono text-xs font-bold tracking-widest">LEARN</span>
            <span className="mx-auto mt-10 grid size-16 place-items-center rounded-full bg-ink text-accent"><SparkIcon /></span>
            <strong className="mt-auto font-display text-4xl leading-none font-normal">Master<br />every layer.</strong>
            <small className="mt-5 font-mono text-xs uppercase">{skills.length} skills · v1.0</small>
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-surface" aria-label="Tecnologías incluidas">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-7 overflow-hidden px-6 font-mono text-xs font-bold tracking-wider text-muted uppercase sm:justify-between sm:px-8 lg:px-12">
          {technologies.map((technology, index) => (
            <span className="flex shrink-0 items-center gap-7" key={technology}>
              {technology}
              {index < technologies.length - 1 ? <i className="size-1 rounded-full bg-accent-strong" /> : null}
            </span>
          ))}
        </div>
      </div>

      <SkillExplorer />

      <section className="bg-ink px-6 py-20 text-surface sm:px-8 sm:py-28 lg:px-12" id="metodo" aria-labelledby="method-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase">Un sistema, no una lista</p>
              <h2 className="mt-5 font-display text-5xl leading-none font-normal tracking-tight sm:text-7xl" id="method-title">De la idea a producción, sin puntos ciegos.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-surface/60 lg:justify-self-end">
              Elegí las skills que acompañan cada etapa. Cada una suma contexto especializado sin perder de vista el producto completo.
            </p>
          </div>
          <ol className="mt-16 grid border-t border-surface/20 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <li className="border-b border-surface/20 py-8 md:px-8 md:first:pl-0 lg:border-r lg:border-b-0 lg:last:border-r-0" key={step.number}>
                <span className="font-mono text-xs text-accent">{step.number}</span>
                <h3 className="mt-16 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-surface/60">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="bg-accent px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-6 text-center md:grid-cols-3 md:text-left">
          <a className="mx-auto md:mx-0" href="#inicio"><Brand /></a>
          <p className="text-sm font-semibold">Un mapa abierto para construir mejor software.</p>
          <a className="mx-auto inline-flex min-h-11 items-center gap-2 text-sm font-bold md:mx-0 md:justify-self-end" href="https://github.com/Agus-Albarracin/skillstack" target="_blank" rel="noreferrer">
            Ver en GitHub <ArrowUpRightIcon />
          </a>
        </div>
      </footer>
    </main>
  );
}
