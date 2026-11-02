import { CompetitionCard, FixtureCard, ResultCard } from "@/components/cards";
import { PageShell } from "@/components/PageShell";
import { EmptyState, SampleNotice, SectionHeader, StatsCard } from "@/components/ui";
import { competitions, getCompetition } from "@/data/competitions";
import { fixtures, resultFixtures } from "@/data/fixtures";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

const c = getCompetition("seleccion-espana")!;
const t = es.spain.tabs;

export const metadata = meta(es.spain.title, es.spain.description, c.path);

const tabs = [
  { id: "clasificacion", label: t.qualifying }, { id: "amistosos", label: t.friendlies }, { id: "partidos", label: t.matches },
  { id: "resultados", label: t.results }, { id: "seleccion", label: t.squad }, { id: "jugadores", label: t.players },
];

export default function Page() {
  const up = fixtures.filter((f) => f.competitionSlug === c.slug && f.status !== "finished");
  const res = resultFixtures().filter((f) => f.competitionSlug === c.slug);
  const qual = up.filter((f) => f.round === "Clasificación para el Mundial");
  const friendly = up.filter((f) => f.round === "Amistoso");
  const grid = "grid gap-4 sm:grid-cols-2 xl:grid-cols-4";
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.nav.futbol, href: "/futbol" }, { label: c.name }]} title={es.spain.title} lead={es.spain.description}>
      <div className="-mt-6 border-t-4 border-[#C8102E]">
        <nav aria-label={c.name} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-4 md:mx-0 md:px-0">
          {tabs.map((x) => <a key={x.id} href={`#${x.id}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-line px-4 text-sm font-bold hover:border-brand hover:text-brand">{x.label}</a>)}
        </nav>
      </div>

      <section aria-labelledby="partidos"><SectionHeader title={es.spain.next} /><span id="partidos" />
        {up.length ? <div className={grid}>{up.map((f) => <FixtureCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>
      <section id="clasificacion"><SectionHeader title={t.qualifying} />
        {qual.length ? <div className={grid}>{qual.map((f) => <FixtureCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>
      <section id="amistosos"><SectionHeader title={t.friendlies} />
        {friendly.length ? <div className={grid}>{friendly.map((f) => <FixtureCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>
      <section id="resultados"><SectionHeader title={t.results} />
        {res.length ? <div className={grid}>{res.map((f) => <ResultCard key={f.id} f={f} />)}</div> : <EmptyState />}</section>
      <section id="seleccion"><SectionHeader title={t.squad} />
        <div className="grid gap-4 sm:grid-cols-3">{c.info.map((i) => <StatsCard key={i.label} {...i} />)}</div></section>
      <section id="jugadores"><SectionHeader title={t.players} /><EmptyState message={`${es.common.sample}. ${es.common.tbcDate}.`} /></section>
      <section><SectionHeader title={es.competition.related} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{competitions.filter((x) => c.related.includes(x.slug)).map((x) => <CompetitionCard key={x.slug} c={x} />)}</div></section>
      <SampleNotice />
    </PageShell>
  );
}
