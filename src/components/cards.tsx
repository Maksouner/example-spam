import Link from "next/link";
import type { Article, Athlete, Competition, Fixture } from "@/data/types";
import { es } from "@/lib/es";
import { formatLongDate, formatShortDate, formatTime } from "@/lib/format";
import { Crest, SampleBadge, StatusBadge } from "./ui";

const sportLabel = { futbol: es.sports.futbol, tenis: es.sports.tenis, mma: es.sports.mma } as const;

export const fixtureCta = (f: Fixture) => (f.sport === "mma" ? es.cta.eventDetails : es.cta.matchDetails);

function When({ f }: { f: Fixture }) {
  if (!f.startsAt) return <span className="num text-sm font-bold text-ink-soft">{es.common.tbcDate}</span>;
  return (
    <span className="num text-sm font-bold">
      <time dateTime={f.startsAt}>{formatShortDate(f.startsAt)} · {formatTime(f.startsAt)}</time>
    </span>
  );
}

/** Tarjeta de partido / combate. Sin ningún elemento numérico junto a los equipos. */
export function FixtureCard({ f }: { f: Fixture }) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-sm transition-colors hover:border-brand">
      <header className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-brand">{f.competition}</p>
          <p className="mt-0.5 text-xs text-ink-soft">{sportLabel[f.sport]}{f.round ? ` · ${f.round}` : ""}</p>
        </div>
        <StatusBadge status={f.status} />
      </header>

      <div className="my-6 flex items-center justify-between gap-2">
        <Side name={f.home} />
        <span className="text-xs font-extrabold uppercase tracking-widest text-ink-soft">{es.common.vs}</span>
        <Side name={f.away} />
      </div>

      <footer className="mt-auto space-y-1 border-t border-line pt-4">
        <When f={f} />
        <p className="text-sm text-ink-soft">{f.venue ?? es.common.tbcDate}</p>
        <div className="flex items-center justify-between gap-2 pt-3">
          <Link href={`/partidos/${f.id}`} className="inline-flex min-h-11 items-center text-sm font-extrabold uppercase tracking-wide text-brand hover:text-brand-hover">
            {fixtureCta(f)} →
          </Link>
          {f.sample && <SampleBadge />}
        </div>
      </footer>
    </article>
  );
}

function Side({ name }: { name: string }) {
  return (
    <div className="flex w-[40%] flex-col items-center gap-2 text-center">
      <Crest name={name} />
      <span className="text-sm font-bold leading-tight">{name}</span>
    </div>
  );
}

/** Tarjeta de resultado: marcador final neutro. */
export function ResultCard({ f }: { f: Fixture }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-surface p-5 transition-colors hover:border-brand">
      <header className="flex items-start justify-between gap-2">
        <p className="text-xs font-extrabold uppercase tracking-widest text-brand">{f.competition}</p>
        <StatusBadge status={f.status} />
      </header>
      <div className="my-5 flex items-center justify-between gap-3">
        <span className="w-[34%] text-sm font-bold leading-tight">{f.home}</span>
        <span className="num text-3xl font-extrabold" aria-label={`${es.match.score}: ${f.score?.home} — ${f.score?.away}`}>
          {f.score?.home} — {f.score?.away}
        </span>
        <span className="w-[34%] text-right text-sm font-bold leading-tight">{f.away}</span>
      </div>
      <footer className="mt-auto flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm text-ink-soft">{f.startsAt ? formatLongDate(f.startsAt) : es.common.tbcDate}{f.score?.detail ? ` · ${f.score.detail}` : ""}</span>
        <Link href={`/partidos/${f.id}`} className="inline-flex min-h-11 items-center text-sm font-extrabold uppercase tracking-wide text-brand hover:text-brand-hover">{fixtureCta(f)} →</Link>
      </footer>
      {f.sample && <div className="pt-2"><SampleBadge /></div>}
    </article>
  );
}

export function CompetitionCard({ c }: { c: Competition }) {
  return (
    <Link href={c.path} className={`group relative flex min-h-48 flex-col justify-end overflow-hidden rounded-card border border-line bg-gradient-to-br ${c.tone} p-5 transition-transform hover:-translate-y-0.5`}>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
      <p className="relative text-xs font-bold uppercase tracking-widest text-ink/80">{sportLabel[c.sport]}</p>
      <h3 className="relative mt-1 text-xl font-extrabold leading-tight">{c.name}</h3>
      <span className="relative mt-3 text-sm font-bold uppercase tracking-wide">{es.cta.viewCompetition} →</span>
    </Link>
  );
}

export function PlayerCard({ p }: { p: Athlete }) {
  return (
    <Link href={p.path} className="group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-card border border-line bg-gradient-to-br from-elevated to-brand-deep p-6 hover:border-brand">
      <svg aria-hidden viewBox="0 0 100 100" className="absolute -right-4 -top-4 h-48 w-48 text-brand/15"><circle cx="50" cy="35" r="18" fill="currentColor" /><path d="M10 100c0-26 18-40 40-40s40 14 40 40z" fill="currentColor" /></svg>
      <p className="relative text-xs font-bold uppercase tracking-widest text-brand">{sportLabel[p.sport]}</p>
      <h3 className="relative mt-1 text-2xl font-extrabold">{p.name}</h3>
      <p className="relative mt-1 text-sm text-ink-soft">{p.role}</p>
      <span className="relative mt-4 text-sm font-bold uppercase tracking-wide text-brand">{es.cta.playerProfile} →</span>
    </Link>
  );
}

export function NewsCard({ a, large = false }: { a: Article; large?: boolean }) {
  return (
    <article className={`group flex flex-col overflow-hidden rounded-card border border-line bg-surface ${large ? "md:col-span-2" : ""}`}>
      <div aria-hidden className={`${large ? "aspect-[21/9]" : "aspect-video"} bg-gradient-to-br from-brand-deep to-elevated`} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">{sportLabel[a.sport]} · {a.category}</p>
        <h3 className={`${large ? "text-2xl" : "text-lg"} font-extrabold leading-snug`}>{a.title}</h3>
        <p className="text-sm text-ink-soft">{a.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <time dateTime={a.publishedAt} className="text-xs text-ink-soft">{formatLongDate(a.publishedAt)}</time>
          <Link href={`/noticias#${a.slug}`} className="inline-flex min-h-11 items-center text-sm font-extrabold uppercase tracking-wide text-brand">{es.cta.readMore} →</Link>
        </div>
        {a.sample && <SampleBadge />}
      </div>
    </article>
  );
}
