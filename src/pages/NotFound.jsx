import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";

export default function NotFound() {
  useDocumentMeta({
    title: "Page not found | Orange Group of Schools",
    description:
      "This page has wandered off. Head back to the classroom — or browse our programmes.",
  });
  return (
    <main className="section-pad">
      <div className="mx-auto grid max-w-4xl gap-8 px-5 text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-meadow-soft text-meadow">
          <Compass className="size-7" aria-hidden />
        </div>
        <p className="eyebrow text-meadow">404</p>
        <h1 className="display-xl">This page has wandered off</h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
          Let&rsquo;s get you back to the classroom.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Go home <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            See our programmes <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
