import { competitions } from "@/data/competitions";
import { fixtures, resultFixtures } from "@/data/fixtures";
import { players } from "@/data/players";
import type { Sport } from "@/data/types";
import { es } from "@/lib/es";
import { CompetitionCard, FixtureCard, PlayerCard, ResultCard } from "./cards";
import { PageShell } from "./PageShell";
import { SportsNavigation } from "./SportsNavigation";
import { EmptyState, SampleNotice, SectionHeader } from "./ui";

const names = { futbol: es.nav.futbol, tenis: es.nav.tenis, mma: es.nav.mma } as const;

export function SportHub({ sport }: { sport: Sport }) {
  const comps = competitions.filter((c) => c.sport === sport);
  const ppl = players.filter((p) => p.sport === sport);
  const up = fixtures.filter((f) => f.sport === sport && f.status !== "finished");
  const res = resultFixtures().filter((f) => f.sport === sport);
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: names[sport] }]} title={names[sport]} lead={`${es.nav.partidos}, ${es.nav.resultados.toLowerCase()} y ${es.common.calendar.toLowerCase()}.`}>
      <SportsNavigation active={sport} />
      {comps.length > 0 && <section><SectionHeader title={es.nav.competiciones} /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{comps.map((c) => <CompetitionCard key={c.slug} c={c} />)}</div></section>}
      {ppl.length > 0 && <section><SectionHeader title={es.home.athletes} /><div className="grid gap-4 md:grid-cols-2">{ppl.map((p) => <PlayerCard key={p.slug} p={p} />)}</div></section>}
      <section><SectionHeader title={es.home.upcoming} href="/partidos" cta={es.cta.viewCalendar} />
        {up.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{up.map((f) => <FixtureCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>
      <section><SectionHeader title={es.home.latestResults} href="/resultados" cta={es.cta.viewResults} />
        {res.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{res.map((f) => <ResultCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>
      <SampleNotice />
    </PageShell>
  );
}
