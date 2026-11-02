import { SportHub } from "@/components/SportHub";
import { meta } from "@/lib/seo";

export const metadata = meta("Fútbol — Partidos, resultados y calendario", "Champions League, Premier League, Copa del Rey, Supercopa de España y Selección Española: partidos, resultados y calendario.", "/futbol");

export default function Page() {
  return <SportHub sport="futbol" />;
}
