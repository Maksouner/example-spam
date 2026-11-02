import { FixturesExplorer } from "@/components/FixturesExplorer";
import { PageShell } from "@/components/PageShell";
import { fixtures } from "@/data/fixtures";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

export const metadata = meta(es.pages.searchTitle, "Busca equipos, jugadores y competiciones.", "/buscar");

export default function Page() {
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.pages.searchTitle }]} title={es.pages.searchTitle}>
      <FixturesExplorer items={fixtures} mode="fixtures" />
    </PageShell>
  );
}
