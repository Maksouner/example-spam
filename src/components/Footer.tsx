import Image from "next/image";
import Link from "next/link";
import { es } from "@/lib/es";
import { BASE_PATH } from "@/lib/seo";

const sections = [
  { href: "/futbol", label: es.nav.futbol }, { href: "/tenis", label: es.nav.tenis }, { href: "/mma", label: es.nav.mma },
  { href: "/competiciones", label: es.nav.competiciones }, { href: "/partidos", label: es.nav.partidos },
  { href: "/resultados", label: es.nav.resultados }, { href: "/noticias", label: es.nav.noticias },
];
const info = [
  { href: "/sobre-nosotros", label: es.footer.about }, { href: "/contacto", label: es.footer.contact },
  { href: "/politica-de-privacidad", label: es.footer.privacy }, { href: "/terminos-y-condiciones", label: es.footer.terms },
  { href: "/politica-de-cookies", label: es.footer.cookies },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-page gap-12 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <Image src={`${BASE_PATH}/brand/logo-plate.png`} alt="1XSPORTS" width={170} height={48} className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-ink-soft">{es.site.tagline}</p>
        </div>
        <FooterList title={es.footer.sections} items={sections} />
        <FooterList title={es.footer.info} items={info} />
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} 1XSPORTS. {es.footer.rights}
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-soft">{title}</h2>
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i.href}><Link href={i.href} className="inline-flex min-h-9 items-center text-sm hover:text-brand">{i.label}</Link></li>
        ))}
      </ul>
    </nav>
  );
}
