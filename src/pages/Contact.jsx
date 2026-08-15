import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useDocumentMeta } from "@/lib/use-document-meta";

// Fix Leaflet default marker asset URLs under Vite's bundler.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const heroPhoto = img("photo-1587616211892-f743fcca64f9", 1600);

const campuses = [
  {
    id: "brookefield",
    name: "Brookefield, Bangalore",
    badge: "Flagship",
    photo: img("photo-1580582932707-520aed937b7b", 1000),
    alt: "The Brookefield campus entrance with a garden path",
    address:
      "12, Brookefield Main Road, Kundalahalli, Bangalore, Karnataka 560037",
    mapsQuery: "Brookefield+Main+Road+Kundalahalli+Bangalore",
    coords: [12.9698, 77.7215],
    phone: "+91 80 4700 0111",
    whatsapp: "+91 98860 00111",
    email: "brookefield@orangeplayschool.in",
    schoolHours: "8:30am – 12:30pm",
    daycareHours: "8:00am – 6:30pm",
    head: "Anita Krishnan",
    programmes: ["Infant Care", "Pre-Toddler", "Toddler", "LKG", "UKG", "Daycare"],
    routes: ["Whitefield", "Marathahalli", "Kundalahalli", "ITPL"],
  },
  {
    id: "coimbatore",
    name: "R.S. Puram, Coimbatore",
    photo: img("photo-1503676260728-1c00da094a0b", 1000),
    alt: "The Coimbatore campus with a shaded verandah",
    address:
      "45, Race Course Road, R.S. Puram, Coimbatore, Tamil Nadu 641002",
    mapsQuery: "Race+Course+Road+RS+Puram+Coimbatore",
    coords: [11.0056, 76.9540],
    phone: "+91 422 470 0222",
    whatsapp: "+91 98430 00222",
    email: "coimbatore@orangeplayschool.in",
    schoolHours: "8:45am – 12:45pm",
    daycareHours: "8:15am – 6:30pm",
    head: "Priya Ramanathan",
    programmes: ["Pre-Toddler", "Toddler", "LKG", "UKG", "Daycare"],
    routes: ["R.S. Puram", "Peelamedu", "Saibaba Colony"],
  },
  {
    id: "hyderabad",
    name: "Kondapur, Hyderabad",
    photo: img("photo-1568667256549-094345857637", 1000),
    alt: "The Hyderabad campus with an open play area",
    address:
      "Plot 22, Whitefields Road, Kondapur, Hyderabad, Telangana 500084",
    mapsQuery: "Whitefields+Road+Kondapur+Hyderabad",
    coords: [17.4650, 78.3660],
    phone: "+91 40 4700 0333",
    whatsapp: "+91 90000 00333",
    email: "hyderabad@orangeplayschool.in",
    schoolHours: "8:30am – 12:30pm",
    daycareHours: "8:00am – 6:30pm",
    head: "Suneetha Reddy",
    programmes: ["Toddler", "LKG", "UKG", "Daycare"],
    routes: ["Gachibowli", "Madhapur", "HITEC City"],
  },
  {
    id: "sambhavam",
    name: "Sambhavam Centre, Bangalore",
    badge: "Special education",
    photo: img("photo-1503676260728-1c00da094a0b", 1000),
    alt: "The Sambhavam centre with a quiet therapy room",
    address:
      "7, HAL 2nd Stage, Indiranagar, Bangalore, Karnataka 560008",
    mapsQuery: "HAL+2nd+Stage+Indiranagar+Bangalore",
    coords: [12.9721, 77.6412],
    phone: "+91 80 4700 0444",
    whatsapp: "+91 98860 00444",
    email: "sambhavam@orangeplayschool.in",
    schoolHours: "9:00am – 1:00pm",
    daycareHours: "By appointment",
    head: "Dr. Meera Iyer",
    programmes: ["Sambhavam Assessments", "Special Education", "Therapy"],
    routes: ["Indiranagar", "Domlur", "HAL"],
  },
];

const otherEnquiries = [
  {
    title: "Careers",
    body: "Teachers, therapists, campus operations and central team roles.",
    email: "careers@orangeplayschool.in",
    to: "/careers",
    linkLabel: "See open roles",
  },
  {
    title: "Partnerships & expansion",
    body: "Franchise, real-estate and school-partnership conversations.",
    email: "expansion@orangeplayschool.in",
    to: "/expansion",
    linkLabel: "Read the plan",
  },
  {
    title: "Sambhavam assessments",
    body: "Developmental assessments, therapy plans and special-education admissions.",
    email: "sambhavam@orangeplayschool.in",
    to: "/sambhavam",
    linkLabel: "About Sambhavam",
  },
  {
    title: "Media",
    body: "Press, interviews, photography and campus visits by journalists.",
    email: "media@orangeplayschool.in",
    to: "/journal",
    linkLabel: "Read the journal",
  },
  {
    title: "For a Better World",
    body: "Scholarships, community programmes and CSR partnerships.",
    email: "betterworld@orangeplayschool.in",
    to: "/for-a-better-world",
    linkLabel: "Our commitments",
  },
];

const socials = [
  {
    label: "Instagram",
    handle: "@orangeplayschool",
    href: "https://instagram.com/orangeplayschool",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    handle: "Orange Play School",
    href: "https://facebook.com/orangeplayschool",
    Icon: Facebook,
  },
  {
    label: "YouTube",
    handle: "Orange Early Years",
    href: "https://youtube.com/@orangeplayschool",
    Icon: Youtube,
  },
];

export default function Contact() {
  useDocumentMeta({
    title: "Contact & Campus Visits | Orange Schools",
    description:
      "Campus addresses, hours and direct lines. Book a weekday visit and see a real classroom.",
    image: heroPhoto,
  });
  return (
    <main>
      <Hero />
      <EnquirySection />
      <CampusCards />
      <MapSection />
      <OtherEnquiries />
      <HoursAndResponse />
      <Social />
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
          <p className="eyebrow text-meadow">Visit us</p>
          <h1 className="display-xl mt-5">Come see where your child&rsquo;s day begins</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Visits run on weekdays during school hours. Tell us which campus suits you and we will
            keep the time.
          </p>
          <a
            href="#enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Book a visit <ArrowRight className="size-4" />
          </a>
        </div>
        <figure className="frame-photo">
          <img
            src={heroPhoto}
            alt="A teacher greeting a parent at the school gate"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>
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

function SelectField({ label, name, options, required = true }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-bold">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function EnquirySection() {
  return (
    <section id="enquiry" className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHead
            eyebrow="Enquiry"
            title="Tell us a little about your child"
            kicker="A short form. We reply within one working day and never share your details."
          />
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Reply within one working day",
              "Your visit is confirmed by a person, not a bot",
              "No mailing lists, no marketing calls",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
                <span className="font-semibold">{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [whatsappSame, setWhatsappSame] = useState(true);

  if (sent) {
    return (
      <div className="rounded-[--radius-frame] border border-meadow/30 bg-meadow-soft p-8 shadow-lift">
        <p className="eyebrow text-meadow">Received</p>
        <p className="mt-4 font-serif text-2xl">We will call you within one working day.</p>
        <p className="mt-3 text-sm text-muted-foreground">
          A confirmation email is on its way. If it does not arrive in the next few minutes, check
          your spam folder or write to us at{" "}
          <a href="mailto:admissions@orangeplayschool.in" className="font-bold text-primary">
            admissions@orangeplayschool.in
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-lift sm:p-8 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <Field label="Parent name" name="parent-name" placeholder="Your full name" autoComplete="name" />
      <Field label="Phone" name="phone" type="tel" placeholder="+91 98xxx xxxxx" autoComplete="tel" />

      <div className="sm:col-span-2 flex items-center gap-2 rounded-lg border border-dashed border-border bg-muted px-3.5 py-2.5">
        <input
          id="whatsapp-same"
          name="whatsapp-same"
          type="checkbox"
          checked={whatsappSame}
          onChange={(e) => setWhatsappSame(e.target.checked)}
          className="size-4 rounded border-input text-primary focus:ring-primary/30"
        />
        <label htmlFor="whatsapp-same" className="text-sm font-semibold">
          WhatsApp number is the same as phone
        </label>
      </div>

      {!whatsappSame && (
        <Field
          label="WhatsApp number"
          name="whatsapp"
          type="tel"
          placeholder="+91 98xxx xxxxx"
        />
      )}

      <Field label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
      <Field label="Child's date of birth" name="dob" type="date" />

      <SelectField
        label="Campus"
        name="campus"
        options={campuses.map((c) => c.name)}
      />
      <SelectField
        label="Programme"
        name="programme"
        options={[
          "Infant Care",
          "Pre-Toddler",
          "Toddler",
          "LKG",
          "UKG",
          "Daycare",
          "Sambhavam",
          "Not sure yet",
        ]}
      />

      <Field label="Preferred visit date" name="visit-date" type="date" required={false} />
      <SelectField
        label="How did you hear about us?"
        name="source"
        required={false}
        options={[
          "A friend or family",
          "Google search",
          "Instagram or Facebook",
          "A local sign or hoarding",
          "News or article",
          "Other",
        ]}
      />

      <div className="sm:col-span-2 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-bold">
          Anything we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Allergies, timings, questions — write as little or as much as you like."
          className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="sm:col-span-2 flex items-start gap-2 rounded-lg border border-border bg-muted px-3.5 py-2.5">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-4 rounded border-input text-primary focus:ring-primary/30"
        />
        <label htmlFor="consent" className="text-sm font-semibold leading-relaxed">
          I agree to be contacted by Orange about my enquiry. I have read the{" "}
          <Link to="/terms" className="text-primary underline underline-offset-2">
            privacy notice
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
      >
        Submit enquiry <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

function CampusCards() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Where to find us"
          title="Our campuses"
          kicker="Every campus is different in size and layout, but the day looks the same — small groups, trained teachers, real food, a lot of outdoor time."
        />
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {campuses.map((c) => (
            <CampusCard key={c.id} campus={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusCard({ campus }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${campus.mapsQuery}`;
  const telHref = `tel:${campus.phone.replace(/\s+/g, "")}`;
  const waHref = `https://wa.me/${campus.whatsapp.replace(/[^\d]/g, "")}`;
  return (
    <article
      id={campus.id}
      className="flex scroll-mt-24 flex-col overflow-hidden rounded-[--radius-frame] border border-border bg-card shadow-soft"
    >
      <figure className="relative">
        <img
          src={campus.photo}
          alt={campus.alt}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
        {campus.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-meadow-soft px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-meadow">
            {campus.badge}
          </span>
        )}
      </figure>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold">{campus.name}</h3>
          <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-meadow" aria-hidden />
            <span>{campus.address}</span>
          </p>
        </div>

        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              School hours
            </dt>
            <dd className="mt-1 font-semibold">{campus.schoolHours}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Daycare hours
            </dt>
            <dd className="mt-1 font-semibold">{campus.daycareHours}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Campus head
            </dt>
            <dd className="mt-1 font-semibold">{campus.head}</dd>
          </div>
        </dl>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Programmes
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {campus.programmes.map((p) => (
              <li
                key={p}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Transport routes
          </p>
          <p className="mt-2 text-sm font-semibold">{campus.routes.join(" · ")}</p>
        </div>

        <div className="mt-auto grid gap-2 border-t border-border pt-5 sm:grid-cols-2">
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-4" /> Call {campus.phone}
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MapPin className="size-4" /> Directions
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href={`mailto:${campus.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4" /> Email
          </a>
        </div>
      </div>
    </article>
  );
}

function MapSection() {
  // Frame that covers all campuses (Bangalore ↔ Hyderabad ↔ Coimbatore).
  const bounds = campuses.map((c) => c.coords);
  const openMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Orange+Play+School+India";
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHead
              eyebrow="Find us"
              title="All our campuses on one map"
              kicker="Pinned across Bangalore, Coimbatore and Hyderabad — and the Sambhavam centre in Indiranagar."
            />
          </div>
          <a
            href={openMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Open in Maps <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-9 overflow-hidden rounded-[--radius-frame] border border-border shadow-lift">
          <MapContainer
            bounds={bounds}
            boundsOptions={{ padding: [40, 40] }}
            scrollWheelZoom={false}
            style={{ height: 480, width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {campuses.map((c) => {
              const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${c.mapsQuery}`;
              return (
                <Marker key={c.id} position={c.coords}>
                  <Popup>
                    <div className="space-y-1">
                      <p className="font-serif text-base font-semibold">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.address}</p>
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary"
                      >
                        Directions →
                      </a>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

function OtherEnquiries() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Not about admissions?"
          title="Route it to the right desk"
          kicker="A separate inbox for each team so nothing lands in the admissions queue by mistake."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {otherEnquiries.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft"
            >
              <div>
                <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
              <a
                href={`mailto:${item.email}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                <Mail className="size-4" /> {item.email}
              </a>
              <Link
                to={item.to}
                className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-meadow"
              >
                {item.linkLabel} <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoursAndResponse() {
  const rows = [
    {
      title: "Campus visits",
      body: "Weekdays, during school hours. Weekend visits by appointment only.",
    },
    {
      title: "Enquiries",
      body: "Answered within one working day, Monday to Friday.",
    },
    {
      title: "WhatsApp",
      body: "Answered during school hours, 8:30am – 6:30pm.",
    },
    {
      title: "Central office",
      body: "Monday to Friday, 9:00am – 5:30pm. Closed on national holidays.",
    },
  ];
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Hours & response times"
          title="When we reply"
          kicker="Set the clock by these. If we miss it, tell us."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-3 rounded-[--radius-card] border border-border bg-card p-5 shadow-soft"
            >
              <Clock className="size-5 text-meadow" aria-hidden />
              <div>
                <p className="text-sm font-bold">{r.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Follow the everyday"
          title="Little windows into the day"
          kicker="Photos from the room, notes from teachers and the occasional very small triumph."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {socials.map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-12 place-items-center rounded-full bg-meadow-soft text-meadow">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="font-serif text-lg font-semibold">{handle}</span>
              </span>
              <ArrowRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
