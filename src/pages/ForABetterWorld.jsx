import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  HeartHandshake,
  Leaf,
  Mail,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";
import { FormStatus, Honeypot, useWeb3Forms } from "@/lib/use-web3forms";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const heroPhoto = img("photo-1488521787991-ed7bbaae773c", 1600);

const programmes = [
  {
    id: "insulin",
    eyebrow: "Programme 1 · Health",
    title: "Insulin, sponsored",
    lead:
      "Type 1 diabetes is manageable and lifelong, and the monthly cost of insulin and supplies is what defeats most families. We sponsor that cost for 12 children [PLACEHOLDER] in partnership with [PLACEHOLDER] Hospital, reviewed annually.",
    stats: [
      { label: "Children supported", value: "12" },
      { label: "Reviewed", value: "Annually" },
      { label: "Partner", value: "1 hospital" },
    ],
    photo: img("photo-1584982751601-97dcc096659c", 1000),
    alt: "A pair of hands preparing an insulin pen",
    cta: { to: "/contact", label: "Apply for support" },
    Icon: HeartHandshake,
    reverse: false,
  },
  {
    id: "bags",
    eyebrow: "Programme 2 · Education",
    title: "Bags, books and the walk to school",
    lead:
      "Each year we deliver school bags and supplies to government-school children in villages other programmes do not reach — 400 bags across 3 villages in [PLACEHOLDER] district last year, delivered by our own teachers.",
    stats: [
      { label: "Bags last year", value: "400" },
      { label: "Villages", value: "3" },
      { label: "Delivered by", value: "Our teachers" },
    ],
    photo: img("photo-1497486751825-1233686d5d80", 1000),
    alt: "Children carrying school bags on a village path",
    cta: null,
    Icon: BookOpen,
    reverse: true,
  },
  {
    id: "trees",
    eyebrow: "Programme 3 · Environment",
    title: "A campus, and the trees around it",
    lead:
      "We plant 100 native trees [PLACEHOLDER] with every campus we open and maintain them for three years. Children look after them as part of the school year. Of [PLACEHOLDER] planted so far, [PLACEHOLDER]% are still standing.",
    stats: [
      { label: "Trees per campus", value: "100" },
      { label: "Care period", value: "3 years" },
      { label: "Survival rate", value: "[PLACEHOLDER]%" },
    ],
    photo: img("photo-1502741338009-cac2772e18bc", 1000),
    alt: "Two children planting a sapling",
    cta: null,
    Icon: Leaf,
    reverse: false,
  },
];

const teacherStats = [
  { label: "Women trained", value: "[PLACEHOLDER]" },
  { label: "Now teaching", value: "[PLACEHOLDER]" },
  { label: "Campuses hosting", value: "All" },
  { label: "Cost to trainee", value: "Zero" },
];

const teacherPortraits = [
  { photo: img("photo-1544005313-94ddf0286df2", 600), alt: "Portrait of a teacher from the tribal programme" },
  { photo: img("photo-1580489944761-15a19d654956", 600), alt: "Portrait of a teacher from the tribal programme" },
  { photo: img("photo-1573497019940-1c28c88b4f3e", 600), alt: "Portrait of a teacher from the tribal programme" },
  { photo: img("photo-1531123897727-8f129e1688ce", 600), alt: "Portrait of a teacher from the tribal programme" },
];

const articles = [
  {
    slug: "why-we-sponsor-insulin",
    category: "Impact",
    title: "Why we sponsor insulin",
    excerpt:
      "What a lifelong condition costs a family in a year, and why the sponsorship is monthly rather than one-off.",
    photo: img("photo-1579154204601-01588f351e67", 800),
    alt: "A vial of insulin on a wooden table",
  },
  {
    slug: "what-a-school-bag-actually-changes",
    category: "Impact",
    title: "What a school bag actually changes",
    excerpt:
      "Notes from the last delivery in a village most maps skip — what the bag carries and what it does not.",
    photo: img("photo-1503676260728-1c00da094a0b", 800),
    alt: "A row of new school bags",
  },
  {
    slug: "meet-the-first-teachers",
    category: "Inside Orange",
    title: "Meet the first teachers from the tribal programme",
    excerpt:
      "Four women, four villages, one classroom each. What year one looked like, in their own words.",
    photo: img("photo-1544005313-94ddf0286df2", 800),
    alt: "A teacher in a classroom",
  },
  {
    slug: "ready-for-lkg",
    category: "Parenting",
    title: "How to tell if your child is ready for LKG",
    excerpt:
      "A short, honest checklist from our educators — the questions we wish parents asked us, not the ones they usually ask.",
    photo: img("photo-1503454537195-1dcabb73ffb9", 800),
    alt: "A child looking at a book",
  },
  {
    slug: "early-signs-extra-support",
    category: "Parenting",
    title: "Early signs a child may need extra support",
    excerpt:
      "Written with the Sambhavam team: what to look for, what is normal, and what to do next.",
    photo: img("photo-1587616211892-f743fcca64f9", 800),
    alt: "A teacher sitting with a child on a rug",
  },
];

export default function ForABetterWorld() {
  useDocumentMeta({
    title: "For a Better World | Orange Group of Schools",
    description:
      "Insulin sponsorship, school bags for unreached villages, trees with every campus, and teaching careers for tribal young women.",
    image: heroPhoto,
  });
  return (
    <main>
      <Hero />
      {programmes.map((p) => (
        <ProgrammeBlock key={p.id} programme={p} />
      ))}
      <TribalTeacherProgramme />
      <HowFunded />
      <Journal />
      <PartnerWithUs />
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
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow text-meadow">For a Better World</p>
          <h1 className="display-xl mt-5">What we do beyond the gate</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A school sits inside a community. These are the four commitments we keep outside our own
            classrooms — reported honestly, including what we have not managed yet.
          </p>
          <a
            href="#partner"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Support a programme <ArrowRight className="size-4" />
          </a>
        </div>
        <figure className="frame-photo">
          <img
            src={heroPhoto}
            alt="A community gathering under trees at dusk"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

function ProgrammeBlock({ programme }) {
  const { eyebrow, title, lead, stats, photo, alt, cta, Icon, reverse } = programme;
  const bg = reverse ? "border-y border-border bg-cream-deep" : "";
  return (
    <section className={`${bg} section-pad`}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <figure
          className={`frame-photo ${reverse ? "order-last lg:order-last" : "order-last lg:order-first"}`}
        >
          <img src={photo} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        </figure>
        <div className={reverse ? "lg:order-first" : ""}>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Icon className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">{eyebrow}</p>
          </div>
          <h2 className="display-lg mt-4">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
          {cta && (
            <Link
              to={cta.to}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              {cta.label} <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function TribalTeacherProgramme() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
            <Users className="size-4" aria-hidden />
          </span>
          <p className="eyebrow text-meadow">Programme 4 · Livelihoods</p>
        </div>
        <h2 className="display-xl mt-4 max-w-3xl">Teaching as a way out, and a way back</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          We recruit young women and graduates from tribal villages, train them at our Teacher
          Training Academy at no cost, support relocation, and employ them as preschool teachers.
          [PLACEHOLDER] trained, [PLACEHOLDER] now teaching across our campuses.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teacherStats.map((s) => (
            <div
              key={s.label}
              className="rounded-[--radius-card] border border-border bg-card p-5 shadow-soft"
            >
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-2 font-serif text-3xl font-semibold">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {teacherPortraits.map((t) => (
            <figure key={t.photo} className="overflow-hidden rounded-[--radius-card] shadow-soft">
              <img
                src={t.photo}
                alt={t.alt}
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <blockquote className="mt-12 max-w-3xl rounded-[--radius-frame] border border-border bg-card p-8 shadow-lift">
          <Quote className="size-6 text-meadow" aria-hidden />
          <p className="mt-4 font-serif text-2xl leading-snug">
            &ldquo;I walked out of a village where no girl had a salary. I walked back a year later
            with one.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-muted-foreground">
            — [PLACEHOLDER Name], teacher, Brookefield campus
          </footer>
        </blockquote>

        <Link
          to="/careers"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          See open roles <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function HowFunded() {
  const points = [
    "Funded from Orange's own operating surplus",
    "Topped up by partners for specific commitments",
    "No fundraising from parents",
    "No public donations, no payment gateway",
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead
          eyebrow="Credibility"
          title="Where the money comes from"
          kicker="Every programme here is funded from Orange's own operating surplus, topped up by partners for specific commitments. We do not fundraise from parents and we do not take public donations."
        />
        <ul className="mt-9 space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHead
              eyebrow="Journal"
              title="Notes from the work"
              kicker="Programme updates, parenting notes from our educators, early-years explainers. Categories: Impact · Parenting · Inside Orange."
            />
          </div>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Read all <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="flex flex-col overflow-hidden rounded-[--radius-frame] border border-border bg-card shadow-soft"
            >
              <figure>
                <img
                  src={a.photo}
                  alt={a.alt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-meadow">
                  {a.category}
                </span>
                <h3 className="font-serif text-xl font-semibold">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.excerpt}</p>
                <Link
                  to="/journal"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary"
                >
                  Read the article <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerField({ label, name, type = "text", required = true, placeholder, autoComplete }) {
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

function PartnerWithUs() {
  const { sent, setSent, submitting, error, handleSubmit } = useWeb3Forms({
    subject: "Better World partnership enquiry",
  });
  return (
    <section id="partner" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Sparkles className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Partner with us</p>
          </div>
          <h2 className="display-lg mt-4">Work with us on this</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            For CSR teams, hospitals, NGOs and organisations who want to fund or extend one of these
            programmes. Enquiries go to a separate inbox — never admissions.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
            <Mail className="size-4" /> betterworld@orangeplayschool.in
          </p>
        </div>

        {sent ? (
          <div className="rounded-[--radius-frame] border border-meadow/30 bg-meadow-soft p-8 shadow-lift">
            <p className="eyebrow text-meadow">Received</p>
            <p className="mt-4 font-serif text-2xl">Thank you — we will be in touch.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Someone from the Better World team will reply within two working days.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form
            className="grid gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-lift sm:p-8 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <Honeypot />
            <PartnerField label="Your name" name="p-name" placeholder="Full name" autoComplete="name" />
            <PartnerField label="Organisation" name="p-org" placeholder="Company / trust / hospital" />
            <PartnerField
              label="Work email"
              name="p-email"
              type="email"
              placeholder="you@organisation.com"
              autoComplete="email"
            />
            <PartnerField label="Phone" name="p-phone" type="tel" placeholder="+91" autoComplete="tel" required={false} />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="p-programme" className="text-sm font-bold">
                Programme of interest <span className="text-primary">*</span>
              </label>
              <select
                id="p-programme"
                name="p-programme"
                required
                defaultValue=""
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>Insulin sponsorship</option>
                <option>School bags for villages</option>
                <option>Trees with every campus</option>
                <option>Tribal teacher programme</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="p-message" className="text-sm font-bold">
                Tell us what you have in mind
              </label>
              <textarea
                id="p-message"
                name="p-message"
                rows={4}
                placeholder="Scope, timeline, budget range — as much or as little as you want to share."
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <FormStatus error={error} className="sm:col-span-2" />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Get in touch"} <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
