import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  FileLock2,
  Handshake,
  Landmark,
  MapPin,
  Send,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { useDocumentTitle } from "@/lib/use-document-title";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const modelPhoto = img("photo-1580582932707-520aed937b7b", 1200);

const recordPoints = [
  "Founded 2016",
  "Nine consecutive years of operations",
  "Independently audited every year",
  "Including a pandemic year",
  "FY 2024-25 our strongest year to date",
];

const modelSpecs = [
  { label: "Footprint", value: "4,000+ sq ft" },
  { label: "Capacity", value: "100–110 children" },
  { label: "Real estate", value: "Leased, never bought" },
  { label: "Programmes", value: "Preschool · Daycare · Enrichment" },
  { label: "Alongside", value: "Sambhavam capability" },
  { label: "Teachers", value: "Trained in-house pre-open" },
];

const cities = [
  { name: "Bangalore", status: "Operating", note: "Flagship + growth" },
  { name: "Coimbatore", status: "Operating", note: "Established campus" },
  { name: "Hyderabad", status: "Operating", note: "Established campus" },
  { name: "Chennai", status: "Planned", note: "Next phase" },
  { name: "Kochi", status: "Planned", note: "Next phase" },
  { name: "Mysuru", status: "Planned", note: "Next phase" },
];

const growthPaths = [
  {
    Icon: Building2,
    title: "Owned campuses",
    body: "We take the lease, we run the school. The default path for cities we already operate in.",
    audience: "Landlords · developers",
  },
  {
    Icon: Handshake,
    title: "Franchise partners",
    body: "Operators who can meet our standard, run to our systems, and hire through our academy. [TO CONFIRM — accepting applications.]",
    audience: "Experienced operators",
  },
  {
    Icon: Landmark,
    title: "Landlord & developer partners",
    body: "The right building in the right neighbourhood — we sign long leases and finish to a spec that lasts.",
    audience: "Property owners",
  },
];

const standards = [
  "A central curriculum",
  "A central hiring bar",
  "Our own Teacher Training Academy",
  "One safety standard, group-wide",
  "Audited accounts, every entity",
];

export default function Expansion() {
  useDocumentTitle("Expansion & Partners | Orange Play School Bangalore");
  return (
    <main>
      <Hero />
      <Record />
      <WhatProven />
      <TheModel />
      <Roadmap />
      <HowWeGrow />
      <Standards />
      <ImpactAtScale />
      <ForPartners />
    </main>
  );
}

function SectionHead({ eyebrow, title, kicker }) {
  return (
    <>
      <p className="eyebrow text-meadow">{eyebrow}</p>
      <h2 className="display-lg mt-4">{title}</h2>
      {kicker && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{kicker}</p>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-meadow">Expansion</p>
        <h1 className="display-xl mt-5 max-w-4xl">
          A model built to hold its quality at scale
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Orange has run early-years campuses since 2016. The next phase is deliberate: a repeatable
          centre, opened on lease, staffed by teachers we train ourselves, held to the standard of
          the flagship.
        </p>
        <a
          href="#partners"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Talk to us about partnering <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Record() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The record"
          title="Founded 2016. Nine audited years."
          kicker="Nine consecutive years of operations, independently audited every one of them, including a pandemic year. FY 2024-25 was our strongest year to date."
        />
        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
          {recordPoints.map((r) => (
            <li
              key={r}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhatProven() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead
          eyebrow="What we have proven"
          title="What one campus taught us"
          kicker="A single campus can be run profitably, at quality, for nine years. Costs in this business are largely fixed, so every additional child improves the economics. That is the arithmetic the expansion is built on."
        />
      </div>
    </section>
  );
}

function TheModel() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <figure className="frame-photo order-last lg:order-first">
          <img
            src={modelPhoto}
            alt="Exterior of a repeatable Orange campus with the standard entrance"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <SectionHead eyebrow="The model" title="The repeatable centre" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A 4,000+ sq ft campus for 100–110 children. Leased, never bought — capital goes into
            classrooms, not real estate. Preschool, daycare and enrichment under one roof, with a
            Sambhavam capability alongside. Teachers trained in-house before the doors open.
          </p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {modelSpecs.map((s) => (
              <div
                key={s.label}
                className="rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1 font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The roadmap"
          title="From one campus to one hundred"
          kicker={
            "Our plan is 100 campuses. Bangalore first, then the cities we already operate in, then the wider South. Growth is paced to teacher supply, not to a spreadsheet."
          }
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative overflow-hidden rounded-[--radius-frame] border border-border bg-cream-deep p-8 shadow-lift">
            <div className="flex items-center gap-2 text-meadow">
              <Compass className="size-5" aria-hidden />
              <span className="eyebrow">South India · operating &amp; planned</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {cities.map((c) => (
                <div
                  key={c.name}
                  className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4"
                >
                  <MapPin
                    className={`mt-0.5 size-5 shrink-0 ${
                      c.status === "Operating" ? "text-meadow" : "text-muted-foreground"
                    }`}
                    aria-hidden
                  />
                  <div>
                    <p className="font-serif text-lg font-semibold">{c.name}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {c.status}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No dates on the public page. Growth is paced to teacher supply.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft">
              <p className="eyebrow text-meadow">The target</p>
              <p className="mt-3 font-serif text-4xl font-semibold">100 campuses</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Bangalore first, then the cities we already operate in, then the wider South.
              </p>
            </div>
            <div className="rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft">
              <p className="eyebrow text-meadow">The pace</p>
              <p className="mt-3 font-serif text-2xl font-semibold">Paced to teacher supply</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Trained through our own academy. We do not open a campus we cannot staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeGrow() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="How we grow"
          title="Three ways to grow with us"
          kicker="Owned campuses. Franchise partners who meet our standard. Landlords and developers with the right building in the right neighbourhood."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {growthPaths.map(({ Icon, title, body, audience }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid size-11 place-items-center rounded-full bg-meadow-soft text-meadow">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-serif text-xl font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
              <p className="mt-auto text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {audience}
              </p>
            </article>
          ))}
        </div>
        <a
          href="#partners"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Start a conversation <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
            <ShieldCheck className="size-4" aria-hidden />
          </span>
          <p className="eyebrow text-meadow">Standards</p>
        </div>
        <h2 className="display-lg mt-4">Quality does not travel by accident</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A central curriculum, a central hiring bar, our own teacher training academy, one safety
          standard, and audited accounts group-wide.
        </p>
        <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ImpactAtScale() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Sprout className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Impact as part of the model</p>
          </div>
          <h2 className="display-lg mt-4">Growth that carries the whole group</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Every new campus carries a local giving-back commitment and hires from our tribal
            teacher programme. Scale is how the social side of Orange scales too.
          </p>
          <Link
            to="/for-a-better-world"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            See For a Better World <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Local commitment per campus", value: "One" },
            { label: "Hires from tribal programme", value: "Every campus" },
            { label: "Trees planted per opening", value: "100 native" },
            { label: "Community reviews", value: "Annual" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-[--radius-card] border border-border bg-card p-5 shadow-soft"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = true, placeholder, autoComplete }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-bold">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function ForPartners() {
  const [sent, setSent] = useState(false);
  return (
    <section id="partners" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <FileLock2 className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">For investors &amp; partners</p>
          </div>
          <h2 className="display-lg mt-4">Talk to us</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We share detailed financials, our unit-economic model and audited accounts under NDA
            with serious partners. Requests go to the founder inbox — nothing financial is posted
            publicly.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Detailed unit economics under NDA",
              "Audited accounts, group-wide",
              "Founder-led first conversation",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
                <span className="font-semibold">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <div className="rounded-[--radius-frame] border border-meadow/30 bg-meadow-soft p-8 shadow-lift">
            <p className="eyebrow text-meadow">Received</p>
            <p className="mt-4 font-serif text-2xl">Request logged — the founder will reply.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              We aim to reply within two working days. The partner pack is shared over encrypted
              email after a short call and an NDA.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            className="grid gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-lift sm:p-8 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Your name" name="ex-name" placeholder="Full name" autoComplete="name" />
            <Field label="Organisation" name="ex-org" placeholder="Fund, family office, or company" />
            <Field
              label="Work email"
              name="ex-email"
              type="email"
              placeholder="you@organisation.com"
              autoComplete="email"
            />
            <Field label="Phone" name="ex-phone" type="tel" required={false} placeholder="+91" autoComplete="tel" />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="ex-interest" className="text-sm font-bold">
                What kind of partnership? <span className="text-primary">*</span>
              </label>
              <select
                id="ex-interest"
                name="ex-interest"
                required
                defaultValue=""
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>Investor / capital partner</option>
                <option>Franchise operator</option>
                <option>Landlord / developer</option>
                <option>Press / research</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="ex-note" className="text-sm font-bold">
                A short note
              </label>
              <textarea
                id="ex-note"
                name="ex-note"
                rows={4}
                placeholder="City, timeline, ticket size, or the specific question we can save you a call with."
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="sm:col-span-2 flex items-start gap-2 rounded-lg border border-border bg-muted px-3.5 py-2.5">
              <input
                id="ex-nda"
                name="ex-nda"
                type="checkbox"
                required
                className="mt-1 size-4 rounded border-input text-primary focus:ring-primary/30"
              />
              <label htmlFor="ex-nda" className="text-sm font-semibold leading-relaxed">
                I understand the partner pack is shared under NDA after a short call.
              </label>
            </div>

            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" /> Request the partner pack
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
