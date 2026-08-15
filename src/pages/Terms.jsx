import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";

// Legal copy must come from Orange's legal team — do not invent it.
// These sections mirror the plan's "Legal" grouping (Privacy · Terms) and
// give the legal team a fixed structure to drop real copy into.
const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: "Orange Group of Schools is operated by SMR Foundation, a registered trust in India. This page sets out the terms on which we run the website and the campuses.",
  },
  {
    id: "acceptable-use",
    title: "Acceptable use of this website",
    body: "[Orange legal team to supply — permitted and prohibited use of orangeschools.net.]",
  },
  {
    id: "content-ownership",
    title: "Content and intellectual property",
    body: "[Orange legal team to supply — ownership of photography, illustrations, brand marks and written copy.]",
  },
  {
    id: "campus-policies",
    title: "Campus policies",
    body: "Safeguarding, illness, medication, transport and pick-up policies apply at every campus. Signed copies are provided at admission and updated policy PDFs are linked below.",
    links: [
      { label: "Safeguarding policy (PDF)", href: "#", note: "TO CONFIRM" },
      { label: "Illness policy (PDF)", href: "#", note: "TO CONFIRM" },
      { label: "Transport policy (PDF)", href: "#", note: "TO CONFIRM" },
    ],
  },
  {
    id: "fees-and-cancellations",
    title: "Fees, refunds and cancellations",
    body: "[Orange legal team to supply — registration deposits, refund windows, cancellation notice periods, transport fees.]",
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: "[Orange legal team to supply.]",
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: "These terms are governed by the laws of India. Any dispute is subject to the courts of Bangalore.",
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Material changes will be flagged on the website and, where relevant, communicated to parents directly.",
  },
];

export default function Terms() {
  useDocumentMeta({
    title: "Terms & Campus Policies | Orange Group of Schools",
    description:
      "Terms of use for orangeschools.net, campus policies (safeguarding, illness, transport) and how to contact us.",
  });
  const lastUpdated = "August 2026";
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
            <FileText className="size-4" aria-hidden />
          </span>
          <p className="eyebrow text-meadow">Legal</p>
        </div>
        <h1 className="display-xl mt-4">Terms &amp; policies</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        <p className="mt-5 rounded-[--radius-card] border border-dashed border-border bg-card p-4 text-sm text-muted-foreground">
          The definitive copy for this page is being finalised by Orange&rsquo;s legal team.
          Placeholders below mark the sections awaiting real copy.
        </p>

        <nav aria-label="On this page" className="mt-8">
          <p className="eyebrow text-meadow">On this page</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
              {s.links && (
                <ul className="mt-4 space-y-2">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                      >
                        {l.label} <ArrowRight className="size-4" />
                        {l.note && (
                          <span className="text-xs font-semibold italic text-muted-foreground">
                            {l.note}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft">
          <p className="eyebrow text-meadow">Contact</p>
          <p className="mt-3 font-serif text-lg font-semibold">Questions about these terms?</p>
          <a
            href="mailto:legal@orangeschools.net"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            <Mail className="size-4" /> legal@orangeschools.net
          </a>
          <p className="mt-1 text-xs italic text-muted-foreground">TO CONFIRM</p>
          <Link
            to="/privacy"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-meadow"
          >
            Read the privacy notice <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
