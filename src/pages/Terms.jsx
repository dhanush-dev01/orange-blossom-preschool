import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Terms() {
  useDocumentTitle("Terms & Policies | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms and policies"
      intro="Our terms of use, privacy policy and campus policies."
    />
  );
}
