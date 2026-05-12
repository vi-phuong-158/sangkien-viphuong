import { TECH } from "../data/portfolio";

export default function TechMarquee() {
  const items = [...TECH, ...TECH];

  return (
    <section
      style={{
        padding: "52px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="mq-track">
          {items.map((tech, index) => (
            <div key={`${tech.n}-${index}`} className="spill" style={{ margin: "0 6px" }}>
              <span>{tech.i}</span>
              <span>{tech.n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
