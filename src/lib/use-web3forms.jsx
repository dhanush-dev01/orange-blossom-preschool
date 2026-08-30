import { useCallback, useState } from "react";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "db57ca86-eb9f-45fe-ad8b-b73130ff9007";

const GENERIC_ERROR =
  "We could not send that just now. Please try again, or call us and we will take the details over the phone.";

export function useWeb3Forms({ subject, fromName = "Orange Play School website" } = {}) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (submitting) return;

      const form = event.currentTarget;
      const data = new FormData(form);
      data.set("access_key", ACCESS_KEY);
      data.set("from_name", fromName);
      if (subject) data.set("subject", subject);

      setSubmitting(true);
      setError(null);

      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          body: data,
        });
        const result = await response.json().catch(() => null);

        if (!response.ok || !result?.success) {
          throw new Error(result?.message || GENERIC_ERROR);
        }

        form.reset();
        setSent(true);
      } catch {
        setError(GENERIC_ERROR);
      } finally {
        setSubmitting(false);
      }
    },
    [fromName, subject, submitting],
  );

  return { sent, setSent, submitting, error, handleSubmit };
}

export function FormStatus({ error, className = "" }) {
  if (!error) return null;
  return (
    <p
      role="alert"
      className={`rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm font-semibold text-destructive ${className}`}
    >
      {error}
    </p>
  );
}

export function Honeypot() {
  return (
    <input
      type="checkbox"
      name="botcheck"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  );
}
