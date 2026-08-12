import { Link } from "react-router-dom";

const programmeLinks = [
  { id: "infant-care", label: "Infant Care" },
  { id: "pre-toddler", label: "Pre-Toddler" },
  { id: "toddler", label: "Toddler" },
  { id: "lkg", label: "LKG" },
  { id: "ukg", label: "UKG" },
  { id: "daycare", label: "Daycare" },
];

const columns = [
  {
    title: "The group",
    links: [
      { to: "/sambhavam", label: "Sambhavam" },
      { to: "/expansion", label: "Expansion" },
      { to: "/careers", label: "Careers" },
      { to: "/for-a-better-world", label: "For a Better World" },
    ],
  },
  {
    title: "More",
    links: [
      { to: "/journal", label: "Journal" },
      { to: "/contact", label: "Contact us" },
      { to: "/terms", label: "Terms & policies" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-lg font-bold">
              O
            </span>
            <span className="font-serif text-xl font-semibold">Orange</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            An early-years group running preschools, daycare and special education across South
            India. Every child known by name.
          </p>
        </div>
        <div>
          <h4 className="eyebrow text-meadow">Programmes</h4>
          <ul className="mt-4 space-y-2.5">
            {programmeLinks.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/programmes/${p.id}`}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="eyebrow text-meadow">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/70 px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Orange Early Years, Bangalore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
