import type { Fixture } from "@/data/types";
import { es } from "@/lib/es";
import { formatLongDate, formatTime } from "@/lib/format";
import { ButtonLink, Crest, SampleBadge, StatusBadge } from "./ui";
import { fixtureCta } from "./cards";

/** Evento destacado. Foto cinematográfica pendiente: de momento fondo de marca. */
export function Hero({ f }: { f: Fixture }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-hero border border-line bg-gradient-to-br from-brand-deep via-[#07305F] to-bg p-6 md:p-12">
      <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 -skew-x-12 bg-brand/10" />
      <div aria-hidden className="absolute -bottom-32 right-24 h-80 w-40 -skew-x-12 bg-brand/10" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-extrabold uppercase tracking-widest text-brand">{es.home.featured}</p>
          <StatusBadge status={f.status} />
          <SampleBadge />
        </div>
        <h1 id="hero-title" className="mt-4 text-sm font-extrabold uppercase tracking-[.2em] text-ink-soft">{f.competition}</h1>

        <div className="my-8 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <HeroTeam name={f.home} />
          <span className="text-center text-xl font-extrabold uppercase tracking-widest text-brand">{es.common.vs}</span>
          <HeroTeam name={f.away} right />
        </div>

        <p className="num text-lg font-bold md:text-xl">
          {f.startsAt ? <time dateTime={f.startsAt}>{formatLongDate(f.startsAt)} · {formatTime(f.startsAt)}</time> : es.common.tbcDate}
        </p>
        <p className="mt-1 text-ink-soft">{f.venue}</p>
        <div className="mt-8"><ButtonLink href={`/partidos/${f.id}`}>{fixtureCta(f)}</ButtonLink></div>
      </div>
    </section>
  );
}

function HeroTeam({ name, right = false }: { name: string; right?: boolean }) {
  return (
    <div className={`flex items-center gap-4 md:flex-col md:text-center ${right ? "md:items-center" : ""}`}>
      <Crest name={name} size={72} />
      <span className="text-3xl font-extrabold leading-tight md:text-5xl">{name}</span>
    </div>
  );
}
