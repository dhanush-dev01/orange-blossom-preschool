import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Check } from "lucide-react";
import { programmes, feeSheetPath } from "@/data/programmes";
import { ProgrammeEmblem } from "@/components/site/ProgrammeEmblem";
import { useDocumentMeta } from "@/lib/use-document-meta";

export default function Programmes() {
  useDocumentMeta({
    title: "Programmes — Infant Care to UKG | Orange",
    description:
      "Six programmes from 6 months to 6 years, each with its own space, ratio and curriculum. Find the right room for your child.",
  });
  return (
    <main>
      <Intro />
      <AgeLadder />
      <ProgrammeCards />
      <DayInTheLife />
      <Fees />
      <Admissions />
    </main>
  );
}

function Intro() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <p className="eyebrow text-meadow">Our programmes</p>
        <h1 className="display-xl mt-5">Six programmes, six months to six years</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          From six months to six years, a child moves through six programmes. Each one has its own
          space, its own adult-to-child ratio, and a curriculum written for that age — not a
          scaled-down version of the next one up.
        </p>
      </div>
    </section>
  );
}

function AgeLadder() {
  return (
    <section className="border-y border-border bg-cream-deep py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-2xl">The age ladder</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Enquire about this programme <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
          {programmes.map((p) => (
            <Link
              key={p.id}
              to={`/programmes/${p.id}`}
              className="group flex flex-1 items-center gap-4 rounded-[--radius-card] border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-lift md:flex-col md:items-start"
            >
              <span className={`h-2 w-full rounded-full ${p.tint} md:order-first`} />
              <div>
                <p className="eyebrow text-meadow">{p.age}</p>
                <p className="mt-1 font-serif text-lg leading-tight">{p.name}</p>
              </div>
              <ArrowRight className="ml-auto size-4 text-primary transition-transform group-hover:translate-x-1 md:ml-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgrammeCards() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="display-lg">Every programme, in detail</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.id}
              to={`/programmes/${p.id}`}
              className="group flex flex-col overflow-hidden rounded-[--radius-frame] border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={p.photo}
                alt={p.photoAlt}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <ProgrammeEmblem emblem={p.emblem} tint={p.tint} />
                <p className="eyebrow mt-5 text-meadow">{p.age}</p>
                <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                <dl className="mt-5 grid grid-cols-2 gap-y-2 border-t border-border pt-4 text-sm">
                  <dt className="text-muted-foreground">Ratio</dt>
                  <dd className="font-bold">{p.ratio}</dd>
                  <dt className="text-muted-foreground">Group size</dt>
                  <dd className="font-bold">{p.groupSize}</dd>
                  <dt className="text-muted-foreground">Hours</dt>
                  <dd className="font-bold">{p.hours}</dd>
                </dl>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  See the programme{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DayInTheLife() {
  const [active, setActive] = useState(programmes[0].id);
  const programme = programmes.find((p) => p.id === active) ?? programmes[0];

  return (
    <section className="bg-cream-deep section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <p className="eyebrow text-meadow">A day in the life</p>
        <h2 className="display-lg mt-3">A day, hour by hour</h2>

        <div role="tablist" aria-label="Programme" className="mt-8 flex flex-wrap gap-2">
          {programmes.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={p.id === active}
              onClick={() => setActive(p.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                p.id === active
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[--radius-frame] border border-border bg-card">
          <Timetable rows={programme.timetable} />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Sample day for {programme.name} · {programme.hours}
        </p>
      </div>
    </section>
  );
}

export function Timetable({ rows }) {
  return (
    <table className="w-full text-left text-sm">
      <tbody>
        {rows.map((r) => (
          <tr key={r.time} className="border-b border-border/70 last:border-0">
            <th scope="row" className="w-28 px-5 py-3.5 align-top font-bold text-meadow">
              {r.time}
            </th>
            <td className="px-5 py-3.5">{r.activity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Fees() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <p className="eyebrow text-meadow">Fees</p>
        <h2 className="display-lg mt-3">Fees, plainly</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Annual fees range from ₹85,000 to ₹1,35,000 depending on programme and hours. Daycare is
          also available hourly from ₹1,000 per hour. Fees include curriculum materials, meals and
          snacks; transport and enrichment classes are charged separately.
        </p>

        <div className="mt-8 overflow-hidden rounded-[--radius-frame] border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-5 py-3.5 font-bold">Programme</th>
                <th className="px-5 py-3.5 font-bold">Age</th>
                <th className="px-5 py-3.5 font-bold">Annual fee range</th>
              </tr>
            </thead>
            <tbody>
              {programmes.map((p) => (
                <tr key={p.id} className="border-t border-border/70">
                  <td className="px-5 py-3.5 font-bold">{p.name}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{p.age}</td>
                  <td className="px-5 py-3.5">{p.feeRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a
          href={feeSheetPath}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
        >
          <Download className="size-4" /> Download the fee sheet
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Registration and deposit amounts, late-pickup charges and transport rates are listed in
          the fee sheet, per campus.
        </p>
      </div>
    </section>
  );
}

function Admissions() {
  const steps = [
    "Enquire",
    "Campus visit",
    "A conversation with our team",
    "Registration",
    "Start date",
  ];
  return (
    <section className="border-t border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <p className="eyebrow text-meadow">Admissions</p>
        <h2 className="display-lg mt-3">How admission works</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Enquire → campus visit → a conversation with our team → registration → start date.
          Admissions run through the year, subject to space in the age group.
        </p>

        <ol className="mt-8 grid gap-3 sm:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s}
              className="rounded-[--radius-card] border border-border bg-card p-4 text-sm font-bold"
            >
              <span className="block font-serif text-2xl text-primary">{i + 1}</span>
              <span className="mt-1 block">{s}</span>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 font-serif text-2xl">Seats available right now</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between gap-3 rounded-[--radius-card] border border-border bg-card px-5 py-4"
            >
              <div>
                <p className="font-bold">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.age}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-sm font-bold ${
                  p.seats <= 2 ? "bg-blush" : "bg-meadow-soft"
                }`}
              >
                {p.seats} left
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Enquire <ArrowRight className="size-4" />
          </Link>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="size-4 text-meadow" /> Seat numbers updated weekly by each campus.
          </span>
        </div>
      </div>
    </section>
  );
}
