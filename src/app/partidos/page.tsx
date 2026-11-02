import { FixturesExplorer } from "@/components/FixturesExplorer";
import { PageShell } from "@/components/PageShell";
import { SampleNotice } from "@/components/ui";
import { upcomingFixtures } from "@/data/fixtures";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

export const metadata = meta(`${es.pages.fixturesTitle} — fútbol, tenis y MMA`, es.pages.fixturesLead, "/partidos");

export default function Page() {
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.nav.partidos }]} title={es.pages.fixturesTitle} lead={es.pages.fixturesLead}>
      <FixturesExplorer items={upcomingFixtures()} mode="fixtures" />
      <SampleNotice />
    </PageShell>
  );
}
