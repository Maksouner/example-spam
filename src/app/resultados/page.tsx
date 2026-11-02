import { FixturesExplorer } from "@/components/FixturesExplorer";
import { PageShell } from "@/components/PageShell";
import { SampleNotice } from "@/components/ui";
import { resultFixtures } from "@/data/fixtures";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

export const metadata = meta(`${es.pages.resultsTitle} de fútbol, tenis y MMA`, es.pages.resultsLead, "/resultados");

export default function Page() {
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.nav.resultados }]} title={es.pages.resultsTitle} lead={es.pages.resultsLead}>
      <FixturesExplorer items={resultFixtures()} mode="results" />
      <SampleNotice />
    </PageShell>
  );
}
