import { notFound } from "next/navigation";
import { FixtureCard, ResultCard } from "@/components/cards";
import { PageShell } from "@/components/PageShell";
import { Crest, SampleNotice, SectionHeader, StatsCard, StatusBadge } from "@/components/ui";
import { fixtures, getFixture } from "@/data/fixtures";
import { es } from "@/lib/es";
import { formatFullDate, formatTime } from "@/lib/format";
import { meta, sportsEventJsonLd } from "@/lib/seo";

type P = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => fixtures.map((f) => ({ id: f.id }));

export async function generateMetadata({ params }: P) {
  const f = getFixture((await params).id);
  return f ? meta(`${f.home} vs ${f.away} — ${f.competition}`, `${es.match.title}: ${f.competition}, ${f.home} vs ${f.away}.`, `/partidos/${f.id}`) : {};
}

export default async function Page({ params }: P) {
  const f = getFixture((await params).id);
  if (!f) notFound();
  const related = fixtures.filter((x) => x.id !== f.id && x.competitionSlug === f.competitionSlug);
  const title = `${f.home} vs ${f.away}`;

  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.nav.partidos, href: "/partidos" }, { label: title }]} title={es.match.title} lead={f.competition}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventJsonLd(f)) }} />

      <section aria-label={title} className="rounded-hero border border-line bg-gradient-to-br from-brand-deep via-[#07305F] to-bg p-6 md:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-3"><StatusBadge status={f.status} /></div>
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-4"><Crest name={f.home} size={72} /><span className="text-3xl font-extrabold md:text-4xl">{f.home}</span></div>
          <div className="num text-center text-5xl font-extrabold" aria-label={es.match.score}>
            {f.score ? `${f.score.home} — ${f.score.away}` : <span className="text-xl uppercase tracking-widest text-brand">{es.common.vs}</span>}
          </div>
          <div className="flex items-center gap-4 md:justify-end"><span className="text-3xl font-extrabold md:text-4xl">{f.away}</span><Crest name={f.away} size={72} /></div>
        </div>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard label={es.common.competition} value={f.competition} />
          <StatsCard label={es.common.date} value={f.startsAt ? formatFullDate(f.startsAt) : es.common.tbcDate} />
          <StatsCard label="Hora" value={f.startsAt ? formatTime(f.startsAt) : es.common.tbcTime} />
          <StatsCard label={f.sport === "futbol" ? es.match.stadium : es.common.venue} value={f.venue ?? es.common.tbcDate} />
        </div>
      </section>

      <section><SectionHeader title={es.match.headToHead} /><p className="rounded-card border border-line bg-surface p-5 text-ink-soft">{es.match.noH2H}</p></section>

      {related.length > 0 && (
        <section><SectionHeader title={es.match.lastResults} />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{related.map((x) => x.status === "finished" ? <ResultCard key={x.id} f={x} /> : <FixtureCard key={x.id} f={x} />)}</div>
        </section>
      )}
      <SampleNotice />
    </PageShell>
  );
}
