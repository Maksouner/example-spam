import type { Competition } from "./types";

const TBC = "Por confirmar";

export const competitions: Competition[] = [
  { slug: "champions-league", sport: "futbol", path: "/futbol/champions-league", name: "UEFA Champions League", short: "Champions League", tone: "from-[#0B2A6B] to-[#1A56C9]",
    description: "La máxima competición europea de clubes: fase de liga, eliminatorias y final. Consulta partidos, resultados y calendario.",
    info: [{ label: "Organizador", value: "UEFA" }, { label: "Formato", value: "Fase de liga y eliminatorias" }, { label: "Edición actual", value: TBC }], related: ["premier-league", "copa-del-rey"] },
  { slug: "premier-league", sport: "futbol", path: "/futbol/premier-league", name: "Premier League", short: "Premier League", tone: "from-[#2A1654] to-[#6A3CC4]",
    description: "La primera división del fútbol inglés. Partidos, resultados, calendario y clasificación de la liga.",
    info: [{ label: "País", value: "Inglaterra" }, { label: "Equipos", value: "20" }, { label: "Temporada", value: TBC }], related: ["champions-league", "seleccion-espana"] },
  { slug: "copa-del-rey", sport: "futbol", path: "/futbol/copa-del-rey", name: "Copa del Rey", short: "Copa del Rey", tone: "from-[#5A0F1D] to-[#B8283F]",
    description: "El torneo de copa del fútbol español, con eliminatorias y final. Calendario, equipos y resultados.",
    info: [{ label: "País", value: "España" }, { label: "Formato", value: "Eliminatorias" }, { label: "Edición actual", value: TBC }], related: ["supercopa-de-espana", "champions-league"] },
  { slug: "supercopa-de-espana", sport: "futbol", path: "/futbol/supercopa-de-espana", name: "Supercopa de España", short: "Supercopa", tone: "from-[#5C3A06] to-[#C98A14]",
    description: "Torneo que reúne a los clubes clasificados de la temporada anterior. Partidos, resultados, equipos y calendario.",
    info: [{ label: "País", value: "España" }, { label: "Formato", value: "Semifinales y final" }, { label: "Edición actual", value: TBC }], related: ["copa-del-rey", "champions-league"] },
  { slug: "seleccion-espana", sport: "futbol", path: "/futbol/seleccion-espana", name: "Selección Española", short: "Selección Española", tone: "from-[#6B0F14] to-[#C8102E]",
    description: "Clasificación para el Mundial, amistosos, próximos partidos, resultados y jugadores de la Selección Española.",
    info: [{ label: "Federación", value: "RFEF" }, { label: "Competiciones", value: "Clasificación para el Mundial y amistosos" }, { label: "Próximo partido", value: TBC }], related: ["champions-league", "premier-league"] },
  { slug: "wimbledon", sport: "tenis", path: "/tenis/wimbledon", name: "Wimbledon", short: "Wimbledon", tone: "from-[#0B3D2A] to-[#2F8F5B]",
    description: "El torneo de tenis sobre hierba más antiguo del mundo. Información del torneo, calendario, partidos, resultados y rondas.",
    info: [{ label: "Superficie", value: "Hierba" }, { label: "Sede", value: "Londres" }, { label: "Pista principal", value: "Centre Court" }], related: ["carlos-alcaraz"] },
];

export const getCompetition = (slug: string) => competitions.find((c) => c.slug === slug);
