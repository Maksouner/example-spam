import type { Athlete } from "./types";

const TBC = "Por confirmar";

export const players: Athlete[] = [
  { slug: "carlos-alcaraz", sport: "tenis", path: "/tenis/carlos-alcaraz", name: "Carlos Alcaraz", role: "Tenista · España", sample: true,
    summary: "Partidos, resultados y calendario de torneos de Carlos Alcaraz.",
    stats: [{ label: "Torneo actual", value: TBC }, { label: "Próximo torneo", value: TBC }, { label: "Ranking", value: TBC }, { label: "Títulos", value: TBC }] },
  { slug: "ilia-topuria", sport: "mma", path: "/mma/ilia-topuria", name: "Ilia Topuria", role: "Peleador de MMA · Peso pluma", sample: true,
    summary: "Próximo combate, récord y estadísticas de Ilia Topuria.",
    stats: [{ label: "Récord", value: TBC }, { label: "Victorias", value: TBC }, { label: "Derrotas", value: TBC }, { label: "Categoría", value: "Peso pluma" }] },
];
