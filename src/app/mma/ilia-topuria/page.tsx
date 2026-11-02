import { AthleteView } from "@/components/AthleteView";
import { StatsCard } from "@/components/ui";
import { players } from "@/data/players";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

const p = players.find((x) => x.slug === "ilia-topuria")!;

export const metadata = meta(es.topuria.title, es.topuria.description, p.path);

export default function Page() {
  return (
    <AthleteView p={p} labels={{
      title: es.topuria.title, description: es.topuria.description, next: es.topuria.next, upcoming: es.topuria.upcomingEvents,
      results: es.topuria.lastFights, stats: es.topuria.record, news: es.topuria.news,
      facts: (f) => [
        { label: es.common.event, value: f.competition }, { label: es.common.venue, value: f.venue ?? es.common.tbcDate },
        { label: es.common.weight, value: f.round ?? es.common.tbcDate },
      ],
      extra: [
        { title: es.topuria.stats, body: <div className="grid gap-4 sm:grid-cols-3"><StatsCard label="Victorias por KO/TKO" value="Por confirmar" /><StatsCard label="Victorias por sumisión" value="Por confirmar" /><StatsCard label="Victorias por decisión" value="Por confirmar" /></div> },
        { title: es.topuria.opponent, body: <p className="rounded-card border border-line bg-surface p-5 text-ink-soft">{es.common.rival}: {es.common.tbcDate}.</p> },
      ],
    }} />
  );
}
