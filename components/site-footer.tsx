import { Brand } from "@/components/brand";
import { ArrowUpRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-accent px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-6 text-center md:grid-cols-3 md:text-left">
        <div className="mx-auto md:mx-0">
          <Brand />
        </div>
        <p className="text-sm font-semibold">Un mapa abierto para construir mejor software.</p>
        <a className="mx-auto inline-flex min-h-11 items-center gap-2 text-sm font-bold md:mx-0 md:justify-self-end" href={siteConfig.repository} rel="noreferrer" target="_blank">
          Ver en GitHub <ArrowUpRightIcon />
        </a>
      </div>
    </footer>
  );
}
