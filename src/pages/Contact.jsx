import { PageShell } from "@/components/site/PageShell";
import { useDocumentTitle } from "@/lib/use-document-title";

export default function Contact() {
  useDocumentTitle("Contact | Orange Play School Bangalore");
  return (
    <PageShell
      eyebrow="Visit us"
      title="Come see where your child\u2019s day begins"
      intro="Campus details, directions and enquiries. Visits run on weekdays through the school day, so you see a real classroom rather than an empty one."
    />
  );
}
