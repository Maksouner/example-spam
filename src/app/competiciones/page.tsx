import { CompetitionCard } from "@/components/cards";
import { PageShell } from "@/components/PageShell";
import { competitions } from "@/data/competitions";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

export const metadata = meta(`${es.pages.competitionsTitle} de fútbol y tenis`, es.pages.competitionsLead, "/competiciones");

export default function Page() {
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.nav.competiciones }]} title={es.pages.competitionsTitle} lead={es.pages.competitionsLead}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{competitions.map((c) => <CompetitionCard key={c.slug} c={c} />)}</div>
    </PageShell>
  );
}
