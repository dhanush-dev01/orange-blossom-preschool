import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Journal() {
  useDocumentTitle("Journal | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="Reading"
      title="Notes from Orange"
      intro="Parenting notes, campus stories and our expansion journal."
    />
  );
}
