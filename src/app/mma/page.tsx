import { SportHub } from "@/components/SportHub";
import { meta } from "@/lib/seo";

export const metadata = meta("MMA — Eventos, combates y resultados", "Próximos combates, eventos, récord y resultados de MMA, con Ilia Topuria.", "/mma");

export default function Page() {
  return <SportHub sport="mma" />;
}
