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
  const box = size === "lg" ? "size-16" : "size-14";
  const glyph = size === "lg" ? "size-10" : "size-9";
  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center rounded-full ${tint} ${box}`}
    >
      <img
        src={`/brand/icons/${file}.svg`}
        alt=""
        className={`${glyph} object-contain`}
        loading="lazy"
      />
    </span>
  );
}
