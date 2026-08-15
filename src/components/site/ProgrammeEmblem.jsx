// Map the abstract emblem name used in data/ to the actual illustrated icon
// shipped in /public/brand/icons/ (from the Brand Book icon family).
const iconFile = {
  bear: "bear",
  owl: "owl",
  elephant: "elephant",
  bunny: "rabbit",
  blocks: "blocks",
  kite: "kite",
};

export function ProgrammeEmblem({ emblem, tint, size = "md" }) {
  const file = iconFile[emblem] ?? emblem;
  const box = size === "lg" ? "size-24" : "size-20";
  const glyph = size === "lg" ? "size-24" : "size-20";
  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center ${box}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}brand/icons/${file}.svg`}
        alt=""
        className={`${glyph} object-contain`}
        loading="lazy"
      />
    </span>
  );
}
