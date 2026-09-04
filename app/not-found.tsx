import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 text-ink">
      <div className="max-w-xl text-center">
        <p className="font-mono text-sm font-bold tracking-widest text-violet uppercase">Error 404</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tighter sm:text-7xl">Esta ruta no existe.</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Volvé al catálogo para explorar las skills disponibles para tu próximo proyecto full stack.
        </p>
        <Link className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-ink px-7 font-bold text-surface" href="/">
          Ir al catálogo <ArrowRightIcon />
        </Link>
      </div>
    </main>
  );
}
