import Link from "next/link";
import { es } from "@/lib/es";

const sports = [
  { key: "todos", label: es.sports.todos, href: "/partidos" },
  { key: "futbol", label: es.sports.futbol, href: "/futbol" },
  { key: "tenis", label: es.sports.tenis, href: "/tenis" },
  { key: "mma", label: es.sports.mma, href: "/mma" },
];

const subs: Record<string, { label: string; href: string }[]> = {
  futbol: [
    { label: "Champions League", href: "/futbol/champions-league" }, { label: "Premier League", href: "/futbol/premier-league" },
    { label: "Copa del Rey", href: "/futbol/copa-del-rey" }, { label: "Supercopa", href: "/futbol/supercopa-de-espana" },
    { label: "Selección Española", href: "/futbol/seleccion-espana" },
  ],
  tenis: [{ label: "Wimbledon", href: "/tenis/wimbledon" }, { label: "Carlos Alcaraz", href: "/tenis/carlos-alcaraz" }],
  mma: [{ label: "Ilia Topuria", href: "/mma/ilia-topuria" }],
};

const chip = "inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm font-bold transition-colors";

/** Selector de deporte con subnavegación. Scroll horizontal en móvil. */
export function SportsNavigation({ active = "todos" }: { active?: string }) {
  const sub = subs[active];
  return (
    <div>
      <nav aria-label={es.a11y.scrollSports} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
        {sports.map((s) => (
          <Link key={s.key} href={s.href} aria-current={s.key === active ? "page" : undefined}
            className={`${chip} ${s.key === active ? "border-brand bg-brand text-bg" : "border-line hover:border-brand hover:text-brand"}`}>{s.label}</Link>
        ))}
      </nav>
      {sub && (
        <nav aria-label={es.nav.competiciones} className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
          {sub.map((s) => <Link key={s.href} href={s.href} className={`${chip} border-transparent bg-surface text-ink-soft hover:text-brand`}>{s.label}</Link>)}
        </nav>
      )}
    </div>
  );
}

export const allSubs = subs;
