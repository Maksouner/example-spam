import { CompetitionCard, FixtureCard, NewsCard, PlayerCard, ResultCard } from "@/components/cards";
import { Hero } from "@/components/Hero";
import { SportsNavigation } from "@/components/SportsNavigation";
import { SampleNotice, SectionHeader } from "@/components/ui";
import { competitions } from "@/data/competitions";
import { fixtures, resultFixtures, upcomingFixtures } from "@/data/fixtures";
import { news } from "@/data/news";
import { players } from "@/data/players";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

export const metadata = meta(es.home.seoTitle, es.home.seoDescription, "/");

export default function HomePage() {
  const featured = fixtures[0];
  const upcoming = upcomingFixtures().slice(0, 4);
  const results = resultFixtures().slice(0, 4);
  return (
    <div className="mx-auto max-w-page space-y-16 px-4 py-6 md:space-y-24 md:px-6 md:py-10">
      <Hero f={featured} />
      <SportsNavigation />

      <section aria-labelledby="proximos">
        <SectionHeader title={es.home.upcoming} href="/partidos" cta={es.cta.viewCalendar} />
        <h2 id="proximos" className="sr-only">{es.home.upcoming}</h2>
        <Grid>{upcoming.map((f) => <FixtureCard key={f.id} f={f} />)}</Grid>
      </section>

      <section>
        <SectionHeader title={es.home.competitions} href="/competiciones" cta={es.cta.viewCompetition} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{competitions.map((c) => <CompetitionCard key={c.slug} c={c} />)}</div>
      </section>

      <section>
        <SectionHeader title={es.home.athletes} />
        <div className="grid gap-4 md:grid-cols-2">{players.map((p) => <PlayerCard key={p.slug} p={p} />)}</div>
      </section>

      <section>
        <SectionHeader title={es.home.latestResults} href="/resultados" cta={es.cta.viewResults} />
        <Grid>{results.map((f) => <ResultCard key={f.id} f={f} />)}</Grid>
      </section>

      <section>
        <SectionHeader title={es.home.news} href="/noticias" cta={es.cta.readMore} />
        <div className="grid gap-4 md:grid-cols-3">
          {news.slice(0, 3).map((a, i) => <NewsCard key={a.slug} a={a} large={i === 0} />)}
        </div>
      </section>
      <SampleNotice />
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}
