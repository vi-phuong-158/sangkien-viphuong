import { useRef } from "react";
import { INSPIRE_CARDS, TIMELINE } from "../data/portfolio";
import { useFadeUp } from "../hooks/useFadeUp";

export default function Inspiration() {
  const ref = useRef(null);
  useFadeUp(ref);

  return (
    <section
      id="inspire"
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.012)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: "rgba(52,211,153,0.05)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div className="sp" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <div className="fu" style={{ maxWidth: 640, marginBottom: 56 }}>
          <div className="slbl" style={{ marginBottom: 14 }}>
            Hành trình
          </div>
          <h2
            className="section-heading"
            style={{
              marginBottom: 20,
            }}
          >
            Nếu tôi làm được —
            <br />
            <span style={{ color: "#34d399" }}>bạn cũng làm được.</span>
          </h2>

          <div className="quote-block fu d1">
            "Tôi không học lập trình từ trường lớp. Tôi học từ bài toán thật, từ lỗi thật và từ AI,
            người thầy kiên nhẫn nhất tôi từng gặp."
          </div>
        </div>

        <div className="fu d2" style={{ display: "flex", gap: 16, marginBottom: 64, paddingLeft: 4, color: "rgb(255, 255, 255)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {TIMELINE.map((item, index) => (
              <div className="timeline-rail" key={item.y}>
                <div className="tl-dot" />
                {index < TIMELINE.length - 1 && <div className="tl-line" />}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((item, index) => (
              <div key={item.y} style={{ paddingBottom: index < TIMELINE.length - 1 ? 32 : 0, paddingLeft: 20 }}>
                <div className="timeline-year">{item.y}</div>
                <div className="timeline-title">{item.t}</div>
                <div className="timeline-desc">{item.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="inspire-grid">
          {INSPIRE_CARDS.map((card, index) => (
            <div key={card.title} className={`gc fu d${(index % 3) + 1}`} style={{ padding: 24 }}>
              <div style={{ fontSize: 24, marginBottom: 14 }}>{card.icon}</div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: 0 }}>
                {card.title}
              </div>
              <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.68 }}>{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
