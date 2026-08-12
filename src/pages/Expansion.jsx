import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Expansion() {
  useDocumentTitle("Expansion | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="The group"
      title="From one classroom to a hundred"
      intro="We started in 2016 with thirty children. We are building the systems that let a school hold its quality while it grows."
      cta={{ to: "/contact", label: "Talk to us about partnering" }}
    />
  );
}
