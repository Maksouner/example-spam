import { notFound } from "next/navigation";
import { CompetitionView } from "@/components/CompetitionView";
import { competitions, getCompetition } from "@/data/competitions";
import { meta } from "@/lib/seo";

type P = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => competitions.filter((c) => c.sport === "futbol" && c.slug !== "seleccion-espana").map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: P) {
  const c = getCompetition((await params).slug);
  return c ? meta(`${c.name} — Partidos, resultados y calendario`, c.description, c.path) : {};
}

export default async function Page({ params }: P) {
  const c = getCompetition((await params).slug);
  if (!c || c.sport !== "futbol") notFound();
  return <CompetitionView c={c} />;
}
