import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight" href="/">
      <Image alt="" className="size-9 rounded-lg object-cover" height={36} src="/icon-skillstack.png" width={36} />
      skillstack<span className="-ml-3 text-accent-strong">.</span>
    </Link>
  );
}
