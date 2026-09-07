import { Brand } from "@/components/brand";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line/80 bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Brand />
        <nav aria-label="Navegación principal">
          <a className="inline-flex min-h-13 items-center justify-center rounded-full bg-ink px-6 font-semibold text-surface transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong" href="#catalogo">Explorar skills</a>
        </nav>
      </div>
    </header>
  );
}
