import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

const programmeLinks = [
  { id: "infant-care", label: "Infant Care" },
  { id: "pre-toddler", label: "Pre-Toddler" },
  { id: "toddler", label: "Toddler" },
  { id: "lkg", label: "LKG" },
  { id: "ukg", label: "UKG" },
  { id: "daycare", label: "Daycare" },
];

const groupLinks = [
  { to: "/care-and-safety", label: "Care & Safety" },
  { to: "/sambhavam", label: "Sambhavam" },
  { to: "/expansion", label: "Expansion" },
  { to: "/careers", label: "Careers" },
  { to: "/for-a-better-world", label: "For a Better World" },
  { to: "/journal", label: "Journal" },
];

// TO CONFIRM full current list; each links to its Contact anchor.
const campusLinks = [
  { anchor: "#brookefield", label: "Brookefield, Bangalore", note: "Flagship" },
  { anchor: "#coimbatore", label: "Coimbatore" },
  { anchor: "#hyderabad", label: "Hyderabad" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/brand/orange-group.svg"
              alt=""
              aria-hidden="true"
              className="size-11 shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-semibold">Orange Group of Schools</span>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-meadow">
                One symbol · A hundred schools · One promise
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Every child known by name. Every day worth remembering.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Orange International Preschool &amp; Daycare
            <span className="mt-1 block text-[0.65rem] font-bold normal-case tracking-normal text-meadow">
              Part of Orange Group of Schools
            </span>
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

        <div>
          <h4 className="eyebrow text-meadow">The group</h4>
          <ul className="mt-4 space-y-2.5">
            {groupLinks.map((l) => (
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

        <div>
          <h4 className="eyebrow text-meadow">Campuses</h4>
          <ul className="mt-4 space-y-2.5">
            {campusLinks.map((c) => (
              <li key={c.anchor}>
                <Link
                  to={`/contact${c.anchor}`}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {c.label}
                  {c.note && (
                    <span className="ml-1 text-xs font-bold uppercase tracking-wider text-meadow">
                      · {c.note}
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-xs italic text-muted-foreground">
              TO CONFIRM full current list
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-meadow">Reach us</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="tel:+918047000111"
                className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-meadow" /> +91 80 4700 0111
              </a>
              <p className="pl-6 text-xs italic text-muted-foreground">TO CONFIRM</p>
            </li>
            <li>
              <a
                href="https://wa.me/919886000111"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 text-meadow" /> WhatsApp
              </a>
              <p className="pl-6 text-xs italic text-muted-foreground">TO CONFIRM</p>
            </li>
            <li>
              <a
                href="mailto:admissions@orangeschools.net"
                className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-meadow" /> admissions@orangeschools.net
              </a>
              <p className="pl-6 text-xs italic text-muted-foreground">TO CONFIRM</p>
            </li>
            <li>
              <a
                href="https://instagram.com/orangeplayschool"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="size-4 text-meadow" /> Instagram
              </a>
              <p className="pl-6 text-xs italic text-muted-foreground">TO CONFIRM</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Orange Group of Schools. Registered as SMR Foundation.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="font-semibold hover:text-foreground">
              Privacy
            </Link>
            <span aria-hidden>·</span>
            <Link to="/terms" className="font-semibold hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

