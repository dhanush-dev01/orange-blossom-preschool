import { Link } from "react-router-dom";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";

// Privacy notice — definitive copy will come from Orange's legal team.
// Structure below gives them a fixed skeleton to drop real copy into.
const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: "Orange Group of Schools is operated by SMR Foundation, a registered trust in India. This notice explains what information we collect through orangeschools.net and at our campuses, and how we use it.",
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: "Contact details you give us through enquiry forms (parent name, phone, WhatsApp, email, child's date of birth, campus and programme preferences). Standard web analytics from your visit to the site.",
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: "To reply to your enquiry, schedule a campus visit, and share information about the specific programme you asked about. We do not add you to a marketing list without your explicit consent.",
  },
  {
    id: "who-we-share-with",
    title: "Who we share it with",
    body: "[Orange legal team to supply — list of processors: CRM, email service, analytics, and any partner hospital or NGO for Better World programme enquiries.]",
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: "Enquiry records are retained for [TO CONFIRM] months. Admissions records are retained for the duration of a child's enrolment plus [TO CONFIRM] years, in line with statutory requirements.",
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: "You can ask to see, correct, or delete the personal information we hold about you. Write to us at privacy@orangeschools.net and we will reply within one working week.",
  },
  {
    id: "cctv",
    title: "CCTV on campus",
    body: "Cameras cover every classroom, corridor and play area. Footage is retained for [TO CONFIRM] days and never shared outside the campus except at the written request of law enforcement.",
  },
  {
    id: "children-online",
    title: "Children online",
    body: "This website is not intended for children. Any child photograph published here has written parental consent on file.",
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: "[Orange legal team to supply — cookie list, analytics vendor, opt-out mechanism.]",
  },
  {
    id: "changes",
    title: "Changes to this notice",
    body: "We may update this notice from time to time. The last-updated date at the top of the page reflects the latest change.",
  },
];

export default function Privacy() {
  useDocumentMeta({
    title: "Privacy Notice | Orange Group of Schools",
    description:
      "What information we collect, how we use it, how long we keep it, and how to exercise your rights.",
  });
  const lastUpdated = "August 2026";
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
            <ShieldCheck className="size-4" aria-hidden />
          </span>
          <p className="eyebrow text-meadow">Legal</p>
        </div>
        <h1 className="display-xl mt-4">Privacy notice</h1>
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
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft">
          <p className="eyebrow text-meadow">Contact</p>
          <p className="mt-3 font-serif text-lg font-semibold">Questions about your data?</p>
          <a
            href="mailto:privacy@orangeschools.net"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            <Mail className="size-4" /> privacy@orangeschools.net
          </a>
          <p className="mt-1 text-xs italic text-muted-foreground">TO CONFIRM</p>
          <Link
            to="/terms"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-meadow"
          >
            Read the terms &amp; policies <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}