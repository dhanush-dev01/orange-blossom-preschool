import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";
import { programmes, feeSheetPath } from "@/data/programmes";
import { ProgrammeEmblem } from "@/components/site/ProgrammeEmblem";
import { VisitForm } from "@/components/site/VisitForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function ProgrammeDetail() {
  const { programmeId } = useParams();
  const programme = programmes.find((p) => p.id === programmeId);

  useDocumentTitle(
    programme
      ? `${programme.name} (${programme.age}) | Orange Play School Bangalore`
      : "Programme not found | Orange Play School",
  );

  if (!programme) return <Navigate to="/programmes" replace />;

  return (
    <main>
      {/* Hero */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> All programmes
            </Link>
            <div className="mt-7">
              <ProgrammeEmblem emblem={programme.emblem} tint={programme.tint} size="lg" />
            </div>
            <p className="eyebrow mt-6 text-meadow">{programme.age}</p>
            <h1 className="display-xl mt-3">{programme.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {programme.promise}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Book a visit <ArrowRight className="size-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
              >
                Enquire about this programme
              </Link>
            </div>
          </div>
          <div className="frame-photo">
            <img
              src={programme.photo}
              alt={programme.photoAlt}
              className="h-[340px] w-full object-cover lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <Fact label="Hours" value={programme.hours} />
          <Fact label="Adult to child" value={programme.ratio} />
          <Fact label="Group size" value={programme.groupSize} />
          <Fact label="Annual fee range" value={programme.feeRange} />
        </div>
      </section>

      {/* What happens in this room */}
      <Block eyebrow="Inside the room" title="What happens in this room">
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
          {programme.room.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </Block>

      {/* Timetable */}
      <section className="bg-cream-deep section-pad">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow text-meadow">The rhythm</p>
          <h2 className="display-lg mt-3">The day, hour by hour</h2>
          <div className="mt-8 overflow-hidden rounded-[--radius-frame] border border-border bg-card">
            <table className="w-full text-left text-sm">
              <tbody>
                {programme.timetable.map((r) => (
                  <tr key={r.time} className="border-b border-border/70 last:border-0">
                    <th scope="row" className="w-28 px-5 py-3.5 align-top font-bold text-meadow">
                      {r.time}
                    </th>
                    <td className="px-5 py-3.5">{r.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team */}
      <Block eyebrow="Who is with them" title="Ratios, group size and the team in the room">
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Stat label="Adult to child" value={programme.ratio} />
          <Stat label="Group size" value={programme.groupSize} />
          <Stat label="Hours" value={programme.hours} />
        </div>
        <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {programme.team.map((t) => (
            <li key={t} className="flex items-start gap-3 border-b border-border/70 pb-4">
              <Check className="mt-1 size-4 shrink-0 text-meadow" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Block>

      {/* Outcomes */}
      <section className="bg-cream-deep section-pad">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow text-meadow">By the end of the year</p>
          <h2 className="display-lg mt-3">What your child will be able to do</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {programme.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 border-b border-border/70 pb-4">
                <Check className="mt-1 size-4 shrink-0 text-meadow" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fees */}
      <Block eyebrow="Fees" title={`Fees for ${programme.name}`}>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {programme.feeRange} per year, depending on hours and campus. Transport and enrichment
          classes are charged separately.
        </p>
        <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {programme.included.map((i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <Check className="mt-1 size-4 shrink-0 text-meadow" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <a
          href={feeSheetPath}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
        >
          <Download className="size-4" /> Download the fee sheet
        </a>
      </Block>

      {/* Checklist */}
      <section className="bg-cream-deep section-pad">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow text-meadow">Practicalities</p>
          <h2 className="display-lg mt-3">What to send with your child</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {programme.checklist.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card px-5 py-4"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-meadow" />
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <Block eyebrow="Questions" title="What parents ask us">
        <Accordion type="single" collapsible className="mt-6">
          {programme.faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-serif text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Block>

      {/* Book a visit */}
      <section id="book" className="border-t border-border bg-cream-deep section-pad">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow text-meadow">Come and see</p>
          <h2 className="display-lg mt-3">Book a visit</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Visits run on weekdays through the school day, so you see the {programme.name} room as
            it actually is. Book a time and we will keep it.
          </p>
          <div className="mt-8">
            <VisitForm programmeName={programme.name} submitLabel="Book a visit" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Block({ eyebrow, title, children }) {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <p className="eyebrow text-meadow">{eyebrow}</p>
        <h2 className="display-lg mt-3">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <p className="eyebrow text-meadow">{label}</p>
      <p className="mt-2 font-serif text-xl leading-snug">{value}</p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-[--radius-card] border border-border bg-card p-5">
      <p className="eyebrow text-meadow">{label}</p>
      <p className="mt-2 font-serif text-xl leading-snug">{value}</p>
    </div>
  );
}
