import type { Fixture } from "./types";

// Datos de ejemplo: no corresponden a partidos reales. Sustituir por API / CMS.
export const fixtures: Fixture[] = [
  { id: "ej-1", sport: "futbol", competitionSlug: "champions-league", competition: "UEFA Champions League", round: "Partido de ejemplo", home: "Equipo A", away: "Equipo B", startsAt: "2026-12-09T21:00:00+01:00", venue: "Estadio de ejemplo", status: "upcoming", sample: true },
  { id: "ej-2", sport: "futbol", competitionSlug: "premier-league", competition: "Premier League", round: "Partido de ejemplo", home: "Equipo C", away: "Equipo D", startsAt: "2026-12-12T16:00:00+01:00", venue: "Estadio de ejemplo", status: "upcoming", sample: true },
  { id: "ej-3", sport: "futbol", competitionSlug: "copa-del-rey", competition: "Copa del Rey", round: "Partido de ejemplo", home: "Equipo E", away: "Equipo F", startsAt: "2026-12-16T20:00:00+01:00", venue: "Estadio de ejemplo", status: "upcoming", sample: true },
  { id: "ej-4", sport: "futbol", competitionSlug: "supercopa-de-espana", competition: "Supercopa de España", round: "Partido de ejemplo", home: "Equipo G", away: "Equipo H", status: "upcoming", venue: "Sede por confirmar", sample: true },
  { id: "ej-5", sport: "futbol", competitionSlug: "seleccion-espana", competition: "Selección Española", round: "Clasificación para el Mundial", home: "España", away: "Rival", status: "upcoming", venue: "Estadio de ejemplo", sample: true },
  { id: "ej-6", sport: "tenis", competitionSlug: "wimbledon", competition: "Wimbledon", round: "Ronda de ejemplo", home: "Carlos Alcaraz", away: "Rival", startsAt: "2027-07-06T14:30:00+02:00", venue: "Centre Court", status: "upcoming", sample: true },
  { id: "ej-7", sport: "mma", competitionSlug: "ilia-topuria", competition: "UFC", round: "Peso pluma", home: "Ilia Topuria", away: "Rival", status: "upcoming", venue: "Sede por confirmar", sample: true },
  { id: "ej-8", sport: "futbol", competitionSlug: "champions-league", competition: "UEFA Champions League", home: "Equipo A", away: "Equipo C", startsAt: "2026-10-28T21:00:00+01:00", venue: "Estadio de ejemplo", status: "finished", score: { home: 2, away: 1 }, sample: true },
  { id: "ej-9", sport: "futbol", competitionSlug: "premier-league", competition: "Premier League", home: "Equipo D", away: "Equipo B", startsAt: "2026-10-31T18:30:00+01:00", venue: "Estadio de ejemplo", status: "finished", score: { home: 0, away: 0 }, sample: true },
  { id: "ej-10", sport: "futbol", competitionSlug: "copa-del-rey", competition: "Copa del Rey", home: "Equipo F", away: "Equipo H", startsAt: "2026-10-30T20:00:00+01:00", venue: "Estadio de ejemplo", status: "finished", score: { home: 3, away: 1 }, sample: true },
  { id: "ej-11", sport: "tenis", competitionSlug: "carlos-alcaraz", competition: "Torneo de ejemplo", round: "Ronda de ejemplo", home: "Carlos Alcaraz", away: "Rival", startsAt: "2026-10-29T15:00:00+01:00", venue: "Pista central", status: "finished", score: { home: 2, away: 0, detail: "Sets" }, sample: true },
  { id: "ej-12", sport: "futbol", competitionSlug: "premier-league", competition: "Premier League", home: "Equipo B", away: "Equipo G", startsAt: "2026-11-09T21:00:00+01:00", venue: "Estadio de ejemplo", status: "postponed", sample: true },
];

export const getFixture = (id: string) => fixtures.find((f) => f.id === id);
export const upcomingFixtures = () => fixtures.filter((f) => f.status !== "finished");
export const resultFixtures = () => fixtures.filter((f) => f.status === "finished");
