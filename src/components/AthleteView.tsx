import type { ReactNode } from "react";
import { fixtures, resultFixtures } from "@/data/fixtures";
import { news } from "@/data/news";
import type { Athlete, Fixture } from "@/data/types";
import { es } from "@/lib/es";
import { formatLongDate, formatTime } from "@/lib/format";
import { FixtureCard, NewsCard, ResultCard, fixtureCta } from "./cards";
import { PageShell } from "./PageShell";
import { SampleBadge, ButtonLink, Crest, EmptyState, SampleNotice, SectionHeader, StatsCard } from "./ui";

export interface AthleteLabels {
  title: string; description: string; next: string; upcoming: string; results: string; stats: string; news: string;
  extra: { title: string; body: ReactNode }[];
  facts: (f: Fixture) => { label: string; value: string }[];
}

/** Plantilla de página de deportista: próximo evento arriba, el resto debajo. */
export function AthleteView({ p, labels }: { p: Athlete; labels: AthleteLabels }) {
  const mine = fixtures.filter((f) => f.home === p.name);
  const next = mine.find((f) => f.status !== "finished");
  const res = resultFixtures().filter((f) => f.home === p.name);
  const related = news.filter((n) => n.category === p.name);

  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: p.sport === "tenis" ? es.nav.tenis : es.nav.mma, href: `/${p.sport}` }, { label: p.name }]} title={labels.title} lead={labels.description}>
      {next && (
        <section aria-labelledby="proximo" className="relative overflow-hidden rounded-hero border border-line bg-gradient-to-br from-brand-deep via-[#07305F] to-bg p-6 md:p-10">
          <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 -skew-x-12 bg-brand/10" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="proximo" className="text-xs font-extrabold uppercase tracking-widest text-brand">{labels.next}</h2>
              <SampleBadge />
            </div>
            <div className="my-6 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
              <div className="flex items-center gap-4"><Crest name={next.home} size={64} /><span className="text-3xl font-extrabold md:text-4xl">{next.home}</span></div>
              <span className="text-xl font-extrabold uppercase tracking-widest text-brand">{es.common.vs}</span>
              <div className="flex items-center gap-4 md:justify-end"><span className="text-3xl font-extrabold md:text-4xl">{next.away}</span><Crest name={next.away} size={64} /></div>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {labels.facts(next).map((x) => (
                <div key={x.label}><dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">{x.label}</dt><dd className="num mt-1 text-lg font-bold">{x.value}</dd></div>
              ))}
              <div><dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">{es.common.date}</dt>
                <dd className="num mt-1 text-lg font-bold">{next.startsAt ? `${formatLongDate(next.startsAt)} · ${formatTime(next.startsAt)}` : `${es.common.tbcDate} · ${es.common.tbcTime}`}</dd></div>
            </dl>
            <div className="mt-8"><ButtonLink href={`/partidos/${next.id}`}>{fixtureCta(next)}</ButtonLink></div>
          </div>
        </section>
      )}

      <section><SectionHeader title={labels.stats} />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{p.stats.map((s) => <StatsCard key={s.label} {...s} />)}</div></section>

      <section><SectionHeader title={labels.upcoming} />
        {mine.filter((f) => f.status !== "finished").length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{mine.filter((f) => f.status !== "finished").map((f) => <FixtureCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>

      <section><SectionHeader title={labels.results} href="/resultados" cta={es.cta.viewResults} />
        {res.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{res.map((f) => <ResultCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>

      {labels.extra.map((e) => <section key={e.title}><SectionHeader title={e.title} />{e.body}</section>)}

      <section><SectionHeader title={labels.news} href="/noticias" cta={es.cta.readMore} />
        {related.length ? <div className="grid gap-4 md:grid-cols-3">{related.map((a) => <NewsCard key={a.slug} a={a} />)}</div> : <EmptyState />}</section>
      <SampleNotice />
    </PageShell>
  );
}
