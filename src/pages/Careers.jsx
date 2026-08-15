import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  Check,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Upload,
  Users,
} from "lucide-react";
import { useDocumentTitle } from "@/lib/use-document-title";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const heroPhoto = img("photo-1516627145497-ae6968895b74", 1600);
const academyPhoto = img("photo-1524178232363-1fb2b075b655", 1000);
const staffRoomPhoto = img("photo-1524178232363-1fb2b075b655", 1000);
const tribalPhoto = img("photo-1544005313-94ddf0286df2", 1000);

const academyModules = [
  "Child development · 0–6 years",
  "Classroom practice & routines",
  "Safeguarding & child protection",
  "First aid & basic paediatric care",
  "Observation & assessment",
  "Communication with parents",
];

const academyMeta = [
  { label: "Duration", value: "12 weeks [PLACEHOLDER]" },
  { label: "Format", value: "6 weeks class · 6 weeks placed" },
  { label: "Placement", value: "Live Orange classroom" },
  { label: "Mentor", value: "One lead teacher" },
];

const costFacts = [
  "Free for anyone who joins Orange as a teacher afterwards [PLACEHOLDER]",
  "Open to external applicants for a fee of ₹[PLACEHOLDER]",
  "Graduates receive an Orange Early Years Teaching Certificate",
  "Graduates are considered first for openings across the group",
];

const whoWeHire = [
  "Career-changers from any field",
  "Returning mothers coming back to work",
  "First-time teachers with no prior experience",
  "Graduates without an education degree",
];

const openRoles = [
  { role: "Preschool Teacher", campus: "Brookefield, Bangalore", programme: "Toddler / LKG", type: "Full time" },
  { role: "Assistant Teacher", campus: "Brookefield, Bangalore", programme: "Pre-Toddler", type: "Full time" },
  { role: "Infant Care Attendant", campus: "Brookefield, Bangalore", programme: "Infant Care", type: "Full time" },
  { role: "Special Educator", campus: "Sambhavam, Indiranagar", programme: "Sambhavam", type: "Full time" },
  { role: "Nurse", campus: "Kondapur, Hyderabad", programme: "Group-wide", type: "Full time" },
  { role: "Campus Head", campus: "R.S. Puram, Coimbatore", programme: "All programmes", type: "Full time" },
  { role: "Admissions Counsellor", campus: "Brookefield, Bangalore", programme: "Group-wide", type: "Full time" },
  { role: "Cook", campus: "Kondapur, Hyderabad", programme: "Kitchen", type: "Full time" },
  { role: "Housekeeping", campus: "R.S. Puram, Coimbatore", programme: "Campus operations", type: "Part time" },
];

const workingBenefits = [
  { Icon: GraduationCap, title: "Paid training", body: "The academy is paid time, not unpaid preparation." },
  { Icon: Heart, title: "A nurse on campus", body: "For the children, and for you." },
  { Icon: Briefcase, title: "Fixed working hours", body: "Predictable days. Overtime is the exception, not the plan." },
  { Icon: Award, title: "Structured appraisals", body: "Written feedback and a clear route to the next role." },
  { Icon: Users, title: "A path that goes somewhere", body: "Assistant → Lead Teacher → Campus Head. Internal first." },
];

const hiringSteps = [
  { step: "1", title: "Apply", body: "Send us the form. CV welcome but not required." },
  { step: "2", title: "Phone conversation", body: "A 20-minute call with the hiring lead." },
  { step: "3", title: "A morning in a classroom", body: "You spend a morning observing a live Orange classroom." },
  { step: "4", title: "Demo activity", body: "A short activity with children — planned with our support." },
  { step: "5", title: "Offer", body: "Written offer, expected reply within a week." },
];

export default function Careers() {
  useDocumentTitle("Careers & Teacher Training | Orange Play School Bangalore");
  return (
    <main>
      <Hero />
      <Academy />
      <CostAndCertification />
      <WhoWeHire />
      <TribalProgramme />
      <OpenRoles />
      <WorkingAtOrange />
      <HowHiringWorks />
      <ApplicationForm />
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
          <p className="eyebrow text-meadow">Careers</p>
          <h1 className="display-xl mt-5">Teach where teaching is taken seriously</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We train our own teachers. Most people who work here arrived without an early-years
            qualification and left our academy with one.
          </p>
          <a
            href="#open-roles"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            See open roles <ArrowRight className="size-4" />
          </a>
        </div>
        <figure className="frame-photo">
          <img
            src={heroPhoto}
            alt="A teacher reading to a group of children in warm afternoon light"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <GraduationCap className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">The flagship offer</p>
          </div>
          <h2 className="display-lg mt-4">The Orange Teacher Training Academy</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A twelve-week early-years training programme [PLACEHOLDER] covering child development,
            classroom practice, safeguarding, first aid, and observation and assessment. Six weeks
            of classroom instruction, six weeks placed in a live Orange classroom alongside a lead
            teacher.
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {academyMeta.map((m) => (
              <div
                key={m.label}
                className="rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </dt>
                <dd className="mt-1 font-semibold">{m.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {academyModules.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-meadow" aria-hidden />
                <span className="font-semibold">{m}</span>
              </li>
            ))}
          </ul>

          <a
            href="#application"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Join the next batch <ArrowRight className="size-4" />
          </a>
        </div>
        <figure className="frame-photo">
          <img
            src={academyPhoto}
            alt="A training session with trainee teachers"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function CostAndCertification() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Remove the barrier"
          title="Free if you teach with us"
          kicker="Certification is only valuable if it is affordable. The academy is free for anyone who joins Orange afterwards, and paid for external applicants who want the certificate on its own."
        />
        <ul className="mt-9 grid gap-3 md:grid-cols-2">
          {costFacts.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-5 shadow-soft"
            >
              <Award className="mt-0.5 size-5 shrink-0 text-meadow" aria-hidden />
              <span className="text-sm font-semibold">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="#application"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Apply to the academy <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function WhoWeHire() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead
          eyebrow="Widen the funnel"
          title="You do not need a degree in education"
          kicker="We hire for patience, curiosity and reliability, then teach the rest. Career-changers, returning mothers and first-time teachers are all welcome to apply."
        />
        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
          {whoWeHire.map((w) => (
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

function TribalProgramme() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <figure className="frame-photo order-last lg:order-first">
          <img
            src={tribalPhoto}
            alt="A teacher from the tribal recruitment programme in her classroom"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Sparkles className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Tribal recruitment programme</p>
          </div>
          <h2 className="display-lg mt-4">Teachers from villages that never had one</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We recruit young women and graduates from tribal villages, train them at the academy,
            support relocation and housing, and employ them as preschool teachers across our
            campuses.
          </p>
          <Link
            to="/for-a-better-world"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Read more on For a Better World <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function OpenRoles() {
  return (
    <section id="open-roles" className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Open roles"
          title="Roles we are hiring for"
          kicker="A live list — updated as campuses grow. If nothing here fits, apply anyway; the academy runs several batches a year."
        />

        <div className="mt-9 hidden overflow-hidden rounded-[--radius-frame] border border-border bg-card shadow-soft md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Role
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Campus
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Programme
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Type
                </th>
                <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Apply
                </th>
              </tr>
            </thead>
            <tbody>
              {openRoles.map((r, i) => (
                <tr
                  key={`${r.role}-${r.campus}-${i}`}
                  className="border-t border-border align-middle"
                >
                  <td className="px-5 py-4 font-serif text-base font-semibold">{r.role}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.campus}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.programme}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold">
                      {r.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href="#application"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary"
                    >
                      Apply <ArrowRight className="size-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-9 grid gap-4 md:hidden">
          {openRoles.map((r, i) => (
            <article
              key={`${r.role}-mobile-${i}`}
              className="rounded-[--radius-card] border border-border bg-card p-5 shadow-soft"
            >
              <h3 className="font-serif text-lg font-semibold">{r.role}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-meadow" aria-hidden /> {r.campus}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{r.programme}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold">
                  {r.type}
                </span>
                <a
                  href="#application"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary"
                >
                  Apply <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkingAtOrange() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.2fr]">
        <figure className="frame-photo">
          <img
            src={staffRoomPhoto}
            alt="Teachers in a staff room with mugs and printed notes on the wall"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <SectionHead
            eyebrow="Working at Orange"
            title="What we offer"
            kicker="Fixed working hours, paid training, a nurse on campus, structured appraisals, and a path from assistant to lead teacher to campus head."
          />
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {workingBenefits.map(({ Icon, title, body }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-[--radius-card] border border-border bg-card p-4 shadow-soft"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-meadow-soft text-meadow">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowHiringWorks() {
  return (
    <section className="border-y border-border bg-cream-deep section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="How hiring works"
          title="How we hire"
          kicker="Apply → phone conversation → a morning observing a classroom → demo activity with children → offer. About two weeks, start to finish [PLACEHOLDER]."
        />
        <ol className="mt-9 grid gap-4 md:grid-cols-5">
          {hiringSteps.map((s) => (
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

function Field({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  autoComplete,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
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

function ApplicationForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="application" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-meadow-soft text-meadow">
              <Send className="size-4" aria-hidden />
            </span>
            <p className="eyebrow text-meadow">Application</p>
          </div>
          <h2 className="display-lg mt-4">Apply to Orange</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            One form for open roles and academy batches. CV upload optional but recommended.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
            <Phone className="size-4" /> careers@orangeplayschool.in
          </p>
        </div>

        {sent ? (
          <div className="rounded-[--radius-frame] border border-meadow/30 bg-meadow-soft p-8 shadow-lift">
            <p className="eyebrow text-meadow">Received</p>
            <p className="mt-4 font-serif text-2xl">Thank you — your application is with HR.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              We reply to every application. Expect to hear from us within one working week — often
              sooner.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Submit another application
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
            <Field label="Name" name="c-name" placeholder="Your full name" autoComplete="name" />
            <Field label="Phone" name="c-phone" type="tel" placeholder="+91 98xxx xxxxx" autoComplete="tel" />
            <Field label="Email" name="c-email" type="email" placeholder="you@example.com" autoComplete="email" />
            <Field label="Location" name="c-location" placeholder="City, state" autoComplete="address-level2" />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-role" className="text-sm font-bold">
                Role or academy batch <span className="text-primary">*</span>
              </label>
              <select
                id="c-role"
                name="c-role"
                required
                defaultValue=""
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <optgroup label="Academy">
                  <option>Teacher Training Academy — next batch</option>
                  <option>Teacher Training Academy — external (paid)</option>
                </optgroup>
                <optgroup label="Roles">
                  <option>Preschool Teacher</option>
                  <option>Assistant Teacher</option>
                  <option>Infant Care Attendant</option>
                  <option>Special Educator</option>
                  <option>Nurse</option>
                  <option>Campus Head</option>
                  <option>Admissions Counsellor</option>
                  <option>Cook</option>
                  <option>Housekeeping</option>
                </optgroup>
                <option>Something else</option>
              </select>
            </div>

            <Field
              label="Experience (years)"
              name="c-experience"
              type="number"
              placeholder="0"
              required={false}
            />

            <Field
              label="Highest qualification"
              name="c-qualification"
              placeholder="e.g. B.A., ECCE Diploma, 12th"
              required={false}
              className="sm:col-span-2"
            />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="c-cv" className="text-sm font-bold">
                CV upload
              </label>
              <label
                htmlFor="c-cv"
                className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-muted px-3.5 py-3 text-sm text-muted-foreground"
              >
                <Upload className="size-4 text-meadow" aria-hidden />
                <span className="font-semibold">PDF, DOC or DOCX — up to 5 MB</span>
              </label>
              <input
                id="c-cv"
                name="c-cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="text-sm file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-bold file:text-primary-foreground"
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="c-why" className="text-sm font-bold">
                Why Orange? <span className="text-primary">*</span>
              </label>
              <textarea
                id="c-why"
                name="c-why"
                required
                rows={4}
                placeholder="A few honest sentences — what draws you here, and what you hope to learn."
                className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" /> Submit application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
