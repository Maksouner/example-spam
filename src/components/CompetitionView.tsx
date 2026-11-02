import { competitions } from "@/data/competitions";
import { fixtures, resultFixtures } from "@/data/fixtures";
import { news } from "@/data/news";
import type { Competition } from "@/data/types";
import { es } from "@/lib/es";
import { CompetitionCard, FixtureCard, NewsCard, ResultCard } from "./cards";
import { SportsNavigation } from "./SportsNavigation";
import { PageShell } from "./PageShell";
import { EmptyState, SampleNotice, SectionHeader, StatsCard } from "./ui";

const sportName = { futbol: es.nav.futbol, tenis: es.nav.tenis, mma: es.nav.mma } as const;

export function CompetitionView({ c }: { c: Competition }) {
  const up = fixtures.filter((f) => f.competitionSlug === c.slug && f.status !== "finished");
  const res = resultFixtures().filter((f) => f.competitionSlug === c.slug);
  const related = competitions.filter((x) => c.related.includes(x.slug));
  const relatedNews = news.filter((n) => n.category.toLowerCase().includes(c.short.toLowerCase().split(" ")[0])).slice(0, 3);

  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: sportName[c.sport], href: `/${c.sport}` }, { label: c.name }]} title={c.name} lead={c.description}>
      <SportsNavigation active={c.sport} />

      <section>
        <SectionHeader title={es.competition.upcoming} href="/partidos" cta={es.cta.viewMatches} />
        {up.length ? <Cards>{up.map((f) => <FixtureCard key={f.id} f={f} />)}</Cards> : <EmptyState />}
      </section>

      <section>
        <SectionHeader title={es.competition.results} href="/resultados" cta={es.cta.viewResults} />
        {res.length ? <Cards>{res.map((f) => <ResultCard key={f.id} f={f} />)}</Cards> : <EmptyState />}
      </section>

      <section>
        <SectionHeader title={es.competition.info} />
        <div className="grid gap-4 sm:grid-cols-3">{c.info.map((i) => <StatsCard key={i.label} {...i} />)}</div>
      </section>

      {relatedNews.length > 0 && (
        <section>
          <SectionHeader title={es.competition.news} href="/noticias" cta={es.cta.readMore} />
          <div className="grid gap-4 md:grid-cols-3">{relatedNews.map((a) => <NewsCard key={a.slug} a={a} />)}</div>
        </section>
      )}

      <section>
        <SectionHeader title={es.competition.related} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <CompetitionCard key={r.slug} c={r} />)}</div>
      </section>
      <SampleNotice />
    </PageShell>
  );
}

const Cards = ({ children }: { children: React.ReactNode }) => <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
