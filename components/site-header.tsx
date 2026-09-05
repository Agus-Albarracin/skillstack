import Link from "next/link";
import { Brand } from "@/components/brand";
import { ArrowRightIcon } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line/80 bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
      <Brand />
      <nav aria-label="Navegación principal" className="flex items-center gap-7 text-sm font-medium">
        <Link className="hidden text-muted transition-colors duration-200 hover:text-ink sm:block" href="/#catalogo">
          Catálogo
        </Link>
        <Link className="hidden text-muted transition-colors duration-200 hover:text-ink md:block" href="/#metodo">
          Método
        </Link>
        <Link className="hidden text-muted transition-colors duration-200 hover:text-ink lg:block" href="/roadmap">
          Roadmap
        </Link>
        <Link className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-5 text-surface transition-colors duration-200 hover:bg-accent-strong" href="/#catalogo">
          Explorar <ArrowRightIcon />
        </Link>
      </nav>
      </div>
    </header>
  );
}
