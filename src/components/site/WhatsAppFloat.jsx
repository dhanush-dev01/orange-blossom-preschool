import { MessageCircle } from "lucide-react";

// Floating WhatsApp button — mobile only, per the site plan's secondary CTA.
// Number is a placeholder; update once Orange confirms the campus WhatsApp line.
const WHATSAPP_NUMBER = "919886000111"; // TO CONFIRM
const MESSAGE = encodeURIComponent(
  "Hi Orange team, I'd like to book a campus visit."
);

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 lg:hidden"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span>WhatsApp us</span>
    </a>
  );
}
