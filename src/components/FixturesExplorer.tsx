"use client";

import { useMemo, useState } from "react";
import type { Fixture } from "@/data/types";
import { es } from "@/lib/es";
import { FixtureCard, ResultCard } from "./cards";
import { EmptyState } from "./ui";

const sports = [
  { v: "", l: es.sports.todos }, { v: "futbol", l: es.sports.futbol }, { v: "tenis", l: es.sports.tenis }, { v: "mma", l: es.sports.mma },
];
const days = [
  { v: "", l: es.common.all }, { v: "ayer", l: es.common.yesterday }, { v: "hoy", l: es.common.today },
  { v: "manana", l: es.common.tomorrow }, { v: "semana", l: es.common.thisWeek },
];

const dayKey = (d: Date) => d.toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });

/** Filtros puramente informativos: deporte, competición, fecha y equipo/jugador. */
export function FixturesExplorer({ items, mode }: { items: Fixture[]; mode: "fixtures" | "results" }) {
  const [sport, setSport] = useState("");
  const [comp, setComp] = useState("");
  const [day, setDay] = useState("");
  const [q, setQ] = useState("");

  const comps = useMemo(() => Array.from(new Map(items.map((f) => [f.competitionSlug, f.competition])).entries()), [items]);

  const filtered = useMemo(() => {
    const today = new Date();
    const off = (n: number) => dayKey(new Date(today.getTime() + n * 864e5));
    return items.filter((f) => {
      if (sport && f.sport !== sport) return false;
      if (comp && f.competitionSlug !== comp) return false;
      if (q && !`${f.home} ${f.away}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (day && f.startsAt) {
        const k = dayKey(new Date(f.startsAt));
        if (day === "ayer" && k !== off(-1)) return false;
        if (day === "hoy" && k !== off(0)) return false;
        if (day === "manana" && k !== off(1)) return false;
        if (day === "semana" && !(k >= off(0) && k <= off(7))) return false;
      } else if (day && !f.startsAt) return false;
      return true;
    });
  }, [items, sport, comp, day, q]);

  const field = "min-h-11 rounded-card border border-line bg-surface px-3 text-sm focus:border-brand";
  const reset = () => { setSport(""); setComp(""); setDay(""); setQ(""); };

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="grid gap-3 rounded-card border border-line bg-surface p-4 md:grid-cols-4">
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wider text-ink-soft">{es.common.sport}
          <select value={sport} onChange={(e) => setSport(e.target.value)} className={field}>{sports.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}</select>
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wider text-ink-soft">{es.common.competition}
          <select value={comp} onChange={(e) => setComp(e.target.value)} className={field}>
            <option value="">{es.common.all}</option>
            {comps.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
          </select>
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wider text-ink-soft">{es.common.date}
          <select value={day} onChange={(e) => setDay(e.target.value)} className={field}>{days.map((d) => <option key={d.v} value={d.v}>{d.l}</option>)}</select>
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wider text-ink-soft">{es.common.teamOrPlayer}
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={es.pages.searchPlaceholder} className={field} />
        </label>
      </form>
      <div className="mt-2 text-right"><button type="button" onClick={reset} className="min-h-11 text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-hover">{es.common.clear}</button></div>

      <div aria-live="polite" className="mt-4">
        {filtered.length === 0 ? <EmptyState /> : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filtered.map((f) => mode === "results" ? <ResultCard key={f.id} f={f} /> : <FixtureCard key={f.id} f={f} />)}
          </div>
        )}
      </div>
    </div>
  );
}
