interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
}

export function Marquee({
  items,
  speed = 40,
  className = "",
  separator = "·",
}: MarqueeProps) {
  // Duplicate the list so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div
      className={`marquee ${className}`}
      role="marquee"
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-text">{item}</span>
            <span className="marquee-sep">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
