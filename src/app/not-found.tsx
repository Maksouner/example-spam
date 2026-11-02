import { PageShell } from "@/components/PageShell";
import { ButtonLink } from "@/components/ui";
import { es } from "@/lib/es";

export default function NotFound() {
  return (
    <PageShell crumbs={[{ label: es.common.home, href: "/" }]} title="Página no encontrada" lead="La página que buscas no existe o ha cambiado de dirección.">
      <ButtonLink href="/partidos">{es.cta.viewMatches}</ButtonLink>
    </PageShell>
  );
}
