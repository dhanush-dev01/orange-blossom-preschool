import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Sambhavam() {
  useDocumentTitle("Sambhavam | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="Special education"
      title="Sambhavam — special education, done seriously"
      intro="A different room, a different pace, and a differently trained teacher — alongside our mainstream campuses."
      cta={{ to: "/contact", label: "Request an assessment" }}
    />
  );
}
