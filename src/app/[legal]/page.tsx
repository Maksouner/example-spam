import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { es } from "@/lib/es";
import { meta } from "@/lib/seo";

const pages: Record<string, string> = {
  "sobre-nosotros": es.footer.about, contacto: es.footer.contact, "politica-de-privacidad": es.footer.privacy,
  "terminos-y-condiciones": es.footer.terms, "politica-de-cookies": es.footer.cookies,
};

type P = { params: Promise<{ legal: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(pages).map((legal) => ({ legal }));

export async function generateMetadata({ params }: P) {
  const t = pages[(await params).legal];
  return t ? meta(t, t, `/${(await params).legal}`) : {};
}

export default async function Page({ params }: P) {
  const title = pages[(await params).legal];
  if (!title) notFound();
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }, { label: title }]} title={title}>
      <p className="max-w-2xl text-ink-soft">Contenido pendiente de redacción por el equipo editorial y legal.</p>
    </PageShell>
  );
}
