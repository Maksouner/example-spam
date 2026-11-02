import type { Metadata } from "next";
import type { Fixture } from "@/data/types";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL = "https://www.example.com"; // TODO: dominio definitivo

export const meta = (title: string, description: string, path: string): Metadata => ({
  title, description,
  alternates: { canonical: `${SITE_URL}${path}` },
  openGraph: { title, description, url: `${SITE_URL}${path}`, locale: "es_ES", type: "website", siteName: "1XSPORTS" },
});

export const sportsEventJsonLd = (f: Fixture) => ({
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: `${f.home} vs ${f.away}`,
  sport: f.sport,
  ...(f.startsAt ? { startDate: f.startsAt } : {}),
  ...(f.venue ? { location: { "@type": "Place", name: f.venue } } : {}),
  competitor: [{ "@type": "SportsTeam", name: f.home }, { "@type": "SportsTeam", name: f.away }],
  inLanguage: "es-ES",
});
