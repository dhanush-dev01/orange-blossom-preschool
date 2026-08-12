import { Link } from "react-router-dom";

export function PageShell({ eyebrow, title, intro, cta, children }) {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <p className="eyebrow text-meadow">{eyebrow}</p>
        <h1 className="display-lg mt-4">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        {cta && (
          <Link
            to={cta.to}
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            {cta.label}
          </Link>
        )}
        <div className="mt-10 rounded-[--radius-frame] border border-dashed border-border bg-card p-8 text-sm text-muted-foreground">
          Detailed content for this page is coming next — the layout, sections and copy will be
          added once the design is finalised.
        </div>
        {children}
      </div>
    </main>
  );
}
