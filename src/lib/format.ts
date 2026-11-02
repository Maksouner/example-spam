const LOCALE = "es-ES";
const TZ = "Europe/Madrid";

export const formatTime = (iso: string) =>
  new Intl.DateTimeFormat(LOCALE, { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: TZ }).format(new Date(iso));

export const formatLongDate = (iso: string) =>
  new Intl.DateTimeFormat(LOCALE, { day: "numeric", month: "long", timeZone: TZ }).format(new Date(iso));

export const formatShortDate = (iso: string) => {
  const d = new Date(iso);
  const day = new Intl.DateTimeFormat(LOCALE, { day: "2-digit", timeZone: TZ }).format(d);
  const mon = new Intl.DateTimeFormat(LOCALE, { month: "short", timeZone: TZ }).format(d).replace(".", "").toUpperCase();
  return `${day} ${mon}`;
};

export const formatFullDate = (iso: string) =>
  new Intl.DateTimeFormat(LOCALE, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: TZ }).format(new Date(iso));
