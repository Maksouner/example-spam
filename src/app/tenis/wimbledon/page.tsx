import { CompetitionView } from "@/components/CompetitionView";
import { getCompetition } from "@/data/competitions";
import { meta } from "@/lib/seo";

const c = getCompetition("wimbledon")!;

export const metadata = meta(`${c.name} — Partidos, resultados y calendario`, c.description, c.path);

export default function Page() {
  return <CompetitionView c={c} />;
}
