import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function ForABetterWorld() {
  useDocumentTitle("For a Better World | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="Impact"
      title="What we do beyond the gate"
      intro="Insulin sponsorship, school bags for unreached villages, trees with every campus, and teaching careers for tribal young women."
      cta={{ to: "/contact", label: "Support a programme" }}
    />
  );
}
