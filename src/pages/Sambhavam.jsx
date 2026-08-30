import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  ExternalLink,
  HeartPulse,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";
import { FormStatus, Honeypot, useWeb3Forms } from "@/lib/use-web3forms";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const heroPhoto = img("photo-1587616211892-f743fcca64f9", 1600);
const inclusionPhoto = img("photo-1503676260728-1c00da094a0b", 1200);

const externalSite = "https://sambhavam-autism.com";

const whoWeWorkWith = [
  "Children with autism spectrum conditions",
  "Speech and language delay",
  "Sensory processing differences",
  "Learning differences",
  "Children who need support to join a mainstream classroom",
];

const howItWorks = [
  {
    step: "1",
    title: "Assessment",
    body: "About ninety minutes with your child, plus a conversation with you.",
  },
  {
    step: "2",
    title: "Individual education plan",
    body: "Written for your child, not the diagnosis. Shared with you before we begin.",
  },
  {
    step: "3",
    title: "Weekly sessions",
    body: "One-to-one and small-group sessions with the special educator and therapy team.",
  },
  {
    step: "4",
    title: "Review every six weeks [PLACEHOLDER]",
    body: "A short conversation with you, a written note, and any changes to the plan.",
  },
  {
    step: "5",
    title: "Transition plan",
    body: "Where appropriate, a planned handover into a mainstream Orange classroom.",
  },
];

const therapies = [
  "Special education",
  "Speech and language therapy",
  "Occupational therapy",
  "Behaviour therapy",
  "Sensory integration",
  "Parent training",
  "School-shadow support",
];

export default function Sambhavam() {
  useDocumentMeta({
    title: "Sambhavam — Special Education & Autism Support | Orange",
    description:
      "Assessment, individual education plans, therapy and inclusion support inside a mainstream preschool group.",
    image: heroPhoto,
  });
  return (
    <main>
      <Hero />
      <WhoWeWorkWith />
      <HowItWorks />
      <Therapies />
      <Inclusion />
      <TheTeam />
      <ForSchools />
      <NextStep />
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

function ExternalLinkPill({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
    >
      {children} <ArrowUpRight className="size-4" />
    </a>
  );
}

// Hero uses a full-bleed Meadow-tinted panel to signal a different, more
// serious register (per the plan). External links carry an outbound marker.
function Hero() {
  return (
    <section className="relative overflow-hidden bg-meadow-soft section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow text-meadow">Sambhavam · Special education</p>
          <h1 className="display-xl mt-5">Sambhavam</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Sambhavam is Orange&rsquo;s special education wing. It supports children with autism and
            other developmental needs through structured, individual programmes — with the same
            standards of safety and care as the rest of the group.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={externalSite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Visit sambhavam-autism.com <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#assessment"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Request an assessment <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <figure className="frame-photo">
          <img
            src={heroPhoto}
            alt="A therapist and a child working together at a low table"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

function WhoWeWorkWith() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Let parents recognise their child"
          title="Who Sambhavam is for"
          kicker="If any of this describes your child, an assessment is a good place to begin. We do not require a diagnosis before we meet you."
        />
        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
          {whoWeWorkWith.map((w) => (
            <li
              key={w}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
            <ClipboardList className="size-4" aria-hidden />
          </span>
          <p className="eyebrow text-meadow">How it works</p>
        </div>
        <h2 className="display-lg mt-4">How a programme is built</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          What makes Sambhavam credible to professionals is the structure. Every step below is
          documented, shared with you, and reviewed on a schedule.
        </p>
        <ol className="mt-9 grid gap-4 md:grid-cols-5">
          {howItWorks.map((s) => (
            <li
              key={s.step}
              className="flex flex-col gap-3 rounded-[--radius-frame] border border-border bg-card p-5 shadow-soft"
            >
              <span className="font-serif text-3xl font-semibold text-meadow">{s.step}</span>
              <p className="text-sm font-bold">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Therapies() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Therapies & support"
          title="What Sambhavam offers"
          kicker="Special education, speech and language therapy, occupational therapy, behaviour therapy, sensory integration, parent training and school-shadow support."
        />
        <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {therapies.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-5 shadow-soft"
            >
              <HeartPulse className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ExternalLinkPill href={externalSite}>
            See the full programme on sambhavam-autism.com
          </ExternalLinkPill>
        </div>
      </div>
    </section>
  );
}

function Inclusion() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <figure className="frame-photo order-last lg:order-first">
          <img
            src={inclusionPhoto}
            alt="Children from Sambhavam and mainstream classrooms in shared play"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Sparkles className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Inclusion at Orange</p>
          </div>
          <h2 className="display-xl mt-4">A wing, not a separate world</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Because Sambhavam sits alongside a mainstream preschool group, children move between the
            two as they are ready — shared playground, shared festivals, shared standards.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Shared playground and outdoor time",
              "Shared festivals and annual day",
              "Shared safety and safeguarding standards",
              "Same group of teachers, one Teacher Training Academy",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
                <span className="font-semibold">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TheTeam() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
            <Users className="size-4" aria-hidden />
          </span>
          <p className="eyebrow text-meadow">The team</p>
        </div>
        <h2 className="display-lg mt-4">Who your child works with</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Special educators and therapists, each named with qualifications and years of experience.
          Detailed profiles live on the Sambhavam site.
        </p>
        <div className="mt-8">
          <ExternalLinkPill href={`${externalSite}/team`}>
            Meet the team on sambhavam-autism.com
          </ExternalLinkPill>
        </div>
      </div>
    </section>
  );
}

function ForSchools() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="For schools & professionals"
          title="Working with other schools"
          kicker="We train teachers and support inclusion programmes at other schools. Referrals from paediatricians and therapists are welcome."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Teacher training",
              body: "Short courses for mainstream teachers on autism, sensory needs and inclusion.",
            },
            {
              title: "Inclusion programmes",
              body: "We advise partner schools on building their own inclusion capability.",
            },
            {
              title: "Referrals",
              body: "Paediatricians, speech therapists and occupational therapists — write to us directly.",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="flex flex-col gap-3 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Talk to our team <ArrowRight className="size-4" />
        </Link>
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

function NextStep() {
  const { sent, setSent, submitting, error, handleSubmit } = useWeb3Forms({
    subject: "Sambhavam assessment request",
  });
  return (
    <section id="assessment" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Send className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Next step</p>
          </div>
          <h2 className="display-lg mt-4">Start with an assessment</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            An assessment takes about ninety minutes [PLACEHOLDER] with your child, plus a
            conversation with you. You leave with a written summary either way.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
            <ExternalLink className="size-4" aria-hidden /> sambhavam@orangeplayschool.in
          </p>
          <p className="mt-3 text-xs italic text-muted-foreground">TO CONFIRM inbox address</p>
        </div>

        {sent ? (
          <div className="rounded-[--radius-frame] border border-meadow/30 bg-meadow-soft p-8 shadow-lift">
            <p className="eyebrow text-meadow">Received</p>
            <p className="mt-4 font-serif text-2xl">Thank you — we will be in touch.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              A member of the Sambhavam team will reply within two working days to schedule the
              assessment.
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
            onSubmit={handleSubmit}
          >
            <Honeypot />
            <Field label="Parent name" name="s-name" placeholder="Your full name" autoComplete="name" />
            <Field label="Phone" name="s-phone" type="tel" placeholder="+91 98xxx xxxxx" autoComplete="tel" />
            <Field label="Email" name="s-email" type="email" placeholder="you@example.com" autoComplete="email" />
            <Field label="Child's date of birth" name="s-dob" type="date" />
            <Field
              label="Preferred assessment date"
              name="s-date"
              type="date"
              required={false}
            />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="s-referrer" className="text-sm font-bold">
                Referred by
              </label>
              <select
                id="s-referrer"
                name="s-referrer"
                defaultValue=""
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">— Choose one —</option>
                <option>Paediatrician</option>
                <option>Speech therapist</option>
                <option>Occupational therapist</option>
                <option>Another school</option>
                <option>A friend</option>
                <option>Self-referred</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="s-notes" className="text-sm font-bold">
                Tell us a little about your child
              </label>
              <textarea
                id="s-notes"
                name="s-notes"
                rows={4}
                placeholder="Anything you would like us to know before the assessment — as much or as little as you like."
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="sm:col-span-2 flex items-start gap-2 rounded-lg border border-border bg-muted px-3.5 py-2.5">
              <input
                id="s-consent"
                name="s-consent"
                type="checkbox"
                required
                className="mt-1 size-4 rounded border-input text-primary focus:ring-primary/30"
              />
              <label htmlFor="s-consent" className="text-sm font-semibold leading-relaxed">
                I agree to be contacted by the Sambhavam team about this request.
              </label>
            </div>

            <FormStatus error={error} className="sm:col-span-2" />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request an assessment"} <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
