import { Bird, Blocks, Rabbit, Baby, PawPrint, Wind } from "lucide-react";

const icons = {
  bear: PawPrint,
  owl: Bird,
  elephant: Baby,
  bunny: Rabbit,
  blocks: Blocks,
  kite: Wind,
};

export function ProgrammeEmblem({ emblem, tint, size = "md" }) {
  const Icon = icons[emblem];
  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center rounded-full ${tint} ${
        size === "lg" ? "size-16" : "size-14"
      }`}
    >
      <Icon className={size === "lg" ? "size-8" : "size-7"} strokeWidth={1.6} />
    </span>
  );
}
