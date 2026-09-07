import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { SkillExplorer } from "@/components/skill-explorer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-canvas text-ink" id="contenido">
      <JsonLd />
      <section className="hero-field relative isolate border-b border-line/70" id="inicio">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
          <div className="hero-copy relative z-10">
            <p className="text-sm font-medium text-accent">Skills versionadas para equipos JavaScript full stack</p>
            <h1 className="mt-7 max-w-2xl text-5xl leading-[0.94] font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[5.25rem]">Mejores prácticas reutilizables para construir aplicaciones full stack.</h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted">Encontrá skills curadas para frontend, backend, datos, infraestructura, calidad y seguridad. Copialas a tu repositorio para que tus agentes trabajen con reglas claras, consistentes y revisables.</p>
            <dl className="mt-14 flex flex-wrap gap-x-9 gap-y-5 text-sm text-muted">
              <div><dt className="text-2xl font-semibold tracking-tight text-ink">25+</dt><dd className="mt-1">skills curadas</dd></div>
              <div><dt className="text-2xl font-semibold tracking-tight text-ink">6</dt><dd className="mt-1">áreas de ingeniería</dd></div>
              <div><dt className="text-2xl font-semibold tracking-tight text-ink">Versionables</dt><dd className="mt-1">en tu repositorio</dd></div>
            </dl>
          </div>

          <div className="hero-stage relative mx-auto w-full max-w-2xl" aria-label="Vista previa de skills para un stack JavaScript completo" role="img">
            <div className="hero-horizon" aria-hidden="true" />
            <div className="hero-orb hero-orb-one" aria-hidden="true" />
            <div className="hero-orb hero-orb-two" aria-hidden="true" />
            <div className="hero-workspace relative overflow-hidden rounded-[2rem] border border-white/65 bg-[#f7f8f2]/90 p-4 shadow-workspace backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-line/75 pb-4 text-sm">
                <div className="flex items-center gap-3 font-medium"><Image alt="" className="size-8 rounded-lg object-cover" height={32} src="/icon-skillstack.png" width={32} /> Stack de skills</div>
                <span className="rounded-full bg-mist px-3 py-1 text-xs text-accent">versionable</span>
              </div>
              <div className="py-5">
                <div className="rounded-2xl border border-line/75 bg-surface p-5">
                  <p className="text-sm font-medium text-accent">Stack de skills</p>
                  <p className="mt-4 max-w-lg text-xl leading-snug font-semibold tracking-tight">Frontend · Backend · Datos · Calidad · Infraestructura · Seguridad</p>
                </div>
              </div>
              <div className="hero-command rounded-2xl bg-[#e1e9e1] p-4">
                <p className="text-xs font-medium text-accent">Incorporá una skill a tu repositorio</p>
                <code className="mt-3 block overflow-x-auto whitespace-nowrap font-mono text-xs text-ink sm:text-sm">npx skills add &lt;url-de-la-skill&gt; --copy</code>
                <p className="mt-3 text-xs leading-5 text-muted">La skill queda dentro de tu proyecto y se versiona junto al código.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillExplorer />


      <section className="section-reveal bg-ink px-6 py-20 text-surface sm:px-8 sm:py-28 lg:px-12" aria-labelledby="closing-title"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-medium text-aqua">Un stack, varios especialistas</p><h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-6xl" id="closing-title">Del componente a la base de datos, trabajá con el contexto adecuado.</h2></div><a className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-surface px-6 font-semibold text-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-aqua" href="#catalogo">Explorar el stack <ArrowRightIcon /></a></div></section>
    </main>
  );
}
