import { AthleteView } from "@/components/AthleteView";
import { StatsCard } from "@/components/ui";
import { players } from "@/data/players";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";
import Link from "next/link";

const p = players.find((x) => x.slug === "carlos-alcaraz")!;

export const metadata = meta(es.alcaraz.title, es.alcaraz.description, p.path);

export default function Page() {
  return (
    <AthleteView p={p} labels={{
      title: es.alcaraz.title, description: es.alcaraz.description, next: es.alcaraz.next, upcoming: es.alcaraz.upcomingMatches,
      results: es.alcaraz.lastResults, stats: es.alcaraz.stats, news: es.alcaraz.news,
      facts: (f) => [
        { label: es.alcaraz.tournament, value: f.competition }, { label: es.common.round, value: f.round ?? es.common.tbcDate },
        { label: es.common.court, value: f.venue ?? es.common.tbcDate },
      ],
      extra: [
        { title: es.alcaraz.currentTournament, body: <div className="grid gap-4 sm:grid-cols-3"><StatsCard label={es.alcaraz.tournament} value="Por confirmar" /><StatsCard label={es.common.round} value="Por confirmar" /><StatsCard label={es.common.court} value="Por confirmar" /></div> },
        { title: es.alcaraz.upcomingTournaments, body: <p className="rounded-card border border-line bg-surface p-5 text-ink-soft">{es.common.tbcDate}. <Link className="font-bold text-brand" href="/tenis/wimbledon">{es.cta.viewTournament} Wimbledon →</Link></p> },
        { title: es.alcaraz.history, body: <p className="rounded-card border border-line bg-surface p-5 text-ink-soft">{es.common.sample}. {es.common.tbcDate}.</p> },
      ],
    }} />
  );
}
