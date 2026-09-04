import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Línea de tiempo de las próximas mejoras de Skillstack: identidad, memoria local-first y skills nativas.",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    title: "Roadmap | Skillstack",
    description:
      "Las próximas mejoras de Skillstack, desde la identidad visual hasta las skills nativas.",
    type: "website",
    siteName: "Skillstack",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmap | Skillstack",
    description: "Las próximas mejoras de Skillstack.",
  },
};

const roadmap = [
  {
    phase: "Ahora",
    title: "Icono de Skillstack",
    description:
      "Definir un icono propio, legible en tamaños pequeños y coherente con el sistema visual del catálogo.",
    status: "Listo",
    tone: "bg-coral",
  },
  {
    phase: "Próximo",
    title: "Memoria local-first",
    description:
      "Guardar preferencias, filtros y contexto de exploración en el dispositivo, sin convertirlos en dependencia de un servicio externo.",
    status: "Planificado",
    tone: "bg-aqua",
  },
  {
    phase: "Próximo",
    title: "Skills nativas con cultura propia",
    description:
      "Recrear de forma progresiva las skills de la guía como skills nativas: misma cobertura útil, voz de Skillstack y convenciones verificables.",
    status: "En progreso",
    tone: "bg-violet",
  },
  {
    phase: "Después",
    title: "Compatibilidad por stack",
    description:
      "Indicar versión, framework, runtime y dependencias para elegir skills compatibles con cada proyecto antes de instalarlas.",
    status: "Exploración",
    tone: "bg-accent-strong",
  },
  {
    phase: "Después",
    title: "Colecciones para flujos reales",
    description:
      "Agrupar skills por recorridos completos —lanzar una app, reforzar seguridad o preparar un despliegue— sin perder el detalle de cada una.",
    status: "Exploración",
    tone: "bg-coral",
  },
  {
    phase: "Horizonte",
    title: "Actualizaciones y señales de mantenimiento",
    description:
      "Mostrar origen, vigencia y cambios relevantes para que el catálogo priorice conocimiento que sigue siendo útil en producción.",
    status: "Idea",
    tone: "bg-aqua",
  },
] as const;

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink" id="contenido">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <p className="font-mono text-xs font-bold tracking-widest text-violet uppercase">Roadmap</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-none font-normal tracking-tight sm:text-7xl">
          Construimos la guía que queremos usar.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
          Una línea de tiempo viva para las mejoras que harán de Skillstack un catálogo más útil, claro y propio.
        </p>

        <ol className="relative mt-16 border-l border-line pl-8 sm:ml-3 sm:pl-12">
          {roadmap.map((item) => (
            <li className="relative pb-12 last:pb-0" key={item.title}>
              <span className={`absolute -left-10 top-1 size-4 rounded-full border-4 border-canvas ${item.tone}`} />
              <div className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs font-bold tracking-widest text-muted uppercase">{item.phase}</p>
                  <span className="rounded-full bg-canvas px-3 py-1 text-xs font-bold text-ink">{item.status}</span>
                </div>
                <h2 className="mt-7 text-2xl font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
