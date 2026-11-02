import Link from "next/link";
import type { ReactNode } from "react";
import type { MatchStatus } from "@/data/types";
import { es } from "@/lib/es";

/** Estado del partido: icono + texto, nunca solo color. */
export function StatusBadge({ status }: { status: MatchStatus }) {
  const map: Record<MatchStatus, { cls: string; icon: ReactNode }> = {
    upcoming: { cls: "border-brand/50 text-brand", icon: <ClockIcon /> },
    live: { cls: "border-live/60 bg-live/10 text-live", icon: <span className="pulse-dot h-2 w-2 rounded-full bg-live" aria-hidden /> },
    finished: { cls: "border-done/50 text-done", icon: <CheckIcon /> },
    postponed: { cls: "border-warn/60 text-warn", icon: <PauseIcon /> },
    cancelled: { cls: "border-done/50 text-done", icon: <CrossIcon /> },
    suspended: { cls: "border-warn/60 text-warn", icon: <PauseIcon /> },
  };
  const m = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-chip border px-2 py-1 text-[11px] font-bold uppercase tracking-wider ${m.cls}`}>
      {m.icon}
      {es.status[status]}
    </span>
  );
}

export const SampleBadge = () => (
  <span className="rounded-chip bg-elevated px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-soft">{es.common.sample}</span>
);

/** Escudo provisional con iniciales hasta disponer de logos oficiales. */
export function Crest({ name, size = 48 }: { name: string; size?: number }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <span aria-hidden style={{ width: size, height: size }} className="grid shrink-0 place-items-center rounded-full border border-line bg-elevated text-sm font-extrabold text-brand">
      {initials}
    </span>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-card px-5 text-sm font-bold uppercase tracking-wide transition-colors";
  const styles = variant === "primary"
    ? "bg-brand text-bg hover:bg-brand-hover active:bg-brand-active"
    : "border border-line text-ink hover:border-brand hover:text-brand active:bg-elevated";
  return <Link href={href} className={`${base} ${styles}`}>{children}<ArrowIcon /></Link>;
}

export function SectionHeader({ title, href, cta }: { title: string; href?: string; cta?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
      {href && cta && <Link href={href} className="shrink-0 text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-hover">{cta} →</Link>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label={es.common.breadcrumbs} className="mb-4 text-sm text-ink-soft">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? <Link href={it.href} className="hover:text-brand">{it.label}</Link> : <span aria-current="page" className="text-ink">{it.label}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StatsCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-card border border-line bg-surface p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</p>
      <p className="num mt-2 text-2xl font-extrabold">{value}</p>
    </div>
  );
}

export function EmptyState({ message = es.states.empty }: { message?: string }) {
  return <div role="status" className="rounded-card border border-dashed border-line p-12 text-center text-ink-soft">{message}</div>;
}

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div role="alert" className="rounded-card border border-live/40 bg-live/5 p-8 text-center">
      <p>{es.states.error}</p>
      {onRetry && <button onClick={onRetry} className="mt-4 min-h-11 rounded-card border border-line px-5 text-sm font-bold uppercase hover:border-brand">{es.states.retry}</button>}
    </div>
  );
}

export function CardSkeleton() {
  return <div role="status" aria-label={es.states.loading} className="h-56 animate-pulse rounded-card bg-surface" />;
}

export function SampleNotice() {
  return <p className="mt-8 rounded-card border border-line bg-surface px-4 py-3 text-sm text-ink-soft">{es.common.sampleNotice}</p>;
}

const ic = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
const ClockIcon = () => <svg {...ic}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
const CheckIcon = () => <svg {...ic}><path d="M5 12l5 5 9-10" /></svg>;
const PauseIcon = () => <svg {...ic}><path d="M9 6v12M15 6v12" /></svg>;
const CrossIcon = () => <svg {...ic}><path d="M6 6l12 12M18 6L6 18" /></svg>;
const ArrowIcon = () => <svg {...ic}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
