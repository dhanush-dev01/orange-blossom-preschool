import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useDocumentMeta } from "@/lib/use-document-meta";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const heroPhoto = img("photo-1524178232363-1fb2b075b655", 1600);

const categories = ["All", "Impact", "Parenting", "Inside Orange"];

// Launch article list, per the "For a Better World" brief.
// Real bodies are TO CONFIRM by Orange's editorial team.
const articles = [
  {
    slug: "why-we-sponsor-insulin",
    category: "Impact",
    title: "Why we sponsor insulin",
    excerpt:
      "What a lifelong condition costs a family in a year, and why the sponsorship is monthly rather than one-off.",
    photo: img("photo-1579154204601-01588f351e67", 800),
    alt: "A vial of insulin on a wooden table",
    minutes: 6,
    date: "Coming soon",
  },
  {
    slug: "what-a-school-bag-actually-changes",
    category: "Impact",
    title: "What a school bag actually changes",
    excerpt:
      "Notes from the last delivery in a village most maps skip — what the bag carries and what it does not.",
    photo: img("photo-1503676260728-1c00da094a0b", 800),
    alt: "A row of new school bags",
    minutes: 5,
    date: "Coming soon",
  },
  {
    slug: "meet-the-first-teachers",
    category: "Inside Orange",
    title: "Meet the first teachers from the tribal programme",
    excerpt:
      "Four women, four villages, one classroom each. What year one looked like, in their own words.",
    photo: img("photo-1544005313-94ddf0286df2", 800),
    alt: "A teacher in a classroom",
    minutes: 8,
    date: "Coming soon",
  },
  {
    slug: "ready-for-lkg",
    category: "Parenting",
    title: "How to tell if your child is ready for LKG",
    excerpt:
      "A short, honest checklist from our educators — the questions we wish parents asked us, not the ones they usually ask.",
    photo: img("photo-1503454537195-1dcabb73ffb9", 800),
    alt: "A child looking at a book",
    minutes: 4,
    date: "Coming soon",
  },
  {
    slug: "early-signs-extra-support",
    category: "Parenting",
    title: "Early signs a child may need extra support",
    excerpt:
      "Written with the Sambhavam team: what to look for, what is normal, and what to do next.",
    photo: img("photo-1587616211892-f743fcca64f9", 800),
    alt: "A teacher sitting with a child on a rug",
    minutes: 7,
    date: "Coming soon",
  },
];

export default function Journal() {
  useDocumentMeta({
    title: "Journal — Notes from the work | Orange Group of Schools",
    description:
      "Programme updates, parenting notes from our educators, and early-years explainers. Categories: Impact · Parenting · Inside Orange.",
    image: heroPhoto,
  });
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
    [active]
  );

  return (
    <main>
      <Hero />
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <article
                key={a.slug}
                className="flex flex-col overflow-hidden rounded-[--radius-frame] border border-border bg-card shadow-soft"
              >
                <figure className="relative">
                  <img
                    src={a.photo}
                    alt={a.alt}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-meadow-soft px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-meadow">
                    {a.category}
                  </span>
                </figure>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                    <span>{a.date}</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" aria-hidden /> {a.minutes} min read
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold">{a.title}</h2>
                  <p className="text-sm text-muted-foreground">{a.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    Coming soon <ArrowRight className="size-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 rounded-[--radius-card] border border-dashed border-border bg-card p-5 text-center text-sm text-muted-foreground">
            Full article bodies are TO CONFIRM by the editorial team. Categories and launch list
            are locked.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/for-a-better-world"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              See our impact programmes <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book a campus visit <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <BookOpen className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Journal</p>
          </div>
          <h1 className="display-xl mt-5">Notes from the work</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Programme updates, parenting notes from our educators, and early-years explainers. Three
            categories, honestly written.
          </p>
        </div>
        <figure className="frame-photo">
          <img
            src={heroPhoto}
            alt="A pen and open notebook on a wooden table"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}
