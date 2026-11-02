import type { ReactNode } from "react";
import { Breadcrumbs } from "./ui";

export function PageShell({ crumbs, title, lead, children }: { crumbs: { label: string; href?: string }[]; title: string; lead?: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-page px-4 py-8 md:px-6 md:py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
      {lead && <p className="mt-3 max-w-2xl text-lg text-ink-soft">{lead}</p>}
      <div className="mt-10 space-y-16">{children}</div>
    </div>
  );
}
