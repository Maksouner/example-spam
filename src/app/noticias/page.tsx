import { NewsCard } from "@/components/cards";
import { PageShell } from "@/components/PageShell";
import { SampleNotice } from "@/components/ui";
import { news } from "@/data/news";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

export const metadata = meta(`${es.pages.newsTitle} de fútbol, tenis y MMA`, es.pages.newsLead, "/noticias");

export default function Page() {
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: es.nav.noticias }]} title={es.pages.newsTitle} lead={es.pages.newsLead}>
      <div className="grid gap-4 md:grid-cols-3">{news.map((a) => <div key={a.slug} id={a.slug}><NewsCard a={a} /></div>)}</div>
      <SampleNotice />
    </PageShell>
  );
}
