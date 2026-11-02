// Todas las cadenas visibles del sitio. Preparado para añadir otros idiomas.
export const es = {
  site: { name: "1XSPORTS", tagline: "Información deportiva: partidos, resultados y calendario" },
  nav: {
    inicio: "Inicio", futbol: "Fútbol", tenis: "Tenis", mma: "MMA", competiciones: "Competiciones",
    partidos: "Partidos", resultados: "Resultados", noticias: "Noticias", buscar: "Buscar",
    menu: "Abrir menú", cerrarMenu: "Cerrar menú", principal: "Navegación principal", deportes: "Deportes",
  },
  sports: { todos: "Todos", futbol: "Fútbol", tenis: "Tenis", mma: "MMA" },
  status: {
    upcoming: "Próximamente", live: "En directo", finished: "Finalizado",
    postponed: "Aplazado", cancelled: "Cancelado", suspended: "Suspendido",
  },
  cta: {
    matchDetails: "Detalles del partido", eventDetails: "Detalles del evento", viewMatches: "Ver partidos",
    viewResults: "Ver resultados", viewCalendar: "Ver calendario", viewCompetition: "Ver competición",
    playerProfile: "Perfil del jugador", viewTournament: "Ver torneo", readMore: "Leer más",
    viewStats: "Ver estadísticas", moreInfo: "Más información", loadMore: "Cargar más",
  },
  common: {
    sample: "Datos de ejemplo", sampleMatch: "Partido de ejemplo", tbcDate: "Fecha por confirmar",
    tbcTime: "Hora por confirmar", rival: "Rival", teamA: "Equipo A", teamB: "Equipo B", vs: "vs",
    today: "Hoy", tomorrow: "Mañana", yesterday: "Ayer", thisWeek: "Esta semana", calendar: "Calendario",
    venue: "Sede", round: "Ronda", court: "Pista", weight: "Categoría de peso", record: "Récord",
    event: "Evento", breadcrumbs: "Ruta de navegación", home: "Inicio", all: "Todas", sport: "Deporte",
    competition: "Competición", date: "Fecha", teamOrPlayer: "Equipo / Jugador", clear: "Quitar filtros",
    sampleNotice: "Los datos mostrados son de ejemplo y no corresponden a información deportiva real.",
  },
  home: {
    featured: "Evento destacado", upcoming: "Próximos partidos", competitions: "Competiciones destacadas",
    athletes: "Deportistas destacados", latestResults: "Últimos resultados", news: "Últimas noticias",
    seoTitle: "1XSPORTS — Partidos, resultados y calendario deportivo",
    seoDescription: "Consulta el calendario, los resultados y la información de fútbol, tenis y MMA: Champions League, Premier League, Copa del Rey, Wimbledon y más.",
  },
  pages: {
    fixturesTitle: "Calendario de partidos", fixturesLead: "Todos los partidos y eventos por deporte, competición y fecha.",
    resultsTitle: "Resultados", resultsLead: "Marcadores finales de las últimas jornadas.",
    newsTitle: "Últimas noticias", newsLead: "Actualidad deportiva de fútbol, tenis y MMA.",
    competitionsTitle: "Competiciones", competitionsLead: "Fútbol, tenis y MMA: todas las competiciones en un solo lugar.",
    searchTitle: "Buscar", searchPlaceholder: "Buscar equipos, jugadores o competiciones",
  },
  competition: {
    upcoming: "Próximos partidos", results: "Últimos resultados", calendar: "Calendario",
    teams: "Equipos", players: "Jugadores", info: "Información de la competición",
    news: "Últimas noticias", related: "Competiciones relacionadas", phases: "Fases de la competición",
    standings: "Clasificación",
  },
  alcaraz: {
    title: "Carlos Alcaraz — Partidos, resultados y calendario",
    description: "Próximo partido, torneo actual, últimos resultados y calendario de torneos de Carlos Alcaraz.",
    next: "Próximo partido", currentTournament: "Torneo actual", upcomingMatches: "Próximos partidos",
    lastResults: "Últimos resultados", upcomingTournaments: "Próximos torneos", stats: "Estadísticas",
    history: "Historial de torneos", news: "Noticias relacionadas", tournament: "Torneo",
  },
  topuria: {
    title: "Ilia Topuria — Próximo combate, resultados y estadísticas",
    description: "Próximo combate, récord, combates anteriores y estadísticas de Ilia Topuria.",
    next: "Próximo combate", record: "Récord", lastFights: "Últimos combates", results: "Resultados",
    stats: "Estadísticas", opponent: "Información del rival", upcomingEvents: "Próximos eventos", news: "Noticias relacionadas",
  },
  spain: {
    title: "Selección Española — Partidos, resultados y calendario",
    description: "Clasificación para el Mundial, amistosos, próximos partidos, resultados y jugadores de la Selección Española.",
    tabs: { qualifying: "Clasificación para el Mundial", friendlies: "Amistosos", matches: "Partidos", results: "Resultados", squad: "Selección", players: "Jugadores" },
    next: "Próximos partidos de España",
  },
  match: {
    title: "Detalles del partido", score: "Marcador", status: "Estado", stadium: "Estadio", headToHead: "Enfrentamientos anteriores",
    teamInfo: "Información de los equipos", lastResults: "Últimos resultados", noH2H: "Sin datos de enfrentamientos anteriores.",
  },
  states: {
    empty: "No hay resultados para los filtros seleccionados.", error: "No se ha podido cargar la información.",
    retry: "Volver a intentarlo", loading: "Cargando información",
  },
  footer: {
    about: "Sobre nosotros", contact: "Contacto", privacy: "Política de privacidad", terms: "Términos y condiciones",
    cookies: "Política de cookies", rights: "Todos los derechos reservados.", sections: "Secciones", info: "Información",
  },
  a11y: { logo: "1XSPORTS — ir a la página de inicio", stats: "Estadísticas", scrollSports: "Selector de deporte" },
} as const;
