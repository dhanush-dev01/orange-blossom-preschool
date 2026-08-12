import { useState } from "react";

function Field({ label, name, type = "text", placeholder, defaultValue }) {
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
        defaultValue={defaultValue}
        className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm"
      />
    </div>
  );
}

export function VisitForm({ programmeName, submitLabel = "Book a campus visit" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[--radius-card] border border-meadow/30 bg-meadow-soft p-6">
        <p className="font-serif text-xl">Thank you — we have your request.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Someone from the campus team will call you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-[--radius-frame] border border-border bg-card p-6 shadow-soft sm:grid-cols-2"
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
      {programmeName && <input type="hidden" name="programme" value={programmeName} />}
      <button
        type="submit"
        className="sm:col-span-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {submitLabel}
      </button>
    </form>
  );
}
