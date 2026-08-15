import { Link } from "react-router-dom";
import { ArrowRight, Check, Download } from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const heroPhoto = img("photo-1596464716127-f2a82984de30", 1600);
export const menuPath = "/orange-weekly-menu.pdf";

const safetyPoints = [
  "Biometric or ID-verified pick-up",
  "A single supervised entry point",
  "Visitor logging at every campus",
  "Child-height fittings with no sharp edges",
  "Fire drills every term",
  "First-aid trained staff in every room",
  "Incident reporting to parents the same day",
];

const facilities = [
  { photo: img("photo-1503454537195-1dcabb73ffb9", 800), alt: "A bright classroom with low tables" },
  { photo: img("photo-1560582861-45078880e48e", 800), alt: "Indoor play area with soft-fall flooring" },
  { photo: img("photo-1587616211892-f743fcca64f9", 800), alt: "Art room with easels and paint" },
  { photo: img("photo-1519689680058-324335c77eba", 800), alt: "A quiet nap room for infants" },
  { photo: img("photo-1544717297-fa95b6ee9643", 800), alt: "The library corner with picture books" },
  { photo: img("photo-1567521464027-f127ff144326", 800), alt: "Shaded outdoor play space" },
];

const activityPhotos = [
  { photo: img("photo-1472162072942-cd5147eb3902", 800), alt: "Children in a music and movement class" },
  { photo: img("photo-1461896836934-ffe607ba8211", 800), alt: "A storytelling circle" },
  { photo: img("photo-1470071459604-3b5ec3a7fe05", 800), alt: "Children gardening outdoors" },
];

const teachers = [
  { photo: img("photo-1573497019940-1c28c88b4f3e", 600), alt: "Portrait of an Orange teacher" },
  { photo: img("photo-1580489944761-15a19d654956", 600), alt: "Portrait of an Orange teacher" },
  { photo: img("photo-1544005313-94ddf0286df2", 600), alt: "Portrait of an Orange teacher" },
  { photo: img("photo-1438761681033-6461ffad8d80", 600), alt: "Portrait of an Orange teacher" },
];

export default function CareAndSafety() {
  useDocumentMeta({
    title: "Care, Safety & Nutrition | Orange Schools",
    description:
      "Nurse on campus, nutritionist-designed menus, parent CCTV access, safe play areas. Every standard we hold, set out in full.",
    image: heroPhoto,
  });
  return (
    <main>
      <Hero />
      <Safety />
      <Cctv />
      <Nurse />
      <Nutrition />
      <Hygiene />
      <Facilities />
      <Activities />
      <Teachers />
      <Communication />
      <Transport />
    </main>
  );
}

function SectionHead({ eyebrow, title }) {
  return (
    <>
      <p className="eyebrow text-meadow">{eyebrow}</p>
      <h2 className="display-lg mt-4">{title}</h2>
    </>
  );
}

function Hero() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow text-meadow">Care &amp; safety</p>
          <h1 className="display-xl mt-5">Nothing about a child&rsquo;s day is left to chance</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Safety, health and nutrition are systems here, not promises. This page sets out every
            one of them so you can judge us on it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Book a campus visit <ArrowRight className="size-4" />
          </Link>
        </div>
        <figure className="frame-photo">
          <img
            src={heroPhoto}
            alt="A teacher supervising children during outdoor play"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="The first question" title="Safety" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {safetyPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cctv() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="CCTV access for parents" title="See the room, any time" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cameras cover every classroom, corridor and play area. Parents get secure app access to
            their child&rsquo;s room during school hours. Footage is retained for 30 days and never
            shared outside the campus.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xs rounded-[--radius-frame] border border-border bg-card p-4 shadow-lift">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">Toddler Room 2</span>
            <span className="rounded-full bg-meadow-soft px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-meadow">
              Live
            </span>
          </div>
          <div className="mt-3 overflow-hidden rounded-[--radius-card] bg-muted">
            <img
              src={img("photo-1587616211892-f743fcca64f9", 600)}
              alt="Parent app view of a live classroom camera feed"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Indiranagar campus &middot; visible 8:30am&ndash;6:00pm
          </p>
        </div>
      </div>
    </section>
  );
}

function Nurse() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <figure className="frame-photo order-last lg:order-first">
          <img
            src={img("photo-1584515933487-779824d29309", 1000)}
            alt="The health room on campus"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <SectionHead eyebrow="Health" title="A nurse, not a first-aid box" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A qualified nurse handles daily health checks, medication schedules with written parent
            consent, and the calls parents would rather not receive late. We have a tie-up with a
            nearby multi-speciality hospital for emergencies.
          </p>
        </div>
      </div>
    </section>
  );
}

function Nutrition() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Nutrition" title="Food a nutritionist signed off" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Menus are designed by a consulting nutritionist, cooked fresh on campus each morning,
            and rotated on a four-week cycle. Allergies and food preferences are recorded at
            admission and flagged at every service. No packaged snacks, no sugary drinks.
          </p>
          <a
            href={menuPath}
            download
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-4" /> See this week&rsquo;s menu
          </a>
        </div>
        <figure className="frame-photo">
          <img
            src={img("photo-1547592180-85f173990554", 1000)}
            alt="A freshly cooked meal served on real plates"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function Hygiene() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="Hygiene &amp; illness" title="Clean, and honest about it" />
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Daily sanitisation of rooms and toys, separate nappy-change areas, hand-washing routines
          taught as part of the day, and a clear stay-at-home policy when a child is unwell.
        </p>
        <Link
          to="/terms"
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          Read the policy <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Play areas &amp; facilities" title="Rooms built for the age that uses them" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Indoor and outdoor play areas, soft-fall flooring, shaded play, a library corner, an art
          room, a nap room, and a music and movement space. Facilities vary by campus — the team
          will walk you through what exists at the one nearest you.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <figure key={f.photo} className="overflow-hidden rounded-[--radius-card] shadow-soft">
              <img
                src={f.photo}
                alt={f.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Activities &amp; enrichment" title="Beyond the timetable" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Music and movement, art, storytelling, yoga, sports, gardening, field trips, festivals and
          annual day. Enrichment classes are available as add-ons.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {activityPhotos.map((a) => (
            <figure key={a.photo} className="overflow-hidden rounded-[--radius-card] shadow-soft">
              <img
                src={a.photo}
                alt={a.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Teachers" title="Who is in the room" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Every teacher is trained through our own Teacher Training Academy, background-verified,
          and first-aid certified. Continuing training runs through the year, not just at induction.
        </p>
        <div className="mt-9 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {teachers.map((t) => (
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
        <Link
          to="/careers"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          Meet the team <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function Communication() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Parent communication" title="You will hear from us" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Daily updates for infants and toddlers, monthly notes for LKG and UKG, two
            parent-teacher conversations a year, and a WhatsApp line to the campus head.
          </p>
        </div>
        <div className="rounded-[--radius-frame] border border-border bg-card p-6 shadow-lift">
          <p className="eyebrow text-meadow">Today at Orange</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "8:45am — Arrived happy, had banana at snack.",
              "11:10am — Water play outdoors, 25 minutes.",
              "1:00pm — Lunch finished, nap 1:20pm–2:40pm.",
              "4:30pm — Painting with Ms. Anita. Photo attached.",
            ].map((line) => (
              <li key={line} className="rounded-[--radius-card] bg-muted px-4 py-3 font-semibold">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <figure className="frame-photo order-last lg:order-first">
          <img
            src={img("photo-1464219789935-c2d9d9aba644", 1000)}
            alt="An Orange school van parked at the campus gate"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <SectionHead eyebrow="Transport" title="Getting here" />
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Transport runs on select routes with GPS-tracked vehicles, a female attendant on every
            route, and verified drivers.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Book a campus visit <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
