import { SportHub } from "@/components/SportHub";
import { meta } from "@/lib/seo";

export const metadata = meta("Tenis — Partidos, resultados y calendario", "Wimbledon y Carlos Alcaraz: partidos, resultados, torneos y calendario de tenis.", "/tenis");

export default function Page() {
  return <SportHub sport="tenis" />;
}
