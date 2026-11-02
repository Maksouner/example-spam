export type Sport = "futbol" | "tenis" | "mma";
export type MatchStatus = "upcoming" | "live" | "finished" | "postponed" | "cancelled" | "suspended";

export interface Fixture {
  id: string;
  sport: Sport;
  competitionSlug: string;
  competition: string;
  round?: string;
  home: string;          // equipo A / jugador A
  away: string;          // equipo B / rival
  startsAt?: string;     // ISO; undefined => "Fecha por confirmar"
  venue?: string;
  status: MatchStatus;
  score?: { home: number; away: number; detail?: string };
  sample: true;          // marca de datos de ejemplo
}

export interface Competition {
  slug: string; sport: Sport; path: string; name: string; short: string; description: string;
  info: { label: string; value: string }[]; related: string[]; tone: string;
}

export interface Athlete {
  slug: string; sport: Sport; path: string; name: string; role: string; summary: string;
  stats: { label: string; value: string }[]; sample: true;
}

export interface Article {
  slug: string; sport: Sport; category: string; title: string; excerpt: string; publishedAt: string; sample: true;
}
