import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Careers() {
  useDocumentTitle("Careers | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="Work with us"
      title="Teach with us"
      intro="Our Teacher Training Academy trains early-years educators — including graduates from tribal villages we recruit, train and employ."
      cta={{ to: "/contact", label: "Apply or join a training batch" }}
    />
  );
}
