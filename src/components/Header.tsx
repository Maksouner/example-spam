"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { es } from "@/lib/es";
import { BASE_PATH } from "@/lib/seo";

const links = [
  { href: "/", label: es.nav.inicio },
  { href: "/futbol", label: es.nav.futbol },
  { href: "/tenis", label: es.nav.tenis },
  { href: "/mma", label: es.nav.mma },
  { href: "/competiciones", label: es.nav.competiciones },
  { href: "/partidos", label: es.nav.partidos },
  { href: "/resultados", label: es.nav.resultados },
  { href: "/noticias", label: es.nav.noticias },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-4 md:h-18 md:px-6">
        <Link href="/" aria-label={es.a11y.logo} className="shrink-0">
          <Image src={`${BASE_PATH}/brand/logo-dark.png`} alt="1XSPORTS" width={150} height={21} priority className="h-5 w-auto md:h-6" />
        </Link>

        <nav aria-label={es.nav.principal} className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative rounded-chip px-3 py-2 text-[13px] font-bold uppercase tracking-wide transition-colors hover:text-brand ${isActive(l.href) ? "text-brand after:absolute after:inset-x-3 after:-bottom-[15px] after:h-0.5 after:bg-brand" : "text-ink"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link href="/buscar" aria-label={es.nav.buscar} className="grid h-11 w-11 place-items-center rounded-card hover:bg-elevated">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          </Link>
          <button type="button" aria-expanded={open} aria-controls="menu-movil" aria-label={open ? es.nav.cerrarMenu : es.nav.menu}
            onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-card hover:bg-elevated lg:hidden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label={es.nav.principal} className="border-t border-line bg-surface lg:hidden">
          <ul className="mx-auto max-w-page px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-line/60 text-base font-bold uppercase tracking-wide ${isActive(l.href) ? "text-brand" : ""}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
