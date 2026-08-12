import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Syringe, Backpack, TreeDeciduous, GraduationCap } from "lucide-react";
import { programmes } from "@/data/programmes";
import { ProgrammeEmblem } from "@/components/site/ProgrammeEmblem";
import { useDocumentTitle } from "@/lib/use-document-title";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const stats = [
  { figure: "9", label: "years of audited operations" },
  { figure: "3", label: "campuses" },
  { figure: "6", label: "programmes, 6 months to 6 years" },
  { figure: "1", label: "special-education wing" },
  { figure: "130+", label: "children enrolled today" },
];

const standards = [
  "Small groups and named teachers.",
  "A nurse and a nutritionist on call.",
  "CCTV access for parents.",
  "Food cooked fresh on campus.",
  "Play that is planned, not filled.",
  "Nothing about a child's day is left to chance.",
];

const dayPhotos = [
  { src: img("photo-1567521464027-f127ff144326", 800), alt: "Children at mealtime" },
  { src: img("photo-1571210862729-78a52d3779a2", 800), alt: "Outdoor play in the garden" },
  { src: img("photo-1544717297-fa95b6ee9643", 800), alt: "A teacher reading to children" },
];

const voices = [
  {
    quote:
      "The teachers send a note every single day. In two months our daughter went from clinging at the gate to running in ahead of us. That change is what we were paying for.",
    name: "Divya",
    meta: "Toddler · Indiranagar campus",
  },
  {
    quote:
      "We toured four schools. Orange was the only one that let us walk in mid-morning and watch a real class. Nothing was staged, and that told us everything.",
    name: "Rahul",
    meta: "LKG · Whitefield campus",
  },
  {
    quote:
      "Our son is on the spectrum. Sambhavam gave him a therapist and a quieter room, but he still eats lunch with the other children. Both things mattered to us.",
    name: "Meera",
    meta: "Sambhavam · JP Nagar campus",
  },
];

const betterWorld = [
  { Icon: Syringe, text: "Insulin sponsorship for children with Type 1 diabetes." },
  { Icon: Backpack, text: "School bags for government-school children in unreached villages." },
  { Icon: TreeDeciduous, text: "Trees planted with every new campus." },
  { Icon: GraduationCap, text: "Teaching careers opened up for tribal young women." },
];

export default function Home() {
  useDocumentTitle("Orange Play School Bangalore | Preschool, Daycare & Special Education");
  return (
    <main>
      <Hero />
      <ProofStrip />
      <ChooseByAge />
      <WhyOrange />
      <Sambhavam />
      <ParentVoices />
      <GroupTeaser />
      <CareersTeaser />
      <BetterWorld />
      <VisitUs />
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-background section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow text-meadow">Preschool · Daycare · Special education</p>
          <h1 className="display-xl mt-5">
            A happy place to grow —{" "}
            <span className="italic text-primary">built to a standard.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Orange is an early-years group running preschools, daycare and special education across
            South India. Nine years of operations, one promise: every child known by name.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book a campus visit
            </Link>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
            >
              Explore our programmes <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="frame-photo">
          <img
            src={img("photo-1503454537195-1dcabb73ffb9", 1200)}
            alt="A child painting at a classroom table in warm morning light"
            className="h-[380px] w-full object-cover lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-border bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-4xl font-bold text-meadow">{s.figure}</p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChooseByAge() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-meadow">Choose by age</p>
            <h2 className="display-lg mt-3">Find the right room for your child</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Six programmes, each with its own space, its own ratio, and its own daily rhythm.
            </p>
          </div>
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            See all programmes <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.id}
              to={`/programmes/${p.id}`}
              className="group rounded-[--radius-card] border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <ProgrammeEmblem emblem={p.emblem} tint={p.tint} />
              <p className="eyebrow mt-5 text-meadow">{p.age}</p>
              <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                Learn more{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOrange() {
  return (
    <section className="bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-meadow">Why parents choose Orange</p>
        <h2 className="display-lg mt-3 max-w-2xl">What a good day looks like here</h2>

        <div className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {standards.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border-b border-border/70 pb-4 text-base"
            >
              <Check className="mt-1 size-4 shrink-0 text-meadow" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {dayPhotos.map((p) => (
            <div key={p.src} className="frame-photo">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-60 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sambhavam() {
  return (
    <section className="bg-plum text-plum-foreground section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="eyebrow opacity-80">Special education</p>
          <h2 className="display-lg mt-3">Sambhavam — our special education wing</h2>
          <p className="mt-5 text-lg leading-relaxed opacity-90">
            Some children need a different room, a different pace, and a differently trained
            teacher. Sambhavam provides all three, alongside our mainstream campuses.
          </p>
          <Link
            to="/sambhavam"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum-foreground px-6 py-3.5 text-sm font-bold text-plum transition-transform hover:-translate-y-0.5"
          >
            Visit Sambhavam <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="frame-photo">
          <img
            src={img("photo-1516627145497-ae6968895b74", 1000)}
            alt="A calm one-to-one therapy room"
            loading="lazy"
            className="h-[360px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ParentVoices() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-meadow">Parent voices</p>
        <h2 className="display-lg mt-3">In their words</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="rounded-[--radius-card] border border-border bg-card p-6 shadow-soft"
            >
              <blockquote className="font-serif text-lg leading-relaxed">“{v.quote}”</blockquote>
              <figcaption className="mt-5">
                <p className="font-bold">{v.name}</p>
                <p className="text-sm text-muted-foreground">{v.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GroupTeaser() {
  return (
    <section className="bg-cream-deep section-pad">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow text-meadow">The group</p>
        <h2 className="display-lg mt-4">From one classroom to a hundred</h2>
        <p className="mt-8 font-serif text-2xl italic leading-relaxed text-muted-foreground">
          “We started in 2016 with thirty children. We are building the systems that let a school
          hold its quality while it grows.”
        </p>
        <Link
          to="/journal"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-bold transition-colors hover:bg-background"
        >
          Read our Expansion story <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function CareersTeaser() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div className="frame-photo">
          <img
            src={img("photo-1524178232363-1fb2b075b655", 1000)}
            alt="A teacher training session in progress"
            loading="lazy"
            className="h-[320px] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow text-meadow">Careers</p>
          <h2 className="display-lg mt-3">Teach with us</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Our Teacher Training Academy trains early-years educators — including graduates from
            tribal villages we recruit, train and employ.
          </p>
          <Link
            to="/careers"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Work at Orange <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BetterWorld() {
  return (
    <section className="bg-meadow text-meadow-foreground section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow opacity-80">For a better world</p>
            <h2 className="display-lg mt-3">What we do beyond the gate</h2>
          </div>
          <Link
            to="/for-a-better-world"
            className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4"
          >
            See our programmes <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {betterWorld.map((b) => (
            <div
              key={b.text}
              className="rounded-[--radius-card] bg-meadow-foreground/10 p-6 ring-1 ring-meadow-foreground/20"
            >
              <b.Icon className="size-8" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitUs() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-pad" id="visit">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="frame-photo">
          <img
            src={img("photo-1580582932707-520aed937b7b", 1000)}
            alt="The Orange campus exterior with a garden entrance"
            loading="lazy"
            className="h-[380px] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow text-meadow">Visit us</p>
          <h2 className="display-lg mt-3">Come see where your child&rsquo;s day begins</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Visits run on weekdays through the school day, so you see a real classroom rather than
            an empty one. Book a time and we will keep it.
          </p>

          {sent ? (
            <div className="mt-8 rounded-[--radius-card] border border-meadow/30 bg-meadow-soft p-6">
              <p className="font-serif text-xl">Thank you — we have your request.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Someone from the campus team will call you within one working day.
              </p>
            </div>
          ) : (
            <form
              className="mt-8 grid gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Parent name" name="name" placeholder="Your full name" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91" />
              <Field label="Child's age" name="age" placeholder="e.g. 2 years 4 months" />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="campus" className="text-sm font-bold">
                  Campus
                </label>
                <select
                  id="campus"
                  name="campus"
                  className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm"
                >
                  <option>Indiranagar</option>
                  <option>Whitefield</option>
                  <option>JP Nagar</option>
                </select>
              </div>
              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a campus visit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm"
      />
    </div>
  );
}
